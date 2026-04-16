import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">TaxSafar</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Simplifying compliance, boosting profits. Our tech-driven consultancy helps your business run smarter and faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/return-filing" className="hover:text-amber-400 transition">Return Filing</Link></li>
              <li><Link href="/services/registrations" className="hover:text-amber-400 transition">GST Registration</Link></li>
              <li><Link href="/services/accounting" className="hover:text-amber-400 transition">Virtual Accounting</Link></li>
              <li><Link href="/services/consultancy" className="hover:text-amber-400 transition">Consultancy Services</Link></li>
              <li><Link href="/services/loan-assistance" className="hover:text-amber-400 transition">Loan Assistance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-amber-400 transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition">Blogs</Link></li>
              <li><Link href="/faq" className="hover:text-amber-400 transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
              <li><Link href="/support" className="hover:text-amber-400 transition">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Navrangpura, Ahmedabad,<br />Gujarat, India - 380009</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" />
                <a href="tel:+919784818899" className="hover:text-white transition">+91 97848 18899</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" />
                <a href="mailto:support@taxsafar.com" className="hover:text-white transition">support@taxsafar.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} TaxSafar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
            <Link href="/payment-policy" className="hover:text-white transition">Payment Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
