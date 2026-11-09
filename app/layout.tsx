import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shuman Cleaners | Dry Cleaning in Vidalia, GA since 1926",
  description:
    "Family-owned dry cleaners on South West Main Street in Vidalia, Georgia since 1926. Dry cleaning, expert alterations, wedding gown preservation and free pick-up and delivery for local businesses.",
};

export const viewport: Viewport = {
  themeColor: "#111110",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // the site opens in the dark theme; the hero's switch toggles this class
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
