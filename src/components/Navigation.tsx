'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AIdeas
          </Link>
          <div className="flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 