import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const jakarta = Roboto({ variable: "--font-jakarta", subsets: ["latin"], weight: ["400", "500", "700"] });
const fraunces = Roboto_Condensed({ variable: "--font-fraunces", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Online MBA – Bharati Vidyapeeth (Deemed to be University)",
  description:
    "2-year UGC-DEB & AICTE approved 100% online MBA from Bharati Vidyapeeth. 14 specialisations, flexible EMI, placement assistance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
