"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

type LocaleType = "kn" | "en";

const historicalMessages: Record<LocaleType, string[]> = {
  en: ["This is a sample description in English."],
  kn: ["ಕನ್ನಡದಲ್ಲಿ ವಿವರಣೆ."],
};

const titles: Record<LocaleType, string> = {
  en: "Historical Significance",
  kn: "ಇತಿಹಾಸ",
};

export default function About() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const messages = historicalMessages[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="flex flex-col items-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">{titles[currentLocale]}</h1>

      {/* 🎥 Add video here */}
      <div className="w-full max-w-md mx-auto mb-2">
        <video
          className="w-full h-auto rounded-3xl shadow-lg"
          controls
          preload="auto"
        >
          <source src="/history/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-2xl mx-auto">
        {messages.map((para: string, index: number) => (
          <p key={index} className="text-lg text-justify mb-2">
            {para}
          </p>
        ))}
      </div>
    </main>
  );
}
