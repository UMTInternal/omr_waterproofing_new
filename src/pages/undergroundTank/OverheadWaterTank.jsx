import React from 'react'

const OverheadWaterTank = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-purple-300 text-xs font-black tracking-wider uppercase shadow-md border border-purple-500/30">
              Welcome to Waterseal Waterproofing — Trusted Overhead Water Tank Waterproofing Experts
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Overhead Water Tank Waterproofing
            </h2>
            <p className="text-purple-50 text-base sm:text-lg font-medium leading-relaxed pt-2">
              100% Leak-Proof Solutions for Overhead Tanks. Protect your overhead water tank from leakage, seepage, hairline cracks, and weather damage with <span className="text-yellow-300 font-bold underline">Waterseal's professional waterproofing solutions</span>. With 30+ years of experience, we use premium non-toxic waterproofing systems that are safe for drinking water and provide long-lasting protection.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-purple-400/40">
            <h3 className="text-xl font-black text-white">Need Overhead Tank Help in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our overhead waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ 30+ Years of Trust & Expertise
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-purple-500/20 flex flex-col justify-between group hover:border-purple-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 border-2 border-purple-400 flex items-center justify-center text-3xl font-black text-purple-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Stops Leakage & Hairline Cracks
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Seals concrete pores and micro-cracks effectively on terrace and staging overhead water tanks to prevent water loss and seepage.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-purple-100 text-purple-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Leak & Crack Proof
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-purple-500/20 flex flex-col justify-between group hover:border-purple-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 border-2 border-purple-400 flex items-center justify-center text-3xl font-black text-purple-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Safe for Drinking Water (Non-Toxic)
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Utilizes certified food-grade, non-toxic waterproofing formulations that keep stored water completely hygienic and safe for daily use.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-purple-100 text-purple-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                100% Safe & Non-Toxic
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-purple-500/20 flex flex-col justify-between group hover:border-purple-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 border-2 border-purple-400 flex items-center justify-center text-3xl font-black text-purple-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Weather & Sunlight Resistance
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Withstands harsh rooftop UV rays, heavy winds, and temperature fluctuations, ensuring long-lasting durability for elevated tanks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-purple-100 text-purple-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Weatherproof Strength
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OverheadWaterTank