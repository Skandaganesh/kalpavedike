"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";
import Image from "next/image";
import P1 from "/app/administration/p1.jpg";
import P2 from "/app/administration/p2.jpg";
import P3 from "/app/administration/p3.jpg";
import P4 from "/app/administration/p4.jpg";
import P5 from "/app/administration/p5.jpg";


type LocaleType = "kn" | "en";
type ImageType = typeof P1;

const placesContent: Record<
  LocaleType,
  {
    title: string;
    places: { name: string; description: string; image: ImageType }[];
  }
> = {
  en: {
    title: "Management Committee",
    places: [
      {
        name: "President",
        description: "Ravichandra",
        image: P1,
      },
      {
        name: "Vice President",
        description: "Dhananjaya",
        image: P2,
      },
      {
        name: "Vice President",
        description: "Praveen",
        image: P3,
      },
      {
        name: "Principal Secretary",
        description: "Shailesh",
        image: P4,
      },
      {
        name: "Treasurer",
        description: "lolakshi",
        image: P5,
      },
    ],
  },
  kn: {
    title: "ವ್ಯವಸ್ಥಾಪನ ಸಮಿತಿ",
    places: [
      {
        name: "ಅಧ್ಯಕ್ಷರು",
        description: "ರವಿಚಂದ್ರ",
        image: P1,
      },
      {
        name: "ಉಪಾಧ್ಯಕ್ಷರು",
        description: "ಧನಂಜಯ",
        image: P2,
      },
      {
        name: "ಉಪಾಧ್ಯಕ್ಷರು",
        description: "ಪ್ರವೀಣ್",
        image: P3,
      },
      {
        name: "ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ",
        description: "ಶೈಲೇಶ್",
        image: P4,
      },
      {
        name: "ಕೋಶಾಧಿಕಾರಿ",
        description: "ಲೋಲಾಕ್ಷಿ",
        image: P5,
      },
    ],
  },
};

export default function Nearby_Places() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const { title, places } = placesContent[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#f3da5a] font-serif">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">{title}</h1>

      <div className="flex flex-col items-center space-y-8">
        {/* Top Row - 1 image */}
        <div className="flex justify-center">
          <PlaceCard {...places[0]} />
        </div>

        {/* Second Row - 2 images */}
        <div className="flex justify-center space-x-6">
          <PlaceCard {...places[1]} />
          <PlaceCard {...places[2]} />
        </div>

        {/* Third Row - 2 images */}
        <div className="flex justify-center space-x-6">
          <PlaceCard {...places[3]} />
          <PlaceCard {...places[4]} />
        </div>
      </div>
    </main>
  );
}

function PlaceCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: ImageType;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <Image
        src={image}
        alt={name}
        className="rounded-lg object-contain"
        width={250}
        height={180}
      />
      <h2 className="text-orange-600 font-semibold text-lg mt-3">{name}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
}