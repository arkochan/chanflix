import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
      <div className="absolute z-10 mx-10 mt-10 flex flex-row">
        <Link href="/">
          <Logo className="text-white" />
        </Link>
        <Navbar className="ml-10  " />
      </div>
      {children}
    </main>
  );
}
