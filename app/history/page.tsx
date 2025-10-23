"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

// Define a type for the locales
type LocaleType = "kn" | "en";

const historicalMessages: Record<LocaleType, string[]> = {
  en: [
    "*",
  ],
  kn: [
    "*",
  ],
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

  if (!isLocaleLoaded) return null; // Prevent rendering until locale is loaded

  return (
    <main className="min-h-screen flex flex-col items-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">{titles[currentLocale]}</h1>
      <div className="max-w-2xl mx-auto">
        {messages.map((para: string, index: number) => (
          <p key={index} className="text-lg mb-4 text-justify">
            {para}
          </p>
        ))}
      </div>
    </main>
  );
}
