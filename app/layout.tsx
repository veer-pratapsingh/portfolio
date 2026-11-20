import type { Metadata, Viewport } from "next";
import { Antonio, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const socialImage = "https://veer-pratap-singh-portfolio.vercel.app/og.jpg";
const title = "Veer Pratap Singh — AI & Full-Stack Engineer";
const description =
  "LLM applications, retrieval and reranking, MLOps and IoT data pipelines. M.Sc. Data and Knowledge Engineering student in Magdeburg, open to Werkstudent roles.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Veer Pratap Singh, AI and full-stack engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} ${dmMono.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
