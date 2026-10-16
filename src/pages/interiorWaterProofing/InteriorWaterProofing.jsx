import React from 'react'

const InteriorWaterproofing = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-blue-300 text-xs font-black tracking-wider uppercase shadow-md border border-blue-500/30">
              Delhi NCR’s Trusted Wall Waterproofing Contractors
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Interior Wall Waterproofing Services
            </h2>
            <p className="text-blue-100 text-base sm:text-lg font-medium leading-relaxed pt-2">
              Long-Lasting Solution for Wall Seepage. We provide expert waterproofing solutions using <span className="text-yellow-300 font-bold underline">high-performance chemicals</span> to protect interior walls, ceilings, and surfaces from long-term leakage, dampness, paint peeling, and structural damage.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-blue-400/40">
            <h3 className="text-xl font-black text-white">Need Expert Help in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our wall waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 TALK TO EXPERT
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-blue-300 bg-blue-950/80 border border-blue-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ Protect Your Walls. Protect Your Home.
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-blue-500/20 flex flex-col justify-between group hover:border-blue-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center text-3xl font-black text-blue-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Prevents Dampness & Paint Peeling
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Stops moisture from seeping through brickwork, ensuring your interior wall paint and putty stay fresh, smooth, and undamaged for years.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-blue-100 text-blue-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Prevents Dampness
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-blue-500/20 flex flex-col justify-between group hover:border-blue-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center text-3xl font-black text-blue-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Stops Leakage & Seepage Permanently
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Deep-penetrating chemical treatments lock out water molecules from internal pores, completely eliminating active wall seepage.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-blue-100 text-blue-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Stops Leakage & Seepage
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-blue-500/20 flex flex-col justify-between group hover:border-blue-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center text-3xl font-black text-blue-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Prevents Mold & Fungus Growth
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Eliminates hidden moisture pockets that cause unhealthy black mold, fungus, and foul odors, keeping your indoor air safe and clean.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-blue-100 text-blue-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Prevents Mold & Fungus
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default InteriorWaterproofing;