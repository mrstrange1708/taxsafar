import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

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
