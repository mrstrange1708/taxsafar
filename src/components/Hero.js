"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] rounded-full bg-blue-50/50 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-amber-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Trusted by vendors & businesses across India
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            One Stop for All Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Tax & Compliance Needs</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Simplifying compliance, boosting profits. Our tech-driven consultancy helps your business run smarter and faster.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-primary hover:bg-blue-800 rounded-lg shadow-lg shadow-primary/30 transition flex items-center justify-center">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-lg shadow-sm transition flex items-center justify-center">
              Explore Services
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-500">
            <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Expert-led return filing</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Fast & secure processing</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 4.78 Rating (10k+)</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
