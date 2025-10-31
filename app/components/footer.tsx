"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FaLink, FaMapMarkerAlt } from "react-icons/fa";

// Define types for locales
type LocaleType = "kn" | "en";

// Define text content for each language
const footerText: Record<
  LocaleType,
  {
    templeName: string;
    quickLinks: { title: string; links: { name: string; path: string }[] };
    addressTitle: string;
    address: string[];
    contactNumbers: string;
    email: string;
    privacyPolicy: string;
    refundPolicy: string;
    admin: string;
    rightsReserved: string;
    designedBy: string;
    designerName: string;
  }
> = {
  en: {
    templeName: "Shri Daivaraja babbuswamy kalpavedike",
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "History", path: "/history" },
        { name: "Sevas", path: "/tempe" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    addressTitle: "Address",
    address: [
      "Shri Daivaraja babbuswamy kalpavedike,",
      "Balipathotaa, Bharathinagar, bejai",
      "Mangalore, Dakshina Kannada",
      "PIN - 575004",
    ],
    contactNumbers: "7349753102, 9945034337",
    email: "balipathota2020@gmail.com",
    privacyPolicy: "Privacy Policy",
    refundPolicy: " Refund & Cancellation",
    admin: " Admin",
    rightsReserved:
      " Shri Daivaraja babbuswamy kalpavedike, Balipathotaa. All Rights Reserved",
    designedBy: "Designed by:",
    designerName: "*",
  },
  kn: {
    templeName: "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆ",
    quickLinks: {
      title: "ಲಿಂಕ್ಸ್",
      links: [
        // ದೈವಾಲಯದ ಬಗ್ಗೆ ಇತಿಹಾಸ
        { name: "ದೈವಸ್ಥಾನದ ಬಗ್ಗೆ", path: "/history" },
        { name: "ಸೇವೆಗಳು", path: "/temple" },
        { name: "ಗ್ಯಾಲರಿ", path: "/gallery" },
      ],
    },
    addressTitle: "ವಿಳಾಸ",
    address: [
      "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆ,",
      "ಬಲಿಪತೋಟ, ಭಾರತಿನಗರ, ಬಿಜೈ",
      "ಮಂಗಳೂರು, ದ.ಕ.",
      "ಪಿನ್ - 575004",
    ],
    contactNumbers: "7349753102, 9945034337",
    email: "balipathota2020@gmail.com",
    privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    refundPolicy: " ಮರುಪಾವತಿ ಮತ್ತು ರದ್ದುಪಡಿಸುವಿಕೆ",
    admin: " ಅಡ್ಮಿನ್",
    rightsReserved:
      "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆ, ಬಲಿಪತೋಟ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
    designedBy: "ಹೋಸ್ಟಿಂಗ್ ಮತ್ತು ನಿರ್ವಹಣೆ:",
    designerName: "*",
  },
};

const Footer: React.FC = () => {
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;
  const text = footerText[currentLocale];

  return (
    <div className="flex flex-col ">
      <footer className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white py-10 px-10 md:px-10 lg:px-10 mt-[6rem] flex-grow">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center lg:items-center mb-8 lg:mb-0">
            <div className="mb-8">
              <Image
                src="/c/kalpa.jpg"
                alt="Temple Logo"
                width={96}
                height={96}
                className="rounded-full"
                priority
              />
            </div>
            <p className="text-xl font-bold">{text.templeName}</p>

            {/* Social Media Icons */}
            <div className="flex space-x-8 mt-6">
                <a
                  href="https://www.youtube.com/@ravichandra5378"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white hover:text-red-500 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M549.655 124.083c-6.281-23.725-24.84-42.369-48.465-48.693C456.556 64 288 64 288 64s-168.556 0-213.19 11.39c-23.625 6.324-42.184 24.968-48.465 48.693C16 168.718 16 256 16 256s0 87.282 10.345 131.917c6.281 23.725 24.84 42.369 48.465 48.693C119.444 448 288 448 288 448s168.556 0 213.19-11.39c23.625-6.324 42.184-24.968 48.465-48.693C560 343.282 560 256 560 256s0-87.282-10.345-131.917zM232 338.5v-165l142 82.5-142 82.5z"/>
                  </svg>
                </a>
              </div>

          </div>

          {/* Quick Links Section with Icon */}
          <div className="text-left lg:text-center mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <FaLink className="w-5 h-5" />{" "}
              <span>{text.quickLinks.title}</span>
            </h3>
            <ul className="space-y-1">
              {text.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="hover:underline hover:text-orange-300 flex items-center"
                  >
                    <span className="inline-block w-4">
                      <span className="text-xs leading-4">►</span>
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section with Icon */}
          <div className="text-left lg:text-left mb-4">
            <h3 className="text-lg font-semibold mb-2 mt-10 flex items-center space-x-2">
              <FaMapMarkerAlt className="w-5 h-5" />{" "}
              <span>{text.addressTitle}</span>
            </h3>
            <address>
              {text.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <div className="flex items-center space-x-2">
                <svg
                  width="15px"
                  height="15px"
                  className="mt-1.5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
                <p className="mt-0.5">{text.contactNumbers}</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="15px"
                  height="15px"
                  className="mt-1.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5v2zM4 18v-8l8 5 8-5v8H4z" />
                
                   </svg>
                 <p className="mt-0.5">{text.email}</p>
              </div>
            </address>
          </div>

          {/* Map Section */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16448.846181404646!2d74.82437238715819!3d12.883118199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b8b50e5e5cd%3A0x5476f8f0b993bfa9!2sKordabbu%20Daivasthana%20Balipathota!5e1!3m2!1sen!2sus!4v1761163369358!5m2!1sen!2sus"
              width="400"
              height="200"
              className="rounded-md shadow-lg"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-black text-white py-2 text-center site-footer-bottom mx-0 mb-0">
        <p>
          © 2025 | Disclaimer -{" "}
          <Link href="/policy" className="text-orange-400 hover:underline">
            {text.privacyPolicy}
          </Link>{" "}
          |
          <Link href="/policy" className="text-orange-400 hover:underline">
            {text.refundPolicy}
          </Link>{" "}
          |
          <Link href="/admin" className="text-orange-400 hover:underline">
            {text.admin}
          </Link>{" "}
          | {text.rightsReserved}
        </p>
        <p>
          {text.designedBy}{" "}
          <Link
            href="https://www.instagram.com/isdc.sahyadri/"
            className="text-orange-400 hover:underline"
          >
            {text.designerName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
