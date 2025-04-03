import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Business with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            We help businesses navigate and leverage the power of artificial intelligence for growth and innovation.
          </p>
          <Link
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About AIdeas</h2>
              <p className="text-gray-600 mb-4">
                We are a team of AI experts passionate about helping businesses thrive in the digital age.
                Our mission is to make AI accessible and beneficial for companies of all sizes.
              </p>
              <p className="text-gray-600">
                With years of experience in AI implementation and consulting, we provide tailored solutions
                that drive real business value and innovation.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about-image.jpg"
                alt="AI Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AIdeas</h3>
              <p className="text-gray-400">
                Transforming businesses through AI innovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@aideas.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 AI Street, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AIdeas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "🤖",
    title: "AI Strategy Consulting",
    description: "Develop comprehensive AI strategies aligned with your business goals and objectives.",
  },
  {
    icon: "⚡",
    title: "AI Implementation",
    description: "End-to-end implementation of AI solutions, from development to deployment.",
  },
  {
    icon: "📈",
    title: "AI Training & Workshops",
    description: "Empower your team with AI knowledge through customized training programs.",
  },
];
