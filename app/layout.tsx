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
  title:
    "Aeris & Arbor | Ghana's Premier Pergola and Outdoor Furniture Supplier",
  description:
    "Discover Ghana's largest selection of pergolas, mist fans, farm tables, astroturf, and couple chairs. Transform your outdoor space with Aeris & Arbor.",
  keywords:
    "pergola, outdoor furniture, mist fans, farm tables, astroturf, couple chairs, Ghana furniture, Accra furniture, outdoor living",
  openGraph: {
    title: "Aeris & Arbor | Outdoor Living Experts in Ghana",
    description:
      "Transform your outdoor space with Ghana's leading pergola and furniture supplier. Quality products for your garden, patio, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeris & Arbor | Outdoor Living Experts in Ghana",
    description:
      "Transform your outdoor space with Ghana's leading pergola and furniture supplier. Quality products for your garden, patio, and more.",
  },
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
