"use client";

import { motion } from "framer-motion";
import { Search, Phone } from "lucide-react";

export default function Hero() {
  const floatAnimation = (delay) => ({
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <div className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-blue-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-slate-900 dark:text-white leading-[1.1]">
              We Provide<br/>Your Business<br/>Solutions.
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-medium">
              Simplifying compliance, boosting profits, tech-driven consultancy helps your business run smarter and faster.
            </p>
            
            {/* Search Bar */}
            <div className="w-full max-w-lg">
              <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-full shadow-lg p-2 border border-slate-100 dark:border-slate-800 focus-within:ring-2 focus-within:ring-primary/50 transition">
                <Search className="w-5 h-5 text-slate-400 ml-4" />
                <input 
                  type="text" 
                  placeholder="Search job, title etc..." 
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 px-4 text-slate-700 dark:text-slate-200"
                />
                <button className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold transition flex-shrink-0">
                  Search
                </button>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-300 mt-4 ml-2">
                <span className="font-bold">Popular: </span>
                <span className="text-slate-600 dark:text-slate-400">Return Filling, Registrations, Financial Planning, VCompliances</span>
              </p>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block w-full h-[600px] lg:h-[700px] z-0"
          >
            {/* The main image of folks overlapping */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-transparent dark:from-blue-900/10 rounded-tl-full rounded-bl-full translate-x-12"></div>
            <img 
              src="/assets/img_main.png" 
              alt="TaxSafar Business Experts" 
              className="absolute right-0 bottom-0 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(30,58,138,0.2)]" 
            />

            {/* Floating Tags */}
            <motion.div animate={floatAnimation(0)} className="absolute top-0 right-20 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Registrations
            </motion.div>
            
            <motion.div animate={floatAnimation(0.5)} className="absolute top-[5%] right-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              GST
            </motion.div>

            <motion.div animate={floatAnimation(1)} className="absolute top-[10%] right-32 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Income Tax
            </motion.div>

            <motion.div animate={floatAnimation(1.5)} className="absolute top-[17%] right-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Consultancy
            </motion.div>
            
            <motion.div animate={floatAnimation(2)} className="absolute top-[27%] right-24 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Accounting
            </motion.div>

            <motion.div animate={floatAnimation(0.2)} className="absolute top-[30%] right-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-5 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Notice
            </motion.div>

            <motion.div animate={floatAnimation(0.8)} className="absolute top-[40%] right-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-2.5 rounded-full shadow-lg font-serif text-lg font-medium border border-slate-100 dark:border-slate-700">
              Virtual Office
            </motion.div>

            {/* "Call Now" Float Card over the image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-24 left-0 bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-4 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
                <Phone className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">CALL NOW</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 -mt-1">To Our Experts</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Stats Section below Hero spanning width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 pb-4 relative z-10 flex flex-col md:flex-row justify-center lg:justify-end items-center gap-12 lg:pr-24"
        >
           {/* Fake Avatars Group */}
           <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-4 border-blue-50 dark:border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-4 border-blue-50 dark:border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=5" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-4 border-blue-50 dark:border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=8" alt="Avatar" />
                <div className="w-12 h-12 rounded-full border-4 border-blue-50 dark:border-slate-950 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-sm">
                  +
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">50+</p>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Individual CA Freelancer</p>
              </div>
           </div>

           {/* Rating */}
           <div className="flex flex-col">
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">A+ Rating</p>
              <div className="flex items-center mt-1 space-x-2">
                <div className="flex text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium pt-1">4.78 (10k+)</span>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
