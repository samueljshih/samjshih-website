import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Shih - Turn Your Idea Into a Product",
  description:
    "Product engineer helping founders turn ideas into MVPs, web apps and AI-powered tools, designed and built end to end.",
  keywords:
    "MVP development, product engineer, web app development, startup MVP, AI tools, website design, founders",
  authors: [{ name: "Sam Shih" }],
  creator: "Sam Shih",
  icons: {
    icon: [{ url: "/assets/samjshih_logo.jpeg", type: "image/jpeg" }],
    shortcut: "/assets/samjshih_logo.jpeg",
    apple: "/assets/samjshih_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
