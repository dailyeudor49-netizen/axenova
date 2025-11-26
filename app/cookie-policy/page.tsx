import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Axenova Lab",
  description:
    "Learn about Axenova Lab's cookie policy and how we handle browser cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Cookie Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: 26 November 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. What Are Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and to provide information to
              website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Our Cookie Usage
            </h2>
            <p className="text-gray-600 mb-4">
              The Axenova Lab website is designed to respect your privacy. We do
              not use cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Track your browsing behavior</li>
              <li>Collect personal information</li>
              <li>Target you with advertising</li>
              <li>Share data with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Essential Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may use essential cookies that are strictly necessary
              for the website to function properly. These cookies do not collect
              any personal information and are automatically deleted when you
              close your browser. Essential cookies may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Session cookies that maintain website functionality</li>
              <li>Security cookies that help protect against security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              We do not use any third-party cookies for analytics, advertising,
              or tracking purposes on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Managing Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their
              settings. You can typically:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete individual cookies or all cookies</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Please note that blocking all cookies may affect the functionality
              of some websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Browser-Specific Information
            </h2>
            <p className="text-gray-600 mb-4">
              To learn how to manage cookies in your specific browser, please
              refer to your browser&apos;s help documentation or settings menu. Most
              browsers have a &quot;Help&quot; section that explains how to manage privacy
              settings and cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@axenovalab.com
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Axenova Lab Ltd</strong><br />
              71-75 Shelton Street, Covent Garden<br />
              London, WC2H 9JQ<br />
              United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
