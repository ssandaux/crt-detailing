import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CRT Detailing | Premium Auto Care · Warszawa",
  description:
    "Profesjonalny detailing samochodowy, powłoki ceramiczne i korekta lakieru w Warszawie. Ponad 500 pojazdów przywróconych do perfekcji.",
  keywords: ["detailing samochodowy", "powłoka ceramiczna", "korekta lakieru", "detailing Warszawa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
