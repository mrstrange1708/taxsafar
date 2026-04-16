"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  AlertCircle, 
  Building2, 
  MapPin, 
  Briefcase, 
  Calculator, 
  CircleDollarSign, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Return Filing",
    description: "GST, Income Tax, TDS, FSSAI & more. Expert-led, fast, and accurate submission.",
    href: "/services/return-filing"
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-secondary" />,
    title: "Assessment & Notice",
    description: "Clear handling of income tax or GST notices with case-specific expert consultation.",
    href: "/services/assessment"
  },
  {
    icon: <Building2 className="w-8 h-8 text-accent" />,
    title: "Registrations & Compliance",
    description: "Company Incorporation, GST, Trademark, MSME & ongoing comprehensive legal support.",
    href: "/services/registrations"
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
    title: "Virtual Office Facilities",
    description: "Professional address for GST & MCA registrations with instant setup and mail handling.",
    href: "/services/virtual-office"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
    title: "Consultancy",
    description: "Start-up registration, business structuring, tax advisory, and ongoing strategy.",
    href: "/services/consultancy"
  },
  {
    icon: <Calculator className="w-8 h-8 text-purple-500" />,
    title: "Virtual Accounting",
    description: "Real-time cloud-based bookkeeping, timely reports, and monthly reconciliation.",
    href: "/services/accounting"
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-orange-500" />,
    title: "Loan Assistance",
    description: "Business, Home, Gold, & Personal Loans. Expert help in choosing the best offers.",
    href: "/services/loan-assistance"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
    title: "Financial Planning",
    description: "Wealth management, tax-efficient investment strategies, mutual funds & SIPs.",
    href: "/services/financial-planning"
  }
];

export default function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From seamless tax filing to comprehensive business planning, our tech-driven services are designed for your success.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href={service.href} 
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-800 transition"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
