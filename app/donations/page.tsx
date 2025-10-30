"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// Define types for locales
type LocaleType = "kn" | "en";

// Define text content for each language
const donationText: Record<
  LocaleType,
  {
    title: string;
    generalDonation: string;
    bank: string;
    accountNumber: string;
    ifscCode: string;
    generalAccount: string;
    ifsc: string;
  }
> = {
  en: {
    title: "Account Details",
    generalDonation: "General Donation",
    bank: "*",
    accountNumber: "Account Number",
    ifscCode: "IFSC Code",
    generalAccount: "*",
    ifsc: "*",
  },
  kn: {
    title: "ಖಾತೆ ವಿವರಗಳು",
    generalDonation: "ಸಾಮಾನ್ಯ ದೇಣಿಗೆ",
    bank: "*",
    accountNumber: "ಖಾತೆ ಸಂಖ್ಯೆ",
    ifscCode: "IFSC ಕೋಡ್",
    generalAccount: "*",
    ifsc: "*",
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
          <h2 className="text-xl font-bold text-orange-600 mb-2">
            {text.generalDonation}
          </h2>
          <p className="text-lg font-semibold text-gray-800">{text.bank}</p>
          <p className="text-lg text-gray-800">
            {text.accountNumber}:{" "}
            <span className="font-normal">{text.generalAccount}</span>
          </p>
          <p className="text-lg text-gray-800">
            {text.ifscCode}: <span className="font-normal">{text.ifsc}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
