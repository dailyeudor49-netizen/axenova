"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isRobotCleanProX = pathname?.startsWith("/robotcleanprox");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { href: "/products#drinkware", label: "Drinkware & Bottles" },
      { href: "/products#bags", label: "Bags & Totes" },
      { href: "/products#desk", label: "Desk Accessories" },
      { href: "/products#gifts", label: "Executive Gifts" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/cookie-policy", label: "Cookie Policy" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">Axenova Lab</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Your wholesale partner for premium corporate gifts and promotional
              items. Quality merchandise for businesses worldwide with fast delivery.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>Axenova Lab Ltd</p>
              <p>71-75 Shelton Street, Covent Garden</p>
              <p>London, WC2H 9JQ, UK</p>
              <p>VAT: GB 847 2936 18</p>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          {isRobotCleanProX && (
            <p className="text-center text-sm text-gray-400 mb-6">
              Robot Clean Pro X è un marchio distribuito in esclusiva da Axenova Lab
            </p>
          )}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Axenova Lab Ltd. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              info@axenovalab.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
