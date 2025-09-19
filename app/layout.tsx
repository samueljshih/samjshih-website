import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Shih - AI Automation Expert",
  description:
    "Professional AI automation consultant helping businesses save 20+ hours per week through custom AI solutions, chatbots, and automated workflows.",
  keywords:
    "AI automation, chatbots, business automation, AI consultant, workflow automation, lead generation",
  authors: [{ name: "Sam Shih" }],
  creator: "Sam Shih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
