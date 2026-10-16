import React from 'react'
 const left = 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80'
 const right = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'

const OtherRoofWaterproofing = () => {
   return (
      <section className="w-full py-12 bg-slate-50 text-slate-800 font-sans">
         <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
         
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black tracking-wider text-emerald-700 uppercase bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
               SPECIALIZED SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
               Other Types of Roof Floor and Shed <span className="text-emerald-600">Waterproofing Delhi NCR</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
               Explore industrial shed waterproofing and decorative epoxy coating solutions designed for extreme durability.
            </p>
         </div>


         {/* ================= 2 COLUMN CARDS (ROW) ================= */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARD 1: Industrial Shed Waterproofing */}
            <div className="rounded-2xl bg-white p-6 border-2 border-emerald-200 shadow-lg shadow-emerald-50 flex flex-col justify-between hover:border-emerald-400 transition-all">
               <div className="space-y-5">
               
               <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                     01 • SHED PROTECTION
                  </span>
                  <span className="text-xl">🏭</span>
               </div>

               {/* Image Container for Shed Waterproofing */}
               <div className="w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-inner bg-slate-950">
                  <img 
                     src={left} 
                     alt="Industrial Shed Waterproofing" 
                     className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
               </div>

               {/* Content Description */}
               <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-black text-slate-900">Industrial Shed Waterproofing</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                     Sealing metal and asbestos roofs to stop leakage during the monsoon.
                  </p>
               </div>

               </div>

               {/* Action Button */}
               <div className="pt-6">
               <a 
                  href="#shed-waterproofing" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-black px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
               >
                  <span>➔ View Shed Waterproofing</span>
               </a>
               </div>
            </div>


            {/* CARD 2: Epoxy Coating Waterproofing */}
            <div className="rounded-2xl bg-white p-6 border-2 border-amber-200 shadow-lg shadow-amber-50 flex flex-col justify-between hover:border-amber-400 transition-all">
               <div className="space-y-5">
               
               <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-black bg-amber-100 text-amber-800 uppercase tracking-wider">
                     02 • SURFACE COATING
                  </span>
                  <span className="text-xl">🛡️</span>
               </div>

               {/* Image Container for Epoxy Coating */}
               <div className="w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-inner bg-slate-950">
                  <img 
                     src={right} 
                     alt="Epoxy Coating Waterproofing" 
                     className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
               </div>

               {/* Content Description */}
               <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-black text-slate-900">Epoxy Coating Waterproofing</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                     Protective waterproof coating for exposed roof and floor surfaces.
                  </p>
               </div>

               </div>

               {/* Action Button */}
               <div className="pt-6">
               <a 
                  href="#epoxy-coating" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-black px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
               >
                  <span>➔ View Epoxy Coating Service</span>
               </a>
               </div>
            </div>

         </div>

         </div>
      </section>
   )
}

export default OtherRoofWaterproofing