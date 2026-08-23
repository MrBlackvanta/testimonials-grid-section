import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Testimonials grid section";
const description =
  "Five bootcamp graduates on what changed after the course — a Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl =
  "https://testimonials-grid-section.abdelrhman-ahmed8881.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
