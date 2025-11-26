import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axenova Lab - Marketing Consulting Agency",
    template: "%s | Axenova Lab",
  },
  description:
    "Axenova Lab is a marketing consulting agency helping businesses grow through strategic digital marketing, brand strategy, advertising, and business consulting services.",
  keywords: [
    "marketing consulting",
    "digital marketing",
    "brand strategy",
    "advertising agency",
    "business consulting",
    "SEO services",
    "PPC advertising",
    "social media marketing",
  ],
  authors: [{ name: "Axenova Lab" }],
  openGraph: {
    title: "Axenova Lab - Marketing Consulting Agency",
    description:
      "Strategic marketing solutions to help your business grow. Digital marketing, brand strategy, advertising, and consulting services.",
    url: "https://axenovalab.com",
    siteName: "Axenova Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axenova Lab - Marketing Consulting Agency",
    description:
      "Strategic marketing solutions to help your business grow. Digital marketing, brand strategy, advertising, and consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
