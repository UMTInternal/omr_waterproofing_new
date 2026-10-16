import React from 'react'

const BathroomRenovationSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-pink-300 via-pink-400 to-rose-400 px-6 sm:px-12 lg:px-20 text-slate-950 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-pink-300 text-xs font-black tracking-wider uppercase shadow-md">
              Delhi NCR’s Trusted Renovation Experts
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Complete Bathroom Renovation & Modern Makeover Services
            </h2>
            <p className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed pt-2">
              If your bathroom is outdated, tiles are cracking, or leakage problems keep recurring, we provide end-to-end bathroom renovation solutions across Delhi NCR. From old tile demolition to <span className="text-red-900 underline">advanced sub-floor waterproofing</span> and <span className="text-indigo-950 underline">modern sanitary fittings</span>, we handle everything under one roof!
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-pink-500">
            <h3 className="text-xl font-black text-slate-900">Want to Remodel Your Bathroom?</h3>
            <p className="text-slate-700 text-sm font-medium">
              Book a free consultation and get the best package customized for your home today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#consultation" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 BOOK CONSULTATION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-pink-900 bg-pink-100 px-3 py-1 rounded-full">
                ⭐ End-to-End Service With Full Guarantee
              </span>
            </div>
          </div>

        </div>

        {/* 3 Renovation Steps / Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-900/10 flex flex-col justify-between group hover:border-slate-900 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-400 flex items-center justify-center text-3xl font-black text-pink-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Tile Demolition & Debris Removal
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                We safely remove old and damaged tiles, thoroughly clean the structural surface, and dispose of construction debris properly to ensure a smooth workflow.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-pink-100 text-pink-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Phase 1: Stripping & Cleaning
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-900/10 flex flex-col justify-between group hover:border-slate-900 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-400 flex items-center justify-center text-3xl font-black text-pink-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Heavy-Duty Sub-Floor Waterproofing
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Before laying new tiles, we apply an advanced multi-layer waterproofing membrane across the floor and walls to permanently eliminate future seepage risks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-pink-100 text-pink-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Phase 2: 100% Leak-Proof Coating
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-900/10 flex flex-col justify-between group hover:border-slate-900 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 border-2 border-pink-400 flex items-center justify-center text-3xl font-black text-pink-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Modern Tiling & Fixtures Installation
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                We install your preferred anti-skid tiles, premium sanitaryware, sleek showers, and concealed plumbing fixtures to give your bathroom a luxury finish.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-pink-100 text-pink-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Phase 3: Final Luxury Look & Handover
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default BathroomRenovationSection