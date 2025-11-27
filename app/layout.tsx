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
    default: "Axenova Lab - Wholesale Corporate Gifts & Promotional Items",
    template: "%s | Axenova Lab",
  },
  description:
    "Axenova Lab is your wholesale partner for premium corporate gifts, promotional items, and branded merchandise. Quality products for businesses worldwide.",
  keywords: [
    "wholesale corporate gifts",
    "promotional items",
    "branded merchandise",
    "business gifts",
    "corporate gadgets",
    "bulk promotional products",
    "B2B gifts",
  ],
  authors: [{ name: "Axenova Lab Ltd" }],
  openGraph: {
    title: "Axenova Lab - Wholesale Corporate Gifts & Promotional Items",
    description:
      "Premium corporate gifts and promotional items at wholesale prices. Quality merchandise for businesses worldwide.",
    siteName: "Axenova Lab",
    type: "website",
    locale: "en_GB",
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
