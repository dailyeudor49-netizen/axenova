import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Drinkware & Bottles",
      description: "Branded mugs, water bottles, travel cups and thermal flasks for everyday use.",
      icon: "☕",
      href: "/products#drinkware",
    },
    {
      title: "Bags & Totes",
      description: "Backpacks, laptop bags, tote bags and luggage for corporate events.",
      icon: "👜",
      href: "/products#bags",
    },
    {
      title: "Desk Accessories",
      description: "Organisers, pen holders, calendars and premium desk sets.",
      icon: "📎",
      href: "/products#desk",
    },
    {
      title: "Executive Gifts",
      description: "Premium gift sets, leather goods and luxury items for VIP clients.",
      icon: "🎁",
      href: "/products#gifts",
    },
    {
      title: "Eco-Friendly Products",
      description: "Sustainable and recyclable promotional items for green initiatives.",
      icon: "🌱",
      href: "/products#eco",
    },
    {
      title: "Event Merchandise",
      description: "Lanyards, badges, wristbands and conference supplies.",
      icon: "🎪",
      href: "/products#events",
    },
  ];

  const stats = [
    { number: "8,000+", label: "Products Available" },
    { number: "600+", label: "Happy Clients" },
    { number: "12+", label: "Years Experience" },
    { number: "24/48h", label: "Worldwide Delivery" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-indigo-500/20 text-indigo-300 text-sm font-medium rounded-full mb-6">
              B2B Corporate Gifts Wholesale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Corporate Gifts
              <span className="text-indigo-400"> at Wholesale Prices</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Your trusted partner for corporate gifts, promotional items, and branded
              merchandise. We supply businesses worldwide with quality products
              and fast 24/48h delivery. Payment on delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Browse Catalogue
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our extensive range of corporate gifts and promotional items,
              perfect for events, employee recognition, and client appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View products
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Axenova Lab?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We&apos;ve been supplying premium corporate gifts to businesses worldwide
                for over 12 years. Our commitment to quality and service makes us the
                preferred choice for promotional merchandise.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Worldwide Delivery in 24/48h",
                    desc: "Fast shipping to any country, costs vary by destination",
                  },
                  {
                    title: "Payment on Delivery",
                    desc: "Pay when you receive your products, inspect before paying",
                  },
                  {
                    title: "Custom Branding Available",
                    desc: "Logo printing, engraving, and personalisation options",
                  },
                  {
                    title: "Bulk Order Discounts",
                    desc: "Competitive wholesale pricing for large quantities",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-slate-800 rounded-3xl p-10 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Get Your Quote Today</h3>
              <p className="text-gray-300 mb-6">
                Contact us with your requirements and receive a personalised quote
                within 24 hours. No minimum order for first-time customers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <p className="text-center text-gray-400 text-sm mt-4">
                Or email us at info@axenovalab.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of businesses who trust Axenova Lab for their
            corporate gifting needs. Quality products, competitive prices, worldwide delivery.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Order
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
