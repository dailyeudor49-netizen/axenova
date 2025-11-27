import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete catalogue of wholesale corporate gifts, promotional items, and branded merchandise. Premium quality products for businesses.",
};

export default function ProductsPage() {
  const categories = [
    {
      id: "drinkware",
      title: "Drinkware & Bottles",
      description:
        "Premium drinkware for corporate gifts and promotional campaigns. From ceramic mugs to stainless steel bottles.",
      products: [
        "Ceramic Mugs",
        "Travel Mugs",
        "Water Bottles",
        "Thermal Flasks",
        "Glass Bottles",
        "Sports Bottles",
        "Coffee Cups",
      ],
    },
    {
      id: "bags",
      title: "Bags & Totes",
      description:
        "Professional bags for business events, conferences, and employee gifts. Various styles and materials available.",
      products: [
        "Laptop Bags",
        "Backpacks",
        "Tote Bags",
        "Drawstring Bags",
        "Cooler Bags",
        "Messenger Bags",
        "Travel Bags",
      ],
    },
    {
      id: "desk",
      title: "Desk Accessories",
      description:
        "Elegant desk items that keep your brand visible every day. Perfect for office environments.",
      products: [
        "Pen Holders",
        "Desk Organisers",
        "Mouse Pads",
        "Desk Calendars",
        "Paperweights",
        "Business Card Holders",
        "Desk Clocks",
      ],
    },
    {
      id: "gifts",
      title: "Executive Gifts",
      description:
        "Premium gift sets and luxury items for VIP clients, awards, and special occasions.",
      products: [
        "Leather Portfolios",
        "Pen Gift Sets",
        "Wine Accessories",
        "Watch Boxes",
        "Crystal Awards",
        "Premium Gift Sets",
        "Leather Wallets",
      ],
    },
    {
      id: "eco",
      title: "Eco-Friendly Products",
      description:
        "Sustainable promotional items made from recycled, bamboo, and other eco-friendly materials.",
      products: [
        "Bamboo Products",
        "Recycled Notebooks",
        "Cork Items",
        "Organic Cotton Bags",
        "Wheat Straw Items",
        "Seed Paper Products",
        "Reusable Straws",
      ],
    },
    {
      id: "events",
      title: "Event Merchandise",
      description:
        "Essential supplies for conferences, trade shows, and corporate events.",
      products: [
        "Lanyards",
        "Badge Holders",
        "Wristbands",
        "Event Bags",
        "Flags & Banners",
        "Table Covers",
        "Pop-up Displays",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Product Catalogue
            </h1>
            <p className="text-lg text-gray-300">
              Discover our extensive range of corporate gifts and promotional items.
              Quality products at wholesale prices with worldwide delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-slate-50 border-b border-gray-200 sticky top-20 md:top-24 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex-shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-40"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <span className="text-indigo-600 font-medium text-sm">
                      Category {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="group p-6 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors border border-transparent hover:border-indigo-200"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                        <svg
                          className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {product}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us with your specific requirements. We offer competitive pricing
            for bulk orders and can customise products with your branding.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors"
          >
            Request a Quote
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
