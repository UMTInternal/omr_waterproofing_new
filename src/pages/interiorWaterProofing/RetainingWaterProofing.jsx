import React from 'react'

const RetainingWaterproofing = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-800 via-zinc-900 to-stone-950 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-cyan-400 text-xs font-black tracking-wider uppercase shadow-md border border-cyan-500/30">
              Welcome to WaterSeal Waterproofing – Protecting Your Home from Leaks
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Basement Retaining Wall Waterproofing Solutions
            </h2>
            <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed pt-2">
              Stop Basement Leakage & Seepage — Strong Protection for Retaining Walls. Protect your basement from water seepage, dampness, and structural damage caused by retaining wall leakage. Waterseal provides <span className="text-yellow-400 font-bold underline">effective waterproofing solutions</span> that block water pressure, seal cracks, and keep your basement dry, safe, and durable.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-slate-700">
            <h3 className="text-xl font-black text-white">Need Basement Protection in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our underground waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-cyan-300 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ Strong Protection for Underground Walls & Dry Spaces
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-slate-700 flex flex-col justify-between group hover:border-cyan-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 border-2 border-cyan-400 flex items-center justify-center text-3xl font-black text-cyan-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Prevents Water Seepage & Dampness
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Blocks moisture entry through concrete pores and foundation gaps, ensuring underground basement walls remain completely dry.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Prevents Seepage
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-slate-700 flex flex-col justify-between group hover:border-cyan-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 border-2 border-cyan-400 flex items-center justify-center text-3xl font-black text-cyan-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Protects Structure & Enhances Durability
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Shields steel reinforcement bars from rusting and concrete from weakening due to continuous underground water pressure.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Structural Safety
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-slate-700 flex flex-col justify-between group hover:border-cyan-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 border-2 border-cyan-400 flex items-center justify-center text-3xl font-black text-cyan-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Resists Hydrostatic Pressure & Water Ingress
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Engineered with high-bonding, long-lasting protective layers designed specifically to counter heavy ground-water pressure.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Hydrostatic Resistance
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default RetainingWaterproofing