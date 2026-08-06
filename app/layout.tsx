import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "veer-pratap-singh-portfolio.vercel.app";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Veer Pratap Singh — Web Developer & Digital Builder",
    description:
      "Selected websites and digital products designed and built by Veer Pratap Singh.",
    icons: {
      icon: "/avatar.jpg",
      shortcut: "/avatar.jpg",
      apple: "/avatar.jpg",
    },
    openGraph: {
      title: "Veer Pratap Singh — Websites people remember",
      description:
        "Seven live websites across hospitality, health, sport, food and technology.",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1734,
          height: 909,
          alt: "Veer Pratap Singh — Websites people remember",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Veer Pratap Singh — Websites people remember",
      description:
        "Seven live websites across hospitality, health, sport, food and technology.",
      images: [socialImage],
    },
  };
}

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
