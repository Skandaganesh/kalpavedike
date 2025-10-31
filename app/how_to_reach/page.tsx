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
  { title: string; details: { title: string; description: string }[] }
> = {
  en: {
    title: "About Temple",
    details: [
      {
        title: "Nearest Major Bus Stand",
        description: "KSRTC Bus stand, Bejai (1 km)",
      },
      {
        title: "Nearest Railway Station",
        description: "Mangalore Railway Station (4 km)",
      },
      {
        title: "Nearest Airport",
        description: "Mangalore International Airport (13 km)",
      },
    ],
  },
  kn: {
    title: "ದೈವಸ್ಥಾನದ ಮಾಹಿತಿ",
    details: [
      {
        title: "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆಗೆ ಹತ್ತಿರದ ಪ್ರಮುಖ ಬಸ್ಸು ನಿಲ್ದಾಣ",
        description: "KSRTC, ಬಿಜೈ ಬಸ್ ನಿಲ್ದಾಣ (1 ಕಿ.ಮಿ)",
      },
      {
        title: "ಹತ್ತಿರದಲ್ಲಿರುವ ರೈಲು ನಿಲ್ದಾಣ",
        description: "ಮಂಗಳೂರು ರೈಲು ನಿಲ್ದಾಣ (4 ಕಿ.ಮಿ)",
      },
      {
        title: "ಹತ್ತಿರದಲ್ಲಿರುವ ವಿಮಾನ ನಿಲ್ದಾಣ",
        description: "ಮಂಗಳೂರು ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ (13 ಕಿ.ಮಿ)",
      },
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
    <main className="flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#f3da5a] font-serif">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto bg-opacity-90 p-8 rounded-lg shadow-lg">
        {details.map(({ title, description }, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-orange-600 font-semibold text-lg">{title}</h2>
            <p className="text-[#4a4a4a] leading-relaxed text-base mt-2 whitespace-pre-line">
              {description}
            </p>
            {index < details.length - 1 && (
              <hr className="border-t border-gray-300 my-4" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
