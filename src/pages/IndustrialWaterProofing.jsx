import React from 'react'
import IndustrialShedDetails from './IndustrialShedDetails'
import IndustrialShedPricing from './IndustrialShedPricing'
import OtherRoofWaterproofing from './otherRoofwaterproofing'
import IndustrialShedFAQ from './IndustrialShedFaq'

const IndustrialWaterproofing = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 w-full overflow-x-hidden">
      
      {/* HERO SECTION WITH PINK GRADIENT */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-white/50 inline-block px-3 py-1 rounded-md shadow-sm">
              Reliable & Long-Lasting Industrial Shed Waterproofing
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Industrial Shed Waterproofing <span className="block text-slate-900">Services Delhi NCR</span>
            </h1>

            <h3 className="text-lg sm:text-xl font-black text-rose-950 tracking-wide">
              Industrial Shed, Parking, Garage and Window sheds
            </h3>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              Waterseal is a trusted Industrial Waterproofing Contractor in Delhi NCR, solving Warehouse, Parking, Garage and Window sheds leakage problems since 1995. We inspect the root cause and apply the right treatment for long-lasting protection.
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
                href="tel:+919825012345" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-700 hover:bg-green-800 text-white font-extrabold text-sm shadow-lg transition-all duration-300"
              >
                <span>👉 TALK TO EXPERT</span>
              </a>
            </div>
          </div>

          {/* Right Image Grid / Poster Column */}
          <div className="lg:col-span-5 bg-white/40 p-4 sm:p-6 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md">
            <div className="text-center mb-4 bg-slate-900 text-white py-3 px-4 rounded-2xl shadow-md">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Residential & Industrial</p>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-yellow-400">
                SHED WATERPROOFING
              </h2>
              <p className="text-[10px] font-semibold text-slate-300 tracking-wider mt-0.5">
                WATERPROOFING SOLUTIONS • LONG LASTING PROTECTION • EXPERT APPLICATION
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Before 1 */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white border border-gray-200">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80" alt="Before Industrial Shed" className="w-full h-28 object-cover" />
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">BEFORE</span>
              </div>
              {/* After 1 */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white border border-gray-200">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" alt="After Industrial Shed" className="w-full h-28 object-cover" />
                <span className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">AFTER</span>
              </div>
              {/* Before 2 */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white border border-gray-200">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" alt="Before Roof Shed" className="w-full h-28 object-cover" />
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">BEFORE</span>
              </div>
              {/* After 2 */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white border border-gray-200">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" alt="After Roof Shed" className="w-full h-28 object-cover" />
                <span className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">AFTER</span>
              </div>
            </div>

            {/* Bottom Footer Details inside Poster */}
            <div className="mt-4 pt-3 border-t border-slate-300 flex items-center justify-between text-xs font-bold text-slate-900">
              <div className="flex items-center gap-1">
                <span>📞</span>
                <span>97170 45819</span>
              </div>
              <span className="text-emerald-700">waterseal.in</span>
              <span className="bg-emerald-800 text-white px-2 py-0.5 rounded text-[10px]">🛡️ 5 Years</span>
            </div>
          </div>

        </div>
      </section>
      <IndustrialShedDetails/>
      <IndustrialShedPricing/>
      <OtherRoofWaterproofing/>
      <IndustrialShedFAQ/>
   

    </div>
  )
}

export default IndustrialWaterproofing