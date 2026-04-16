"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              TaxSafar
            </Link>
          </div>
          
          <div className="hidden md:flex ml-10 space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919784818899" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              +91 97848 18899
            </a>
            <Link href="/login" className="px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary/5 transition font-medium">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-800 transition font-medium shadow-md shadow-primary/20">
              Register
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Home</Link>
            <Link href="/services" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Services</Link>
            <Link href="/about" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">About Us</Link>
            <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-primary">Contact</Link>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
              <Link href="/login" className="block text-center px-4 py-2 border border-primary text-primary rounded-md">Login</Link>
              <Link href="/register" className="block text-center px-4 py-2 bg-primary text-white rounded-md">Register</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
