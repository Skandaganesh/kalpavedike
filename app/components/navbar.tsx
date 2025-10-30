"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { usePathname } from "next/navigation";
import Banner from "@/app/components/banner";


interface NavLink {
  href: string;
  label: Record<"en" | "kn", string>;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  { href: "/", label: { en: "Home", kn: "ಮುಖಪುಟ" } },
  {
    href: "",
    label: { en: "About", kn: "ದೈವಸ್ಥಾನದ ಮಾಹಿತಿ" },
    subLinks: [
      { href: "/history", label: { en: "History", kn: "ಇತಿಹಾಸ" } },
      { href: "/temple", label: { en: "About Temple", kn: "ದೈವಸ್ಥಾನದ ಮಾಹಿತಿ" } },
      { href: "/administration", label: { en: "Administration", kn: "ಆಡಳಿತ ಸಮಿತಿ" } },
      { href: "/how_to_reach", label: { en: "How to Reach", kn: "ದೈವಸ್ಥಾನಕ್ಕೆ ಹೋಗುವ ದಾರಿಯ ಮಾಹಿತಿ" } },
    ],
  },
  { href: "/donations", label: { en: "Donations", kn: "ದೇಣಿಗೆ" } },
  { href: "/gallery", label: { en: "Gallery", kn: "ಗ್ಯಾಲರಿ" } },
  { href: "/contact", label: { en: "Contact", kn: "ಸಂಪರ್ಕಿಸಿ" } },
];

export default function Navbar() {
  const currentLocale = useSelector((s: RootState) => s.locale.locale) as "en" | "kn";
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false); // mobile only

const isActive = (href: string) =>
  href && href !== "/"
    ? pathname.startsWith(href)
    : href === "/" && pathname === "/";

  return (
    <>
      <Banner />

      {/* Logo row (kept separate from sticky nav for a lighter look) */}
     

      {/* Sticky nav chip bar */}
      <div className="sticky top-0 z-30 backdrop-blur bg-white/75 shadow-[0_1px_0_#f3f4f6]">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Desktop chips */}
          <nav className="hidden md:flex items-center justify-center gap-2 py-2">
            {navLinks.map(({ href, label, subLinks }) => {
              const text = label[currentLocale];
              const active = isActive(href);
              const asButton = subLinks && subLinks.length > 0;

              return (
                <div key={text} className="relative group">
                  {asButton ? (
                    <>
                      <button
                        className={`px-4 py-2 rounded-full transition
                          ${active ? "bg-yellow-100 text-orange-700" : "hover:bg-yellow-50 text-orange-600"}
                          inline-flex items-center gap-1`}
                        aria-haspopup="true"
                      >
                        {text}
                        <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Mega panel */}
                    <div
  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
             absolute left-1/2 -translate-x-1/2  -translate-y-3 mt-3 w-[340px] bg-white rounded-2xl shadow-xl ring-1 ring-black/5
             transition duration-200 delay-2000 group-hover:delay-0 p-4 grid grid-cols-1 gap-2"
>
  {subLinks!.map((s) => (
    <Link
      key={s.href}
      href={s.href}
      className="block w-full text-left rounded-lg px-3 py-2 hover:bg-yellow-50 text-slate-700 hover:text-yellow-700 text-sm"
    >
      {s.label[currentLocale]}
    </Link>
  ))}
</div>


                    </>
                  ) : (
                    <Link
                      href={href}
                      className={`px-4 py-2 rounded-full relative
                        ${active ? "text-orange-700 bg-yellow-100" : "text-orange-600 hover:bg-yellow-50"}
                        transition`}
                    >
                      {text}
                      {/* underline accent */}
                      <span
                        className={`absolute left-4 right-4 -bottom-1 h-[2px] rounded-full
                          ${active ? "bg-yellow-600" : "bg-transparent group-hover:bg-yellow-300"}
                          transition-colors`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile: horizontal scroll chips + collapsible About */}
          <div className="md:hidden py-2">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {navLinks.map(({ href, label, subLinks }) => {
                const text = label[currentLocale];
                const active = isActive(href);
                const asButton = subLinks && subLinks.length > 0;

                return asButton ? (
                  <button
                    key={text}
                    onClick={() => setAboutOpen((v) => !v)}
                    className={`shrink-0 px-4 py-2 rounded-full border
                      ${aboutOpen ? "border-yellow-400 bg-yellow-50 text-orange-700" : "border-yellow-200 text-orange-600 bg-white"}
                      inline-flex items-center gap-1`}
                  >
                    {text}
                    <FaChevronDown className={`text-xs transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    key={text}
                    href={href}
                    className={`shrink-0 px-4 py-2 rounded-full border
                      ${active ? "border-orange-400 bg-yellow-50 text-orange-700" : "border-orange-200 text-orange-600 bg-white"}`}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>

            {/* Collapsible mega content */}
          {aboutOpen && (
  <div className="mt-2 grid grid-cols-1 gap-2 rounded-2xl border border-orange-200 bg-white p-3 shadow-sm">
    {navLinks
      .find((n) => n.subLinks)?.subLinks!.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          onClick={() => setAboutOpen(false)}
          className="rounded-lg px-3 py-2 hover:bg-yellow-50 text-slate-700 hover:text-orange-700 block w-full text-left"
        >
          {s.label[currentLocale]}
        </Link>
      ))}
  </div>
)}


          </div>
        </div>
      </div>

      {/* spacer below nav */}
      <div className="pt-4" />
    </>
  );
}
