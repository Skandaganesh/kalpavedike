"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

// Define a type for the locales
type LocaleType = "kn" | "en";

// Define content for transport and pooja timings in both English and Kannada
const content: Record<
  LocaleType,
  { title: string; details: { title: string;}[] }
> = {
  en: {
    title: "About Temple",
    details: [
      {
        title: "Pooja Timings of Shri Daivaraja babbuswamy kalpavedike:",
      },
    ],
  },
  kn: {
    title: "ಶ್ರೀ ಕ್ಷೇತ್ರದಲ್ಲಿ ನಡೆಯುವ ಪೂಜಾ ಕಾರ್ಯಕ್ರಮಗಳು",
    details: [
      {
        title:
          "1. ಪ್ರತಿ ಮಂಗಳವಾರ, ಶುಕ್ರವಾರ ಪೂಜೆ ನಡೆಯುತ್ತದೆ ಪೂಜಾ ಸಮಯ ಸಂಜೆ ಗಂಟೆ 7.00ಕ್ಕೆ",
      },
      {
        title: "2. ಶಿವರಾತ್ರಿ ದಿನ ವಿಶೇಷ ಪೂಜೆ ನಡೆಯುತ್ತದೆ ಪೂಜೆ ಸಮಯ ರಾತ್ರಿ ಗಂಟೆ 8.00ಕ್ಕೆ",
      },
      {
        title: "3. ಶ್ರಾವಣ ತಿಂಗಳಲ್ಲಿ(ಸೋಣ ತಿಂಗಳು)ಮೂರನೇ ರವಿವಾರ ಶ್ರೀ ಕಂಬೆಲ್ಲ ದೈವ ದರ್ಶನ ಸೇವೆ, ಹೂವಿನ ಪೂಜೆ ನಡೆಯುತ್ತದೆ. ಪೂಜಾ ಸಮಯ ಮಧ್ಯಾಹ್ನ ಗಂಟೆ 12.00ಕ್ಕೆ ನಂತರ ಅನ್ನಪ್ರಸಾದ ಇರುತ್ತದೆ. ಅದೇ ದಿನ ಭಕ್ತಾಧಿಗಳು ಹೂವಿನ ಪೂಜೆ ಸೇವೆ ಮಾಡಬಹುದು. ಹೂವಿನ ಪೂಜೆ ಬಾಬು ರೂ. 100",
      },
      {
        title: "4. ಪ್ರತಿ ಸಂಕ್ರಮಣದಿನದಂದು ಪೂಜೆ ನಡೆಯುತ್ತದೆ.ಪೂಜಾ ಸಮಯ ರಾತ್ರಿ ಗಂಟೆ 8.00ಕ್ಕೆ ಅದೇ ದಿನ ಶ್ರೀ ಕಂಬೆಲ್ಲು ದೈವಕ್ಕೆ ತನು ತಂಜಲ ಸೇವೆ ಭಕ್ತಾಧಿಗಳು, ಹರಕೆ ರೂಪದಲ್ಲಿ ಸಲ್ಲಿಸಬಹುದು. (ಬೇಕಾಗುವ ವಸ್ತುಗಳು ಸೀಯಾಳ, ಹಣ್ಣುಕಾಯಿ, ದನದ ಹಾಲು, ಹೂ ಹೀಗಾರ ಕಾಣಿಕೆ)ಸಂಕ್ರಮಣ ಬಾಬು ರೂ 1300/-",
      },
      {
        title: "5. ದೀಪಾವಳಿಯಲ್ಲಿ ಬಲೀಂದ್ರ ಪೂಜೆ (ಪರ್ಬ ಚೌ3) ನಡೆಯುತ್ತದೆ ಪೂಜಾ ಸಮಯ ರಾತ್ರಿ ಗಂಟೆ 8.00ಕ್ಕೆ "
      },
      {
        title: "6. ಜನವರಿ ತಿಂಗಳ ಕೊನೆಯ ವಾರದಲ್ಲಿ ವಾರ್ಷಿಕ ನೇಮೋತ್ಸವ ಮೂರು ದಿನ ನಡೆಯುತ್ತದೆ (ಶನಿವಾರ, ರವಿವಾರ, ಸೋಮವಾರ) ವಿ.ಸೂ: ಭಕ್ತಾಧಿಗಳಲ್ಲಿ ಎಣ್ಣೆ, ಹೂ, ಹಿಂಗಾರ ಕಾಣಿಕೆ ಕೃತಜ್ಞತಪೂರ್ವಕವಾಗಿ ಸ್ವೀಕರಿಸಲಾಗುವುದು. ಕೋಳಿಯನ್ನು ನೇಮೋತ್ಸವ ಸಂದರ್ಭದಲ್ಲಿ ಸ್ವೀಕರಿಸಲಾಗುವುದು. ಹರಕೆ ರೂಪದಲ್ಲಿ ಸಂಕ್ರಮಣ ಪೂಜೆ, ಅನ್ನಪ್ರಸಾದ ಸಲ್ಲಿಸಬಹುದು ಸಂಕ್ರಮಣ ಬಾಬು ರೂ-1300/-"
      }
    ],
  },
};

export default function About() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const { title, details } = content[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null; // Prevent rendering until locale is loaded

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#f3da5a] font-serif">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto bg-opacity-90 p-8 rounded-lg shadow-lg">
        {details.map(({ title }, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-orange-600 font-semibold text-lg">{title}</h2>
            {index < details.length - 1 && (
              <hr className="border-t border-gray-300 my-4" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
