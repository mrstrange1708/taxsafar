"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Phone, Mail, Sun, Moon } from "lucide-react";

// Social Icons
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="font-medium">Follow us:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-200 transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-blue-200 transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-blue-200 transition"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-blue-200 transition"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href="mailto:support@taxsafar.com" className="flex items-center hover:text-blue-200 transition">
              <Mail className="w-4 h-4 mr-1.5" /> support@taxsafar.com
            </a>
            <a href="tel:+919784818899" className="flex items-center hover:text-blue-200 transition">
              <Phone className="w-4 h-4 mr-1.5" /> +91 97848 18899
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? "glassmorphism py-3" : "bg-white dark:bg-slate-900 shadow-sm py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src="/assets/logo.png" alt="TaxSafar" className="h-10 w-auto dark:brightness-200 dark:contrast-200" />
              </Link>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-8 items-center">
              <Link href="/" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition font-bold">Home</Link>
              <Link href="/services" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition font-bold">Services</Link>
              <Link href="/about" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition font-bold">About Us</Link>
              <Link href="/contact" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition font-bold">Contact</Link>
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition">
                Login
              </Link>
              <Link href="/register" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition">
                Register Now
              </Link>
              <Link href="/partner-login" className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-blue-800 transition font-bold shadow-md shadow-primary/20 text-sm whitespace-nowrap">
                Partner login
              </Link>
              
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 shadow-xl absolute top-full left-0 w-full border-t border-slate-100 dark:border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="/" className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Home</Link>
              <Link href="/services" className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Services</Link>
              <Link href="/about" className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">About Us</Link>
              <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Contact</Link>
              
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-3 px-3">
                <Link href="/login" className="block text-center px-4 py-3 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-md">Login</Link>
                <Link href="/register" className="block text-center px-4 py-3 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-md">Register Now</Link>
                <Link href="/partner-login" className="block text-center px-4 py-3 bg-primary text-white font-bold rounded-md">Partner login</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
