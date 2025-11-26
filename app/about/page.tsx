import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Axenova Lab",
  description:
    "Learn about Axenova Lab, a marketing consulting agency dedicated to helping businesses grow through strategic marketing and advertising solutions.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Marcus Chen",
      role: "Founder & CEO",
      bio: "With over 15 years in digital marketing and brand strategy, Marcus founded Axenova Lab to help businesses navigate the evolving marketing landscape.",
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Digital Marketing",
      bio: "Sarah brings a decade of experience in SEO, PPC, and social media marketing, leading our digital strategy initiatives.",
    },
    {
      name: "David Park",
      role: "Creative Director",
      bio: "David oversees all creative projects, ensuring brand consistency and compelling visual storytelling for our clients.",
    },
    {
      name: "Elena Rodriguez",
      role: "Business Development Manager",
      bio: "Elena connects businesses with the right solutions, understanding their unique challenges and growth objectives.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We believe in honest, transparent relationships with our clients. No hidden fees, no misleading promises—just straightforward communication and realistic expectations.",
    },
    {
      title: "Results-Driven",
      description:
        "Every strategy we develop is designed with measurable outcomes in mind. We focus on what works and continuously optimize for better performance.",
    },
    {
      title: "Collaboration",
      description:
        "We see ourselves as an extension of your team. Your success is our success, and we work closely with you at every step of the journey.",
    },
    {
      title: "Innovation",
      description:
        "The marketing landscape is always changing. We stay ahead of trends and adapt our approaches to ensure your business remains competitive.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Axenova Lab founded as a small consulting firm" },
    { year: "2016", event: "Expanded services to include digital marketing" },
    { year: "2018", event: "Reached 100+ successful client projects" },
    { year: "2020", event: "Grew team to 15+ marketing professionals" },
    { year: "2022", event: "Launched comprehensive advertising services" },
    { year: "2024", event: "Celebrating 10 years of helping businesses grow" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Axenova Lab
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                We are a team of marketing professionals passionate about helping
                businesses achieve their growth potential through strategic
                planning, creative solutions, and data-driven decision making.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Marketing team working together"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Axenova Lab was founded in 2014 with a simple mission: to
                  provide businesses with honest, effective marketing guidance
                  that delivers real results. What started as a small consulting
                  practice has grown into a full-service marketing agency
                  serving clients across various industries.
                </p>
                <p>
                  Our founder, Marcus Chen, recognized that many businesses
                  struggle to navigate the complex world of modern marketing. Too
                  often, companies invest in strategies that don&apos;t align with
                  their goals or work with agencies that overpromise and
                  underdeliver.
                </p>
                <p>
                  At Axenova Lab, we take a different approach. We start by
                  understanding your business, your market, and your objectives.
                  Then we develop customized strategies that make sense for your
                  specific situation—no cookie-cutter solutions or one-size-fits-all
                  packages.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our Journey
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-blue-600 font-semibold">
                      {milestone.year}
                    </div>
                    <div className="text-gray-600">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do at Axenova Lab.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals dedicated to your business success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-blue-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business achieve its marketing
            goals.
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
