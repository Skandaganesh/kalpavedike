"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images: string[] = [
  "/c/p1.jpg",
  "/c/p3.jpg",
  "/c/p4.jpg",
  "/c/p2.jpg",
  "/c/p5.jpg",
  "/c/p6.jpg",
];

const ImageSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const transitionSlide = useCallback(
    (nextPage: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
      setCurrentPage(nextPage);
    },
    [isAnimating]
  );

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      transitionSlide((currentPage + 1) % Math.ceil(images.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage, transitionSlide]);

  const handlePrevPage = () =>
    transitionSlide(
      (currentPage - 1 + Math.ceil(images.length / 2)) %
        Math.ceil(images.length / 2)
    );
  const handleNextPage = () =>
    transitionSlide((currentPage + 1) % Math.ceil(images.length / 2));

  // Slice two images per page
  const startIndex = currentPage * 2;
  const visibleImages = images.slice(startIndex, startIndex + 2);

  return (
    <div className="relative flex flex-col w-full bg-gradient-to-b from-white to-#f3da5a-200">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden flex justify-center items-center gap-4 transition-transform duration-500 ease-in-out">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="relative w-[45%] h-full flex-shrink-0 flex justify-center items-center"
          >
            <Image
              src={img}
              alt={`Image ${startIndex + index + 1}`}
              fill
              sizes="50vw"
              className="object-contain"
              priority
            />
          </div>
        ))}

        {/* Left Arrow */}
        <div
          onClick={handlePrevPage}
          className="absolute inset-y-1/2 left-4 text-white text-2xl cursor-pointer hover:text-orange-500"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleNextPage}
          className="absolute inset-y-1/2 right-4 text-white text-2xl cursor-pointer hover:text-orange-500"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(images.length / 2) }).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => transitionSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentPage ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
