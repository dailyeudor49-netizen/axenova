"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Nascondi footer per le landing pages
  const noFooterRoutes = [
    '/airwave',
    '/airwave_hr',
    '/airwave_hu',
    '/airwave_sk',
    '/besecurepro_pl',
    '/besecureprovideocamere',
    '/climateguardpro',
    '/climateguardpro_czk',
    '/climateguardpro_hr',
    '/climateguardpro_hu',
    '/climateguardpro_pl',
    '/climateguardpro_sk',
    '/superhub_pl',
    '/ty-hr',
    '/ty-hu',
    '/ty-it',
    '/ty-pl',
    '/ty-sk',
  ];

  if (noFooterRoutes.includes(pathname)) {
    return null;
  }

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
