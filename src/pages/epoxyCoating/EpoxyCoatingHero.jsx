import React from 'react'
import EpoxyCoatingDetails from './EpoxyCoatingDetails'
import FrpCoatingSection from './FrpCoatingSection'

const EpoxyCoatingHero = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 w-full overflow-x-hidden">
      
      {/* HERO SECTION WITH PINK GRADIENT */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-white/50 inline-block px-3 py-1 rounded-md shadow-sm">
              Welcome to Waterseal Waterproofing Protecting Your Home from Leaks.
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Epoxy Coating for Leaking <span className="block text-slate-900">Decorative Tiled Surfaces</span>
            </h1>

            <h3 className="text-lg sm:text-xl font-black text-rose-950 tracking-wide">
              High-Performance Waterproof Epoxy Coating for Decorative Walls, Floors & Terraces
            </h3>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              Say goodbye to leaks and wear. Waterseal's epoxy coatings offer heavy-duty waterproofing and a sleek look for industrial, commercial, and residential surfaces.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="#inspection" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-sm shadow-lg transition-all duration-300"
              >
                <span>👉 GET FREE INSPECTION</span>
              </a>
              <a 
                href="tel:+919717045819" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-sm shadow-lg transition-all duration-300"
              >
                <span>👉 TALK TO EXPERT</span>
              </a>
            </div>
          </div>

          {/* Right Image Grid / Poster Column */}
          <div className="lg:col-span-5 bg-white/80 p-4 sm:p-6 rounded-3xl border border-white shadow-xl backdrop-blur-md">
            <div className="text-center mb-4 bg-slate-900 text-white py-3 px-4 rounded-2xl shadow-md">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Decorative Surfaces</p>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                EPOXY COATING
              </h2>
              <p className="text-[10px] font-semibold text-slate-300 tracking-wider mt-0.5">
                WATERPROOF PROTECTION • CHEMICAL RESISTANT • LONG LASTING FINISH
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Image 1: Decorative Wall */}
              <div className="rounded-xl shadow-md bg-white border border-slate-200 overflow-hidden flex flex-col">
                <div className="w-full h-24 bg-slate-200 overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/300?random=11" 
                    alt="Decorative Wall" 
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="bg-slate-900 text-white text-[10px] font-extrabold py-1.5 px-1 text-center tracking-wider">
                  DECORATIVE WALL
                </div>
              </div>
              
              {/* Image 2: Tiled Gallery */}
              <div className="rounded-xl shadow-md bg-white border border-slate-200 overflow-hidden flex flex-col">
                <div className="w-full h-24 bg-slate-200 overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/300?random=22" 
                    alt="Tiled Gallery" 
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="bg-amber-600 text-white text-[10px] font-extrabold py-1.5 px-1 text-center tracking-wider">
                  TILED GALLERY
                </div>
              </div>

              {/* Image 3: Anti Corrosion */}
              <div className="rounded-xl shadow-md bg-white border border-slate-200 overflow-hidden flex flex-col">
                <div className="w-full h-24 bg-slate-200 overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/300?random=33" 
                    alt="Anti Corrosion" 
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="bg-slate-900 text-white text-[10px] font-extrabold py-1.5 px-1 text-center tracking-wider">
                  ANTI CORROSION
                </div>
              </div>

              {/* Image 4: FRP Lining */}
              <div className="rounded-xl shadow-md bg-white border border-slate-200 overflow-hidden flex flex-col">
                <div className="w-full h-24 bg-slate-200 overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/300?random=44" 
                    alt="FRP Lining" 
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="bg-emerald-700 text-white text-[10px] font-extrabold py-1.5 px-1 text-center tracking-wider">
                  FRP LINING
                </div>
              </div>
            </div>

            {/* Bottom Footer Details inside Poster */}
            <div className="mt-4 pt-3 border-t border-slate-300/90 flex items-center justify-between text-xs font-bold text-slate-900">
              <div className="flex items-center gap-1">
                <span>📞</span>
                <span>97170 45819</span>
              </div>
              <span className="text-emerald-700">waterseal.in</span>
              <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px] shadow-sm">🛡️ 5 Years</span>
            </div>
          </div>

        </div>
      </section>
      <EpoxyCoatingDetails/>
      <FrpCoatingSection/>

    </div>
  )
}

export default EpoxyCoatingHero