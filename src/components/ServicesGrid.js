"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react"; // Using this for the speaker icon in "Know More"

const servicesList = [
  {
    title: "Return Filing",
    subtitle: "GST, Income Tax, TDS, FSSAI & more",
    reverse: false,
    bullets: [
      "Expert-led return filing across all tax types.",
      "Ensure compliance with latest tax regulations.",
      "Fast, accurate, and stress-free submission.",
      "Dedicated support for error resolution and queries."
    ]
  },
  {
    title: "Assessment & Notice Resolution",
    subtitle: "Income Tax, GST, Professional Tax, Customs & more",
    reverse: true,
    bullets: [
      "Clear handling of income tax or GST notices.",
      "Case-specific consultation with experts.",
      "Drafting and filing replies to tax authorities.",
      "Support for scrutiny, assessments, and appeals."
    ]
  },
  {
    title: "Registrations & Compliance",
    subtitle: "Company Incorporation, GST, Trademark, MSME & more",
    reverse: false,
    bullets: [
      "Start-to-finish company and LLP incorporation.",
      "Annual filings, strike-off, and legal drafting.",
      "Registrations for GST, MSME, FSSAI, Copyright, etc.",
      "Comprehensive legal and compliance support."
    ]
  },
  {
    title: "Virtual Office Facilities",
    subtitle: "For GST, MCA Registrations & more",
    reverse: true,
    bullets: [
      "Professional address for registration purposes.",
      "Pan-India presence with instant setup.",
      "Courier handling and virtual assistant options.",
      "GST/MCA compliant documentation provided."
    ]
  },
  {
    title: "Consultancy & Compliances",
    subtitle: "Tax, Business, Start-up & more",
    reverse: false,
    bullets: [
      "Start-up registration and pitch-deck assistance.",
      "Business structuring and tax advisory.",
      "Ongoing compliance monitoring & strategy.",
      "End-to-end growth and legal guidance."
    ]
  },
  {
    title: "Virtual Accounting & Bookkeeping",
    subtitle: "Cloud & Client Based Services",
    reverse: true,
    bullets: [
      "Real-time cloud-based bookkeeping systems.",
      "Data protection & confidentiality assurance.",
      "Timely reports and monthly reconciliation.",
      "Accounts maintenance tailored to your business."
    ]
  },
  {
    title: "Loan Assistance & Documentation",
    subtitle: "Business, Home, Gold, Education & Personal Loans",
    reverse: false,
    bullets: [
      "Expert help in choosing the best loan offers.",
      "Documentation and eligibility support.",
      "Quick approval and smooth processing.",
      "Customized loan strategies based on need."
    ]
  }
];

export default function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-800 dark:text-slate-100 mb-6">
            Our Services?
          </h2>
          <div className="absolute right-[20%] top-0 hidden lg:block opacity-30 dark:opacity-10 pointer-events-none">
            {/* Simple decoration to mimic the checkered block from screenshot */}
            <div className="w-24 h-24 grid grid-cols-4 grid-rows-4 gap-1">
              {[...Array(16)].map((_, i) => <div key={i} className="bg-slate-300"></div>)}
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`flex flex-col gap-12 lg:gap-20 ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              
              {/* Info & Buttons Side */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  {service.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-3 border-2 border-primary text-primary dark:border-blue-400 dark:text-blue-400 font-bold rounded-lg hover:bg-primary/5 transition">
                    <Volume2 className="w-5 h-5 mr-2" /> Know More
                  </button>
                  <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-800 shadow-md shadow-primary/20 transition">
                    Request a Call Back
                  </button>
                </div>
              </div>

              {/* Bullets Menu Side */}
              <div className="flex-1 space-y-4 flex flex-col justify-center">
                {service.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex relative pl-8 py-3 border-b border-blue-50 dark:border-slate-800 last:border-0 group">
                    <span className="absolute left-0 top-3 text-primary dark:text-blue-400 font-bold tracking-tighter opacity-80 group-hover:translate-x-1 transition-transform">
                      &raquo;
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-lg leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll to Top button float (similar to screenshot) */}
        <div className="fixed bottom-8 right-8 z-50">
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-primary text-white p-3 rounded-full hover:bg-blue-800 shadow-lg transition">
             ↑
           </button>
        </div>

      </div>
    </section>
  );
}
