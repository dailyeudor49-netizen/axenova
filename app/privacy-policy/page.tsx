import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Axenova Lab",
  description:
    "Read Axenova Lab's privacy policy to understand how we handle information and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: 26 November 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              Axenova Lab Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting it. This Privacy Policy explains our
              practices regarding information when you visit our website.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom<br />
              <strong>VAT Number:</strong> GB 847 2936 18
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Information We Do Not Collect
            </h2>
            <p className="text-gray-600 mb-4">
              Our website is designed to be informational only. We do not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Collect personal information through forms on this website</li>
              <li>Use cookies to track your browsing behavior</li>
              <li>Store any personal data on our servers</li>
              <li>Use analytics tools that collect personal information</li>
              <li>Share any information with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you choose to contact us via the email address
              provided on our website, we will only use the information you
              provide to respond to your inquiry. This information is not stored
              in any database or used for marketing purposes unless you
              explicitly request our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Third-Party Links
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to review the privacy policies
              of any website you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Website Hosting
            </h2>
            <p className="text-gray-600 mb-4">
              Our website is hosted by a third-party hosting provider. Like most
              web servers, our hosting provider may automatically collect certain
              technical information such as IP addresses, browser types, and
              referring pages for security and operational purposes. This
              information is handled according to our hosting provider&apos;s privacy
              policy and is not used by us for any marketing or tracking
              purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our website and services are not directed at children under the age
              of 13. We do not knowingly collect information from children under
              13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Since we do not collect personal data through this website, there
              is no personal information for us to provide, modify, or delete. If
              you have contacted us directly via email and wish to have
              any correspondence deleted, please contact us and we will
              accommodate your request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact
              us at:
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
