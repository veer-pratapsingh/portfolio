import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const socialImage = "https://veer-pratap-singh-portfolio.vercel.app/og.png";

export const metadata: Metadata = {
    title: "Veer + Inderpreet — Hospitality Web, Content & Brand Partners",
    description:
      "Selected websites, content management and brand consulting by Veer Pratap Singh and Inderpreet Singh, with a focus on hospitality.",
    openGraph: {
      title: "Veer + Inderpreet — Websites. Content. Brand.",
      description:
        "Hospitality-focused digital partners building websites, content systems and brands people choose.",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1732,
          height: 908,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
