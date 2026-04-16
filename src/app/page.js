import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesGrid />
      
      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4">
          <div className="w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to streamline your business compliances?</h2>
          <p className="text-blue-100 text-lg mb-10">Join thousands of vendors and businesses who trust TaxSafar for their administrative and financial needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="px-8 py-3 bg-accent hover:bg-amber-400 text-slate-900 font-bold rounded-lg shadow-lg transition">Create Free Account</a>
            <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition border border-white/20">Talk to an Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}
