"use client";
import React, { useEffect, useState } from "react";
import SEOComponent from "../cmpnents/SEOComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

// Define types for locales
type LocaleType = "kn" | "en";

// Define text content for each language
const contactText: Record<
  LocaleType,
  {
    postalAddress: string;
    contactDetails: string;
    googleMap: string;
    address: string;
    phone: string;
    tele: string;
    president: string;
    email: string;
  }
> = {
  en: {
    postalAddress: "Postal Address",
    contactDetails: "Contact Details",
    googleMap: "Google Map",
    address:
      "Shri Daivaraja babbuswamy kalpavedike,\nBalipathotaa,\nBharathinagar, bejai, \nMangalore PIN-575004",
    phone: "Contact Number:+91",
    tele: "Telephone Number: *",
    president: "President: +91",
    email: "E-mail: @gmail.com",
  },
  kn: {
    postalAddress: "ದೈವಸ್ಥಾನದ ವಿಳಾಸ",
    contactDetails: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    googleMap: "ಗೂಗಲ್ ಮ್ಯಾಪ್ ನಕ್ಷೆ",
    address:
      "ಶ್ರೀ ದೈವರಾಜ ಬಬ್ಬುಸ್ವಾಮಿ ಕಲ್ಪವೇದಿಕೆ,\nಬಲಿಪತೋಟ,\nಭಾರತಿನಗರ, ಬಿಜೈ,\nಮಂಗಳೂರು ಪಿನ್-575004",
    phone: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ: +91, +91",
    tele: "ದೂರವಾಣಿ: *",
    president: "ಅಧ್ಯಕ್ಷರು: +91",
    email: "ಇ-ಮೇಲ್: @gmail.com",
  },
};

const Contact: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  const text = contactText[currentLocale];

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null; // Prevent rendering until locale is loaded

  return (
    <>
      <SEOComponent
        title="Contact Shri Daivaraja babbuswamy kalpavedike"
        description="Get in touch with the Shri Daivaraja babbuswamy kalpavedike for inquiries, visits, or support. We welcome your communication and support."
        image="https://yourwebsite.com/images/temple-contact.jpg" // Replace with actual image URL
        url="http://www.shriharihareshwara.org/contact"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#fdc8a0] p-10 relative font-serif">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-10">
          {/* Address and Contact Details */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">
              {text.postalAddress}
            </h2>
            <p className="text-gray-800 mb-8">{text.address}</p>

            <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">
              {text.contactDetails}
            </h2>
            <p className="text-gray-800">
              <strong>{text.phone}</strong>
            </p>
            <p>
              <strong>{text.tele}</strong>
            </p>
            <p className="text-gray-800">
              <strong>{text.president}</strong>
            </p>
            <p>
              <strong>{text.email}</strong>
            </p>
          </div>

          {/* Google Map */}
          <div className="flex-1">
            <h2 className="text-red-600 font-semibold text-lg uppercase mb-4 tracking-wide">
              {text.googleMap}
            </h2>
            <div className="border border-gray-300 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16448.846181404646!2d74.82437238715819!3d12.883118199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b8b50e5e5cd%3A0x5476f8f0b993bfa9!2sKordabbu%20Daivasthana%20Balipathota!5e1!3m2!1sen!2sus!4v1761163369358!5m2!1sen!2sus"
              width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom orange bar */}
        <div className="absolute bottom-0 w-full h-1 bg-[#f28500]"></div>
      </div>
    </>
  );
};

export default Contact;
