// app/[page]/head.tsx
"use client";
import { useRouter } from "next/router";

// Optional: Create a mapping of page-specific metadata
const pageMetadata: { [key: string]: { title: string; description: string } } =
  {
    events: {
      title: "Temple Events - Shri Daivaraja babbuswamy kalpavedike",
      description:
        "Stay updated on the latest events, festivals, and ceremonies at Shri Daivaraja babbuswamy kalpavedike.",
    },
    sevas: {
      title: "Sevas - Shri Daivaraja babbuswamy kalpavedike",
      description:
        "Explore the various Sevas offered at Shri Daivaraja babbuswamy kalpavedike to connect with the divine.",
    },
    gallery: {
      title: "Gallery - Shri Daivaraja babbuswamy kalpavedike",
      description:
        "View the beautiful gallery of Shri Daivaraja babbuswamy kalpavedike, showcasing its heritage and culture.",
    },
  };

export default function Head() {
  const router = useRouter();
  const page = router.query.page as string; // Get the page from the URL

  const metadata = pageMetadata[page] || {
    title: "Shri Daivaraja babbuswamy kalpavedike",
    description:
      "Welcome to the Shri Daivaraja babbuswamy kalpavedike, a sacred place for devotees.",
  };

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`http://www.shriharihareshwara.org/${page}`}
      />
    </>
  );
}
