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
import P6 from "/app/administration/p6.jpg";
import P7 from "/app/administration/p7.jpg";
import P8 from "/app/administration/p8.jpg";



type LocaleType = "kn" | "en";
type ImageType = typeof P1;

const placesContent: Record<
  LocaleType,
  {
    title: string;
    places: { name: string; description: string; image: ImageType }[];
    committeeSections: { title: string; members: string[] }[];
  }
> = {
  en: {
    title: "Management Committee",
    places: [
      { name: "President", description: "Ravichandra", image: P1 },
      { name: "Principal Secretary", description: "Shailesh Kodiyalbail", image: P4 },
      { name: "Treasurer", description: "Mrs. Lolakshi Dhananjay", image: P5 },
      { name: "Vice President", description: "Dhananjay", image: P2 },
      { name: "Vice President", description: "Praveen", image: P3 },
    ],
    committeeSections: [
      {
        title: "Committee Members",
        members: [
          "Dinesh/Purushottam",
        ],
      },
      {
        title: "With Secretaries",
        members: [
          "Bharat Pujari",
          "Sharat Valachhil",
          "Manish Kulal",
          "Suresh Mudigere",
          "Gemini",
          "Jayaram",
          "Pradeep",
        ],
      },
      {
        title: "Sports Secretaries",
        members: [
          "Chetan",
          "Litesh Pujari",
          "Santosh",
          "Gururaj",
          "Pushparaj",
          "Prasad",
          "Chandrakant",
          "Sunil",
        ],
      },
      {
        title: "Cultural Secretaries",
        members: [
          "Kumari Ramya",
          "Kumari Soumya Laxman",  
          "Ms Vasanthi Devendra",
          "Sushma",
          "Jayashree",
        ],
      },
      {
        title: "Note",
        members: [
          "Further updates regarding temple-related programs will be announced soon.",
        ],
      },
    ],
  },

  kn: {
    title: "ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ",
    places: [
      { name: "ಅಧ್ಯಕ್ಷರು", description: "ರವಿಚಂದ್ರ", image: P1 },
      { name: "ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ", description: "ಶೈಲೇಶ್ ಕೊಡಿಯಾಲ್‌ಬೈಲ್", image: P4 },
      { name: "ಕೋಶಾಧಿಕಾರಿ", description: "ಶ್ರೀಮತಿ ಲೋಲಾಕ್ಷಿ ಧನಂಜಯ್", image: P5 },
      { name: "ಉಪಾಧ್ಯಕ್ಷರು", description: "ಧನಂಜಯ್", image: P2 },
      { name: "ಉಪಾಧ್ಯಕ್ಷರು", description: "ಪ್ರವೀಣ್", image: P3 },
    ],
    committeeSections: [
      {
        title: "ಸಂಘಟನಾ ಕಾರ್ಯದರ್ಶಿಗಳು",
        members: [
          "ದಿನೇಶ್/ ಪುರುಷೋತ್ತಮ್",
        ],
      },
      {
        title: "ಜೊತೆ ಕಾರ್ಯದರ್ಶಿಗಳು",
        members: [
          "ಭರತ್ ಪೂಜಾರಿ",
          "ಶರತ್ ವಳಚ್ಚಿಲ್",
          "ಮನೀಶ್ ಕುಲಾಲ್",
          "ಸುರೇಶ್ ಮೂಡಿಗೆರೆ",
          "ಮಿಥುನ್",
          "ಜಯರಾಮ್",
          "ಪ್ರದೀಪ್",
        ],
      },
      {
        title: "ಕ್ರೀಡಾ ಕಾರ್ಯದರ್ಶಿಗಳು",
        members: [
          "ಚೇತನ್",
          "ಲಿತೇಶ್ ಪೂಜಾರಿ",
          "ಸಂತೋಷ್‌",
          "ಗುರುರಾಜ್",
          "ಪುಷ್ಪರಾಜ್",
          "ಪ್ರಸಾದ್",
          "ಚಂದ್ರಕಾಂತ್",
          "ಸುನಿಲ್",
        ],
      },
      {
        title: "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯದರ್ಶಿಗಳು",
        members: [
          "ಕುಮಾರಿ ರಮ್ಯಾ",
          "ಕುಮಾರಿ ಸೌಮ್ಯ ಲಕ್ಷ್ಮಣ್",  
          "ಶ್ರೀಮತಿ ವಸಂತಿ ದೇವೆಂದ್ರ",
          "ಸುಷ್ಮಾ",
          "ಜಯಶ್ರೀ",
        ],
      },
      
    ],
  },
};

export default function AdministrationCommittee() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const { title, places, committeeSections } = placesContent[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#f3da5a] font-serif">
      <h1 className="text-4xl font-bold mb-10 text-center text-black">
        {title}
      </h1>

      {/* Photos Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((p, i) => (
          <PlaceCard key={i} {...p} />
        ))}
      </div>
      

      {/* Committee Text Sections */}
      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 text-lg">
        {committeeSections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-${
              idx % 4 === 0 ? "start" : idx % 4 === 1 ? "center" : "end"
            }`}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-3 text-center">
              {section.title}
            </h2>
            <ul className="list-none text-gray-800 space-y-1 text-center">
              {section.members.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
             {/* ಗೌರವ ಸಲಹೆಗಾರರು Section */}
      <div className="mt-8 text-center">
  <h2 className="text-3xl font-bold text-red-800 mb-6">ಗೌರವ ಸಲಹೆಗಾರರು</h2>

  <div className="flex flex-col items-center gap-8">

    {/* First Photo */}
    <div className="relative w-full max-w-3xl h-auto">
      <Image
        src={P6}
        alt="ಗೌರವ ಸಲಹೆಗಾರರು"
        className="rounded-xl shadow-lg w-full h-auto object-contain"
      />
    </div>

    {/* Second & Third Photos - Responsive (mobile stacked, desktop side-by-side) */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

      <div className="w-full md:w-[400px]">
        <Image
          src={P7}
          alt="Person 1"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
          width={700}
          height={700}
        />
      </div>

      <div className="w-full md:w-[400px]">
        <Image
          src={P8}
          alt="Person 2"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
          width={700}
          height={700}
        />
      </div>

    </div>

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
      <div className="w-56 h-56 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-lg object-cover object-top"
        />
      </div>
      <h2 className="text-orange-600 font-semibold text-xl mt-3">{name}</h2>
      <p className="text-gray-700 text-base mt-1">{description}</p>
    </div>
  );
}
