"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { changeLocale } from "./store/localeSlice";
import Hero from "./components/hero";
import Link from "next/link";
import Image from "next/image";
import SEOComponent from "./cmpnents/SEOComponent";

type LocaleType = "kn" | "en";

const welcomeTitle: Record<LocaleType, string> = {
  en: "WELCOME TO SHRI Daivaraja babbuswamy kalpavedike",
  kn: "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆಗೆ ಸ್ವಾಗತ",
};

const welcomeContent: Record<LocaleType, string> = {
  en: "Shri Daivaraja babbuswamy kalpavedike",
  kn: "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆ", 
};

export default function Component() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "kn") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <>
      <SEOComponent
        title="Shri Daivaraja babbuswamy kalpavedike - A Sacred Destination for Devotees"
        description="Explore the Shri Daivaraja babbuswamy kalpavedike, a revered spiritual destination in Karnataka, dedicated to peace, devotion, and cultural heritage."
        image="http://www.kalpavedike.vercel.app/logo.jpg"
        url="http://www.kalpavedike.vercel.app/"
      />

      <main className="min-h-screen flex flex-col items-center p-4 sm:p-8 text-center">
        <Hero />
        <div className="w-full max-w-6xl mt-8 sm:mt-20">
          <div className="flex flex-col md:flex-row items-center border-4 p-4 sm:p-8 md:p-16">
            <Image
              src="/c/p4.jpg"
              alt="Shri Daivaraja babbuswamy kalpavedike"
              className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0 md:mr-8"
              width={240}
              height={160}
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg sm:text-xl mb-4">
                {welcomeTitle[currentLocale]}
              </h2>
              <div className="text-sm sm:text-base text-justify mb-4">
                {welcomeContent[currentLocale]}
              </div>
              <Link href="/history">
                <button className="text-red-600 hover:text-red-400 transition-all duration-300">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
