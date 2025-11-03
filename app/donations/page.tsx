"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// Correct import (relative path)
import QR from "./qr.jpg";

// Define types for locales
type LocaleType = "kn" | "en";

// Define text content for each language
const donationText: Record<
  LocaleType,
  {
    title: string;
    generalDonation: string;
  }
> = {
  en: {
    title: "Account Details",
    generalDonation: "SCAN QR CODE TO PAY",
  },
  kn: {
    title: "ಖಾತೆ ವಿವರಗಳು",
    generalDonation: "QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಾವತಿಸಿ",
  },
};

const DonationsPage: React.FC = () => {
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const text = donationText[currentLocale];

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-white to-yellow-100 p-4 pt-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-black mt-4">
        {text.title}
      </h1>

      <div className="flex justify-center w-full">
        {/* Box 1: General Donation */}
        <div className="p-6 bg-gradient-to-b from-white to-yellow-100 rounded-lg shadow-md text-center max-w-md w-full">
          <h2 className="text-xl font-bold text-orange-600 mb-4">
            {text.generalDonation}
          </h2>

          {/* QR Code Image */}
          <div className="flex justify-center">
            <Image
              src={QR}
              alt="QR Code"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
