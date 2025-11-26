import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Axenova Lab",
  description:
    "Explore our comprehensive marketing services including digital marketing, brand strategy, advertising, and business consulting.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive online marketing strategies to increase your digital presence and reach your target audience effectively.",
      features: [
        "Search Engine Optimization (SEO) - Improve your visibility in search results",
        "Pay-Per-Click Advertising (PPC) - Targeted ad campaigns with measurable ROI",
        "Social Media Marketing - Build and engage your community across platforms",
        "Content Marketing - Create valuable content that attracts and retains customers",
        "Email Marketing - Nurture leads and maintain customer relationships",
        "Analytics & Reporting - Track performance and optimize strategies",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      description:
        "Build a strong, recognizable brand identity that resonates with your target audience and sets you apart from competitors.",
      features: [
        "Brand Identity Development - Create a cohesive visual and verbal identity",
        "Brand Positioning - Define your unique place in the market",
        "Messaging Framework - Develop clear, consistent brand messaging",
        "Competitive Analysis - Understand your market landscape",
        "Brand Guidelines - Document standards for consistent brand application",
        "Rebranding Services - Refresh or transform your existing brand",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: "advertising",
      title: "Advertising",
      description:
        "Strategic advertising campaigns across digital and traditional channels to maximize your reach and return on investment.",
      features: [
        "Campaign Strategy & Planning - Develop targeted advertising approaches",
        "Display Advertising - Visual ads across websites and apps",
        "Search Advertising - Appear when customers search for your products",
        "Social Media Advertising - Reach audiences on social platforms",
        "Retargeting Campaigns - Re-engage visitors who showed interest",
        "Performance Tracking - Monitor and optimize ad performance",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
    {
      id: "business-consulting",
      title: "Business Consulting",
      description:
        "Expert guidance on business growth, market analysis, and strategic planning to help you achieve your objectives.",
      features: [
        "Market Research & Analysis - Understand your industry and customers",
        "Growth Strategy Development - Plan for sustainable business growth",
        "Marketing Audit - Evaluate current marketing effectiveness",
        "Customer Journey Mapping - Optimize the path to purchase",
        "Competitive Intelligence - Stay informed about market dynamics",
        "Strategic Planning - Set clear goals and actionable plans",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, target audience, and current challenges.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a customized marketing strategy tailored to your needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute the strategy with precision, managing all aspects of your marketing campaigns.",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "We continuously monitor performance and make data-driven adjustments to improve results.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Services
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Comprehensive marketing solutions designed to help your business
                succeed. From digital marketing to strategic consulting, we offer
                the expertise you need to grow.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Marketing analytics dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`bg-gray-50 rounded-2xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-3">
                        <svg
                          className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A straightforward approach to delivering results for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your marketing needs and how we can help
            your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
