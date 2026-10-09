import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const socialImage = "https://veer-pratap-singh-portfolio.vercel.app/og.png";

export const metadata: Metadata = {
    title: "Veer + Inderpreet — Hospitality Web, Content & Brand Partners",
    description:
      "Selected websites, content management and brand consulting by Veer Pratap Singh and Inderpreet Singh, with a focus on hospitality.",
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: "Veer + Inderpreet — Websites. Content. Brand.",
      description:
        "Hospitality-focused digital partners building websites, content systems and brands people choose.",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Veer and Inderpreet — Websites, content and brand",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Veer + Inderpreet — Websites. Content. Brand.",
      description:
        "Hospitality-focused digital partners building websites, content systems and brands people choose.",
      images: [socialImage],
    },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
