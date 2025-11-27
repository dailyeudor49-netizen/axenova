import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Axenova Lab for wholesale enquiries, quotes, and partnership opportunities.",
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer:
        "Minimum order quantities vary by product. Generally, we start at 25-50 units for most items. Contact us for specific requirements.",
    },
    {
      question: "Do you offer samples?",
      answer:
        "Yes, we can provide samples for evaluation. Sample costs may apply but are typically credited against your first order.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "We deliver worldwide in 24/48 hours depending on your location. Shipping costs may vary based on destination. We ship to countries all around the world.",
    },
    {
      question: "Do you offer custom branding?",
      answer:
        "Yes, most of our products can be customised with your logo through printing, engraving, or embroidery. Minimum quantities apply for branded orders.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Payment is made upon delivery (cash on delivery). This ensures you can inspect your products before completing the payment.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300">
              Have questions or ready to place an order? We&apos;re here to help.
              Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@axenovalab.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Axenova Lab Ltd<br />
                      71-75 Shelton Street, Covent Garden<br />
                      London, WC2H 9JQ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Company Information
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Company Name:</strong> Axenova Lab Ltd</p>
                  <p><strong>VAT Number:</strong> GB 847 2936 18</p>
                  <p><strong>Registered in:</strong> England and Wales</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Place Your Order?
                </h2>
                <p className="text-gray-300 mb-8">
                  Send us an email with your requirements and we&apos;ll get back to
                  you with a personalised quote within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">Worldwide delivery in 24/48h</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">Payment on delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">Custom branding available</span>
                  </div>
                </div>

                <a
                  href="mailto:info@axenovalab.com"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors mt-8"
                >
                  Email Us Now
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common enquiries
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
