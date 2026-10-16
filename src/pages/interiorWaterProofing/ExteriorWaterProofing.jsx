import React from 'react'

const ExteriorWaterproofing = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 px-6 sm:px-12 lg:px-20 text-white font-sans relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Header & Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-amber-300 text-xs font-black tracking-wider uppercase shadow-md border border-amber-500/30">
              Delhi NCR’s Trusted Exterior Wall Waterproofing Service Contractor
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Exterior Wall Waterproofing Services in Delhi NCR
            </h2>
            <p className="text-amber-50 text-base sm:text-lg font-medium leading-relaxed pt-2">
              Long-Lasting • Cost-Effective • Permanent Solution. We provide expert waterproofing services using <span className="text-yellow-300 font-bold underline">high-performance PSv chemicals</span> to protect exterior walls, facades, and surfaces from long-term weather damage, heavy rains, and structural decay.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-amber-400/40">
            <h3 className="text-xl font-black text-white">Need Exterior Protection in Delhi NCR?</h3>
            <p className="text-slate-300 text-sm font-medium">
              Get free inspection or talk to our exterior waterproofing expert right away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inspection" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                👉 GET FREE INSPECTION
              </a>
              <a 
                href="tel:+919717045819" 
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📞 WATERSEAL SERVICES
              </a>
            </div>
            <div className="text-center pt-2">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-800 px-3.5 py-1.5 rounded-full inline-block">
                ⭐ Advanced Protection for Exterior Walls & Facades
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Benefits/Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-amber-500/20 flex flex-col justify-between group hover:border-amber-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-3xl font-black text-amber-900">
                1
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Protects from Rainwater Penetration & Dampness
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Shields exterior building surfaces from driving monsoon rains, completely stopping moisture from entering indoor living spaces.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-amber-100 text-amber-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Rain & Dampness Shield
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-amber-500/20 flex flex-col justify-between group hover:border-amber-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-3xl font-black text-amber-900">
                2
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                UV & Weather Resistant for Long-Lasting Performance
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Advanced formula withstands extreme harsh sunlight, thermal expansion, and weather fluctuations without cracking or fading.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-amber-100 text-amber-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                UV & Weather Resistant
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl border-2 border-amber-500/20 flex flex-col justify-between group hover:border-amber-500 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-3xl font-black text-amber-900">
                3
              </div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                Prevents Peeling, Flaking & Wall Damage
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Enhances the life of exterior walls while maintaining a clean, premium, and flawless architectural look for your property.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="inline-block bg-amber-100 text-amber-900 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
                Prevents Peeling & Flaking
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ExteriorWaterproofing