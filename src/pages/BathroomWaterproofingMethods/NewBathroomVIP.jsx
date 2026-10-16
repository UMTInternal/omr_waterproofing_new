import React from 'react'

const NewBathroomVIP = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-emerald-300 text-xs font-black tracking-wider uppercase shadow-md border border-emerald-500/30">
              Build a Leak-Free Bathroom with WaterSeal
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              New Bathroom Waterproofing Services
            </h2>
            <p className="text-emerald-50 text-base sm:text-lg font-medium leading-relaxed pt-2">
              Professional Waterproofing for Newly Constructed Bathrooms. Protect your newly constructed bathroom with <span className="text-yellow-300 font-bold underline">advanced waterproofing systems</span> before tile installation. WaterSeal delivers reliable, long-lasting protection against water leakage, seepage, and moisture, ensuring a durable and maintenance-free bathroom for years to come.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-emerald-400/40">
            <h3 className="text-xl font-black text-white">Need Expert Help in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ 100% Waterproof From Surface-Prep to Finish
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-emerald-500/20 flex flex-col justify-between group hover:border-emerald-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-3xl font-black text-emerald-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                100% Waterproof Against Leakage & Seepage
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Shields your new sub-floors and walls completely, stopping any chance of water penetrating through concrete or joints in the future.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Complete Leak Protection
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-emerald-500/20 flex flex-col justify-between group hover:border-emerald-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-3xl font-black text-emerald-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Long-Lasting Solutions For Years of Safety
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                High-grade premix waterproof coatings designed specifically for new construction to withstand heavy daily water usage safely.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Durable Performance
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-emerald-500/20 flex flex-col justify-between group hover:border-emerald-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-3xl font-black text-emerald-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Healthier Bathroom (Prevents Mold & Bad Odor)
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Keeps moisture locked out of walls and floors, eliminating hidden dampness that causes foul smells and unhealthy mold growth.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Clean & Safe Environment
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default NewBathroomVIP