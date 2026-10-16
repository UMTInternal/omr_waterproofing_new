import React from 'react'

const UndergroundTank = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-800 via-cyan-900 to-blue-950 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-teal-300 text-xs font-black tracking-wider uppercase shadow-md border border-teal-500/30">
              Welcome to WaterSeal Waterproofing — Protecting Your Home from Leaks
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Underground Water Tank Waterproofing Services
            </h2>
            <p className="text-teal-50 text-base sm:text-lg font-medium leading-relaxed pt-2">
              Professional underground water tank waterproofing for <span className="text-yellow-300 font-bold underline">RCC water storage tanks</span>. Underground Water Tank Waterproofing services in Delhi NCR by Waterseal. We repair RCC underground water tank leakage, seepage, cracks & groundwater ingress using non-toxic, long-lasting waterproofing systems. Free inspection available.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-teal-400/40">
            <h3 className="text-xl font-black text-white">Need Tank Waterproofing in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our water tank waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-teal-300 bg-teal-950/80 border border-teal-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ Advanced Technology for Durable Protection
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-teal-500/20 flex flex-col justify-between group hover:border-teal-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-400 flex items-center justify-center text-3xl font-black text-teal-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Non-Toxic Safe Coatings for Drinking Water
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Uses food-grade, non-toxic waterproofing compounds that keep stored drinking water pure, clean, and completely safe from contamination.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-teal-100 text-teal-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Safe & Non-Toxic
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-teal-500/20 flex flex-col justify-between group hover:border-teal-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-400 flex items-center justify-center text-3xl font-black text-teal-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Stops Groundwater Ingress & Cracks
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Seals internal joints and structural cracks tightly to stop outside dirty groundwater from entering into the clean water storage tank.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-teal-100 text-teal-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Zero Contamination
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-teal-500/20 flex flex-col justify-between group hover:border-teal-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 border-2 border-teal-400 flex items-center justify-center text-3xl font-black text-teal-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Long-Lasting RCC Tank Protection
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Provides heavy-duty structural strength to concrete walls against internal water pressure and chemical degradation over time.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-teal-100 text-teal-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Durable RCC Strength
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default UndergroundTank