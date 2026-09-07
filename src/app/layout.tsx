import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Cohort";
const title = `${siteName} | Verified graduates`;
const description =
  "Five graduates on the twelve weeks that changed their careers: mid-course job offers, career switches and the teaching support behind them.";
const siteUrl =
  "https://testimonials-grid-section.abdelrhman-ahmed8881.workers.dev";
const images = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Five verified graduates of Cohort on what changed after the course",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowSemiCondensed.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
