import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Archivo_Black, Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Shih - AI Automation Specialist",
  description:
    "Professional AI automation consultant helping businesses save 20+ hours per week through custom AI solutions, chatbots, and automated workflows.",
  keywords:
    "AI automation, chatbots, business automation, AI consultant, workflow automation, lead generation",
  authors: [{ name: "Sam Shih" }],
  creator: "Sam Shih",
  icons: {
    icon: [{ url: "/assets/samjshih_logo.jpeg", type: "image/jpeg" }],
    shortcut: "/assets/samjshih_logo.jpeg",
    apple: "/assets/samjshih_logo.jpeg",
  },
  other: {
    "font-display": "swap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${archivoBlack.variable} ${archivo.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
