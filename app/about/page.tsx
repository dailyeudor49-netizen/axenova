import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Axenova Lab, your wholesale partner for premium corporate gifts and promotional items. Quality products for businesses worldwide.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Quality First",
      description:
        "Every product in our catalogue is carefully selected and quality-tested. We work only with trusted manufacturers to ensure consistent excellence.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      description:
        "Direct relationships with manufacturers allow us to offer wholesale prices that maximise your profit margins on every order.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Global Delivery",
      description:
        "We ship to countries worldwide in 24/48 hours. Fast, reliable logistics with tracking on every order, wherever you are.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      description:
        "Dedicated support team to help you find the perfect products. We build lasting partnerships with our clients.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const milestones = [
    { year: "2012", event: "Founded in London as a corporate gifts supplier" },
    { year: "2014", event: "Expanded warehouse to 15,000 sq ft" },
    { year: "2016", event: "Launched European distribution network" },
    { year: "2018", event: "Reached 500+ active business partners" },
    { year: "2021", event: "Introduced eco-friendly product line" },
    { year: "2024", event: "Over 8,000 products in catalogue" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Axenova Lab
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since 2012, we&apos;ve been helping businesses worldwide source premium
              corporate gifts and promotional items. Our mission is simple: quality
              products, competitive prices, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-600 font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Built on Trust and Quality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Axenova Lab was founded with a clear vision: make premium corporate
                  gifts accessible to businesses of all sizes through fair wholesale
                  pricing and reliable service.
                </p>
                <p>
                  What started as a small operation in London has grown into a trusted
                  partner for hundreds of businesses across the globe. Our growth has
                  been driven by one principle: treat every customer the way we would
                  want to be treated.
                </p>
                <p>
                  Today, our catalogue includes over 8,000 products, from drinkware
                  and bags to executive gifts and eco-friendly items. But our commitment
                  remains the same: quality products, honest pricing, and worldwide
                  delivery in 24/48 hours.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-indigo-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-indigo-600">12+</div>
                  <div className="text-sm text-gray-600 mt-1">Years in Business</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-indigo-600">600+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-indigo-600">8,000+</div>
                  <div className="text-sm text-gray-600 mt-1">Products</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-indigo-600 font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-indigo-500 rounded-full mt-2"></div>
                  <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-indigo-100 mb-8">
            Join hundreds of businesses who trust Axenova Lab for their
            corporate gifting needs. Quality products, competitive prices,
            worldwide delivery.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
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
          </Link>
        </div>
      </section>
    </div>
  );
}
