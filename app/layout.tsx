import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Hair Exosome Therapy Lahore | Rizthetics Hair Lab",
    description: "Discover precision-led Hair Exosome Therapy at Rizthetics Lahore. Non-surgical, personalised treatment for thinning, shedding and weaker hair.",
    openGraph: {
      title: "Wake up what’s within — Rizthetics Hair Lab",
      description: "Advanced, non-surgical Hair Exosome Therapy in Lahore.",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Rizthetics Hair Exosome Therapy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wake up what’s within — Rizthetics Hair Lab",
      description: "Advanced, non-surgical Hair Exosome Therapy in Lahore.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
