import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INilam — Luxury Real Estate | Where Luxury Feels Effortless",
  description:
    "Explore the pinnacle of bespoke living with INilam. Discover exclusive mansions, waterfront villas, penthouses, and architectural masterpieces worldwide.",
  keywords: [
    "Luxury Real Estate",
    "INilam",
    "Mansions",
    "Villas",
    "Penthouses",
    "Architectural Homes",
    "Luxury Property Investment",
  ],
  authors: [{ name: "INilam Luxury Real Estate" }],
  openGraph: {
    title: "INilam — Luxury Real Estate | Where Luxury Feels Effortless",
    description:
      "Exclusive curated luxury estates, villas, and penthouses. Experience high-touch real estate advisory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#19191B] selection:bg-[#FFAC0A]/30 selection:text-[#19191B]">
        {children}
      </body>
    </html>
  );
}
