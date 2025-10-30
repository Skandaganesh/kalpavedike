"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

import P1 from "/app/gallery/p1.jpg";
import P2 from "/app/gallery/p2.jpg";
import P3 from "/app/gallery/p3.jpg";
import P4 from "/app/gallery/p4.jpg";
import P5 from "/app/gallery/p5.jpg";
import P6 from "/app/gallery/p6.jpg";
import P7 from "/app/gallery/p7.jpg";
import P8 from "/app/gallery/p8.jpg";
import P9 from "/app/gallery/p9.jpg";
import P10 from "/app/gallery/p10.jpg";
import P11 from "/app/gallery/p11.jpg";
import P12 from "/app/gallery/p12.jpg";
import P13 from "/app/gallery/p13.jpg";
import P14 from "/app/gallery/p14.jpg";
import P15 from "/app/gallery/p15.jpg";
import P16 from "/app/gallery/p16.jpg";
import P17 from "/app/gallery/p17.jpg";
import P18 from "/app/gallery/p18.jpg";
import P19 from "/app/gallery/p19.jpg";
import P20 from "/app/gallery/p20.jpg";
import P21 from "/app/gallery/p21.jpg";
import P22 from "/app/gallery/p22.jpg";
import P23 from "/app/gallery/p23.jpg";
import P24 from "/app/gallery/p24.jpg";
import P25 from "/app/gallery/p25.jpg";
import P26 from "/app/gallery/p26.jpg";
import P27 from "/app/gallery/p27.jpg";
import P28 from "/app/gallery/p28.jpg";
import P29 from "/app/gallery/p29.jpg";
import P30 from "/app/gallery/p30.jpg";
import P31 from "/app/gallery/p31.jpg";
import P32 from "/app/gallery/p32.jpg";
import P33 from "/app/gallery/p33.jpg";
import P34 from "/app/gallery/p34.jpg";
import P35 from "/app/gallery/p35.jpg";

export default function Home() {
  const photos = [
    { src: P1, title: "ಅಭಿನಂದನಾ ಕಾರ್ಯಕ್ರಮ" },
    { src: P2, title: "ಅಭಿನಂದನಾ ಕಾರ್ಯಕ್ರಮ" },
    { src: P3, title: "ಅಭಿನಂದನಾ ಕಾರ್ಯಕ್ರಮ" },
    { src: P4, title: "ಅಭಿನಂದನಾ ಕಾರ್ಯಕ್ರಮ" },
    { src: P5, title: "ಅಭಿನಂದನಾ ಕಾರ್ಯಕ್ರಮ" },
    { src: P6, title: "ಕೊರೋನಾ ಸಂದರ್ಭ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ ಗೌರವದನ ಕಿಟ್ ವಿತಾರಣೆ" },
    { src: P7, title: "ಕೊರೋನಾ ಸಂದರ್ಭ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ ಗೌರವದನ ಕಿಟ್ ವಿತಾರಣೆ" },
    { src: P8, title: "ಕೊರೋನಾ ಸಂದರ್ಭ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ ಗೌರವದನ ಕಿಟ್ ವಿತಾರಣೆ" },
    { src: P9, title: "ಕೊರೋನಾ ಸಂದರ್ಭ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ ಗೌರವದನ ಕಿಟ್ ವಿತಾರಣೆ" },
    { src: P10, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2020" },
    { src: P11, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2020" },
    { src: P12, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2020" },
    { src: P13, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2020" },
    { src: P14, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2023" },
    { src: P15, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2023" },
    { src: P16, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2024" },
    { src: P17, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2024" },
    { src: P18, title: "ಗಣೇಶನ ಚಿತ್ರ ಬಿಡಿಸುವ ಸ್ಪರ್ಧೆ 2024" },
    { src: P19, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2024" },
    { src: P20, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2024" },
    { src: P21, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2024" },
    { src: P22, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2024" },
    { src: P23, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2020" },
    { src: P24, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2020" },
    { src: P25, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2020" },
    { src: P26, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2023" },
    { src: P27, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2023" },
    { src: P28, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2023" },
    { src: P29, title: "ಪುಸ್ತಕ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ 2023" },
    { src: P30, title: "ಪ್ರಥಮ ಪಿಯುಸಿ ಅತ್ಯಧಿಕ ಅಂಕಗಳಿಸಿದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸನ್ಮಾನ" },
    { src: P31, title: "ಯೋಗ ಶಿಬಿರ" },
    { src: P32, title: "ಯೋಗ ಶಿಬಿರ" },
    { src: P33, title: "ಯೋಗ ಶಿಬಿರ" },
    { src: P34, title: "ವೈದ್ಯರಿಗೆ ಸನ್ಮಾನ ಡಾಕ್ಟರ್ ಟಿ ಆರ್ ರಾವ್" },
    { src: P35, title: "ಸನ್ಮಾನ ಕಾರ್ಯಕ್ರಮ" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const showNext = useCallback(() => setSelectedIndex((i) => (i === null ? 0 : (i + 1) % photos.length)), [photos.length]);
  const showPrev = useCallback(() => setSelectedIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal, showNext, showPrev]);

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#f3da5a] font-serif">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">ಫೋಟೋ ಗ್ಯಾಲರಿ</h1>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              width={400}
              height={300}
              className="object-contain w-full h-64 bg-gray-200 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-center p-4">
              <h3 className="text-lg font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}

        {/* YouTube Video 1 */}
        <div className="relative rounded-2xl shadow-md w-full h-64 cursor-pointer">
          <a
            href="https://www.youtube.com/watch?v=cOO5bSVeM4g"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src="https://img.youtube.com/vi/cOO5bSVeM4g/hqdefault.jpg"
              alt="YouTube Video 1"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </div>
          </a>
        </div>

        {/* YouTube Video 2 */}
        <div className="relative rounded-2xl shadow-md w-full h-64 cursor-pointer">
          <a
            href="https://www.youtube.com/watch?v=5CIfdMlj1qs"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src="https://img.youtube.com/vi/5CIfdMlj1qs/hqdefault.jpg"
              alt="YouTube Video 2"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Modal (Lightbox) */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full flex justify-center items-center p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-3xl bg-white rounded-full p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 text-black text-3xl bg-white rounded-full p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Image */}
            <Image
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].title}
              width={1000}
              height={700}
              className="object-contain max-h-[80vh] rounded-lg"
            />

            {/* Next Button */}
            <button
              className="absolute right-4 text-black text-3xl bg-white rounded-full p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
