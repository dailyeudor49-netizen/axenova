import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Axenova Lab",
  description:
    "Get in touch with Axenova Lab. Contact us to discuss your marketing needs and learn how we can help your business grow.",
};

export default function ContactPage() {
  const faqItems = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from local shops to established companies. Our services are tailored to meet the specific needs of each client, regardless of industry or business type.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary depending on the service and your specific goals. Some digital marketing campaigns can show results within weeks, while brand strategy projects may take longer to fully implement. We always set realistic expectations during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we offer ongoing marketing support and can work with you on a project basis or through ongoing retainer arrangements. We believe in building long-term partnerships with our clients.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "We typically start with a discovery call to understand your business, goals, target audience, and current marketing efforts. This helps us develop a customized approach that fits your needs.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed">
              Have questions about our services? Ready to start your next
              marketing project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Email Us
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Send us a message and we&apos;ll get back to you within 24-48 hours with a personalized response.
                </p>
                <a
                  href="mailto:info@axenovalab.com"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  info@axenovalab.com
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Initial Contact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reach out via email. We typically respond within 24-48 hours to schedule a conversation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Discovery Call</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We schedule a call to understand your business, challenges, and marketing goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Custom Proposal</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We prepare a tailored proposal with recommended services and transparent pricing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Project Kickoff</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once approved, we begin working on your project and keep you updated every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Obligation</h3>
              <p className="text-gray-600 text-sm">Free initial consultation with no strings attached</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">Tailored recommendations for your specific needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">Clear pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
                    ?
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 pl-9 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards transforming your marketing strategy.
            Contact us today for a free consultation.
          </p>
          <a
            href="mailto:info@axenovalab.com"
            className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Send Us an Email
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
