import type { Metadata } from "next";
import { Oswald, Petit_Formal_Script, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const petitFormalScript = Petit_Formal_Script({
  variable: "--font-petit-formal-script",
  weight: "400",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const baticaSans = localFont({
  src: "../../public/fonts/BaticaSans-Regular.otf",
  variable: "--font-batica-sans",
});

const brigold = localFont({
  src: "../../public/fonts/Brigold DEMO.otf",
  variable: "--font-brigold",
});

export const metadata: Metadata = {
  title: "Peppervine",
  description: "Welcome to The Peppervine",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${brigold.variable} ${baticaSans.variable} ${oswald.variable} ${petitFormalScript.variable} ${plusJakartaSans.variable} h-full antialiased overscroll-none`}
    >
      <body className="min-h-full flex flex-col font-batica overscroll-none">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
