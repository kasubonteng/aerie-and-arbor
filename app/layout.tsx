import type { Metadata } from "next";
import localFont from "next/font/local";
import { Monoton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const monoton = Monoton({
  display: "swap",
  variable: "--font-monoton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aeris & Arbor",
  description: "Ghana's biggest pergola and outdoor furniture supplier",
  keywords:
    "pergola, outdoor furniture, mist fans, farm tables, astroturf, couple chairs, table, furniture in ghana, furniture in accra, furniture, outdoor, pergola and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} min-h-screen scroll-smooth bg-gradient-to-b from-gray-900 to-gray-800 font-geist-sans text-white antialiased`}
      >
        <Navbar />
        <main className="mt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
