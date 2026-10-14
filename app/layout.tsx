import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const body = Roboto({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "700"] });
const heading = Roboto_Condensed({ variable: "--font-heading", subsets: ["latin"], weight: ["400", "600", "700"] });

const title = "Bharati Vidyapeeth Online MBA 2026: Fees, Eligibility, Specialisations";
const description =
  "Apply for the 2-year online MBA from Bharati Vidyapeeth (Deemed to be University), Pune. UGC-DEB and AICTE approved, 14 specialisations, total fee ₹1,78,000 with EMI options.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Bharati Vidyapeeth online MBA",
    "BVDU online MBA",
    "online MBA fees",
    "online MBA eligibility",
    "UGC approved online MBA",
    "Bharati Vidyapeeth Pune online MBA admission 2026",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title,
    description,
    url: "/",
    images: [{ url: "/img/site/slider1.jpg", width: 1920, height: 705, alt: "Student studying the Bharati Vidyapeeth online MBA" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/img/site/slider1.jpg"] },
};

export const viewport: Viewport = { themeColor: "#131d3b" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${body.variable} ${heading.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
