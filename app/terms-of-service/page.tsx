import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Axenova Lab",
  description:
    "Read Axenova Lab's terms of service to understand the conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: November 2024</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the Axenova Lab website, you accept and agree
              to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-600 mb-4">
              Axenova Lab provides marketing consulting services including digital
              marketing, brand strategy, advertising, and business consulting. The
              information provided on this website is for general informational
              purposes only and does not constitute professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Use of Website
            </h2>
            <p className="text-gray-600 mb-4">You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit any harmful code or malware</li>
              <li>Interfere with or disrupt the website&apos;s operation</li>
              <li>Copy, reproduce, or distribute website content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-4">
              All content on this website, including text, graphics, logos, and
              images, is the property of Axenova Lab or its content suppliers and
              is protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works from this content without
              our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 mb-4">
              This website and its content are provided &quot;as is&quot; without any
              warranties, express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>The website will be available at all times or operate without interruption</li>
              <li>The information on the website is accurate, complete, or current</li>
              <li>Any specific results will be achieved by using our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, Axenova Lab shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use this
              website or our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Service Agreements
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service govern your use of our website only. Any
              professional services provided by Axenova Lab will be subject to
              separate service agreements, which will be provided and agreed upon
              before any work commences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Third-Party Links
            </h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. We have no control over and
              assume no responsibility for the content, privacy policies, or
              practices of any third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Modifications to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this website.
              Your continued use of the website after any changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service shall be governed by and construed in
              accordance with applicable laws. Any disputes arising from these
              terms shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@axenovalab.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
