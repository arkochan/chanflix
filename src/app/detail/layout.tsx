import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/app/globals.css";

const istrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "▶ ChanFlix",
  description: "Watch Movies, TV Shows, Animes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`bg-black ${istrumentSans.className} antialiased`}
    >
      {children}
    </main>
  );
}
