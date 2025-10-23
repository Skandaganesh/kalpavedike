// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Daivaraja babbuswamy kalpavedike, Balipathotaa",
  description:
    "Explore the spiritual heritage of Shri Daivaraja babbuswamy kalpavedike in ****Balipathotaa, Karnataka. Discover its rich history, unique architecture, and religious significance.",
  keywords: [
    "Shri Daivaraja babbuswamy kalpavedike",
    "Karnataka temples",
    "Dakshina Kannada temples",
    "Lord Harihara",
    "ancient Indian temples",
    "Karnataka cultural heritage",

  ],
  authors: [{ name: "Shri Daivaraja babbuswamy kalpavedike" }],
  openGraph: {
    title: "Shri Daivaraja babbuswamy kalpavedike",
    description:
      "Discover the divine amalgamation of Shri Daivaraja babbuswamy kalpavedike in Balipathota Bharatenagara, Bejai, Mangalore.",
    url: "https://www.kalpavedike.vercel.app",
    siteName: "Shri Daivaraja babbuswamy kalpavedike",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Shri Daivaraja babbuswamy kalpavedike Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg", sizes: "48x48" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "16x16" },
    ],
    shortcut: { url: "/logo.jpg", type: "image/jpeg" },
    apple: { url: "/logo.jpg", type: "image/jpeg" },
  },
};
