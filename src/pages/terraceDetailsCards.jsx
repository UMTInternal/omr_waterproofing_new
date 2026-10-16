import React from 'react'

const TerraceDetailsCards = () => {
  return (
    <section className="w-full py-12 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-wider text-rose-700 uppercase bg-rose-100 px-3 py-1 rounded-md border border-rose-200">
            COMPLETE WATERPROOFING GUIDE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Roof Protection <span className="text-rose-600">Services</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal">
            Complete details covering leakage diagnosis, application process, material benefits, warranty, and cost estimation.
          </p>
        </div>


        {/* ================= ROW 1: CARD 1 (RED) & CARD 2 (AMBER) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 1: RED - Common Causes */}
          <div className="rounded-2xl bg-white p-6 border-2 border-red-200 shadow-lg shadow-red-50 flex flex-col justify-between hover:border-red-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-red-100 text-red-700 uppercase tracking-wider">
                  01 • DIAGNOSIS
                </span>
                <span className="text-xl">⚠️</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Common Causes of <span className="text-red-600">Terrace Leakage</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Terrace leakage is not always caused by the roof surface itself. Identifying the actual source of water seepage is essential for a long-lasting solution.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3 rounded-xl bg-red-50/50 border border-red-200">
                  <h4 className="text-xs sm:text-sm font-extrabold text-red-800 mb-0.5">Cracked Parapet & External Walls</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    Rainwater enters through cracks in parapet and exterior walls, reaching roof slab joints. Coating the terrace alone will not solve this.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-red-50/50 border border-red-200">
                  <h4 className="text-xs sm:text-sm font-extrabold text-red-800 mb-0.5">Overhead Water Tank Leakage</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    Cracks in overhead tanks or faulty overflow pipes keep the roof slab constantly wet, leading to continuous dampness.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-red-50/50 border border-red-200">
                  <h4 className="text-xs sm:text-sm font-extrabold text-red-800 mb-0.5">Damaged Plaster & Surface Cracks</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    Old plaster and open joints allow rainwater to penetrate straight into the building structure.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* CARD 2: AMBER - Waterproofing Process */}
          <div className="rounded-2xl bg-white p-6 border-2 border-amber-200 shadow-lg shadow-amber-50 flex flex-col justify-between hover:border-amber-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-amber-100 text-amber-800 uppercase tracking-wider">
                  02 • PROCESS
                </span>
                <span className="text-xl">🛠️</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Our Terrace <span className="text-amber-600">Waterproofing Process</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every terrace has different requirements. At <strong className="text-slate-900">WaterSeal</strong>, we first identify the root cause and provide the most suitable method.
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-amber-900 font-bold text-xs">Our professional process includes:</p>
                <ul className="space-y-2">
                  {[
                    "Detailed site inspection to identify the actual source of leakage.",
                    "Repair of damaged areas and necessary structural patchwork.",
                    "Special treatment for cracks, joints, and vulnerable areas.",
                    "Application of 4 coats of non-cementitious PSV Waterproof Coating using high-pressure spray system."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-amber-50/50 border border-amber-200 text-[11px] sm:text-xs text-slate-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-[10px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>


        {/* ================= ROW 2: CARD 3 (SKY) & CARD 4 (EMERALD) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 3: SKY - Why Choose Us */}
          <div className="rounded-2xl bg-white p-6 border-2 border-sky-200 shadow-lg shadow-sky-50 flex flex-col justify-between hover:border-sky-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-sky-100 text-sky-800 uppercase tracking-wider">
                  03 • WHY WATERSEAL
                </span>
                <span className="text-xl">⭐</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Why Choose Us for <span className="text-sky-600">Terrace Waterproofing?</span>
              </h3>

              <div className="space-y-2.5 pt-1">
                {[
                  { title: "30+ Years of Industry Experience", desc: "Successfully completed thousands of residential and commercial projects across Delhi NCR." },
                  { title: "Long-Lasting Protection", desc: "Advanced PSV Waterproofing Technology designed to withstand heavy rain and intense sunlight." },
                  { title: "Customized Solutions", desc: "Carefully inspect your property and recommend the most effective treatment." },
                  { title: "Premium Quality Materials", desc: "High-performance non-cementitious waterproof coatings and crack sealants." },
                  { title: "Experienced Technical Team", desc: "Trained experts identifying root causes and right treatment." }
                ].map((point, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-sky-50/50 border border-sky-200">
                    <h4 className="text-xs sm:text-sm font-extrabold text-sky-900 mb-0.5 flex items-center gap-1.5">
                      <span className="text-sky-600 font-black">✓</span> {point.title}
                    </h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed pl-4">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* CARD 4: EMERALD - Written Warranty & Expert Advice */}
          <div className="rounded-2xl bg-white p-6 border-2 border-emerald-200 shadow-lg shadow-emerald-50 flex flex-col justify-between hover:border-emerald-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  04 • WARRANTY & ADVICE
                </span>
                <span className="text-xl">🛡️</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Written Waterproofing <span className="text-emerald-600">Warranty</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                WaterSeal offers an official written warranty on all Terrace Waterproofing Services across Delhi NCR.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-center">
                  <p className="text-xl font-black text-emerald-600">5-YEAR</p>
                  <p className="text-[10px] text-slate-600 mt-0.5 font-medium">Buildings up to 10 years old</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-center">
                  <p className="text-xl font-black text-emerald-600">3-YEAR</p>
                  <p className="text-[10px] text-slate-600 mt-0.5 font-medium">Buildings older than 10 years</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-extrabold text-emerald-900">Get Expert Advice for Terrace Waterproofing</h4>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Terrace leakage is more than a minor issue. If left untreated, it damages ceilings, walls, and structural integrity. Contact WaterSeal today.
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* ================= ROW 3: CARD 5 (ROSE) & CARD 6 (PURPLE) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 5: ROSE - Why is PSV Premix Best */}
          <div className="rounded-2xl bg-white p-6 border-2 border-rose-200 shadow-lg shadow-rose-50 flex flex-col justify-between hover:border-rose-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-rose-100 text-rose-700 uppercase tracking-wider">
                  05 • MATERIAL BENEFIT
                </span>
                <span className="text-xl">💡</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Why is PSV Premix the Best Choice for <span className="text-rose-600">Terrace Waterproofing?</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                WaterSeal PSV Premix is specially developed for Terrace Waterproofing and exposed roof surfaces subjected to rain, intense sunlight, and weather changes.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed p-3 rounded-xl bg-rose-50/50 border border-rose-200">
                <p>
                  Unlike traditional cement-based waterproof coatings, <strong className="text-slate-900">PSV Premix</strong> is a ready-to-use non-cementitious coating requiring no extra grey/white cement.
                </p>
                <p>
                  When applied using our 4-Coat system, <strong className="text-slate-900">100 kg covers 1,000–1,200 sq. ft.</strong> providing 8–10 years of durable protection.
                </p>
              </div>
            </div>
          </div>


          {/* CARD 6: PURPLE - How Waterproofing Works */}
          <div className="rounded-2xl bg-white p-6 border-2 border-purple-200 shadow-lg shadow-purple-50 flex flex-col justify-between hover:border-purple-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-purple-100 text-purple-800 uppercase tracking-wider">
                  06 • SYSTEM STEPS
                </span>
                <span className="text-xl">🔍</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                How Does Our <span className="text-purple-600">Waterproofing Work?</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our PSV Waterproofing System seals cracks, joints, and vulnerable roof areas to deliver long-lasting protection against water leakage.
              </p>

              <div className="space-y-1.5">
                {[
                  "Comprehensive terrace inspection & root cause identification.",
                  "Crack sealing using PSV Premix and PPC Mat reinforcement.",
                  "Application of 4 coats of PSV Protective Waterproof Coating.",
                  "Final quality check with 5-Year Written Warranty."
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 text-[9px] font-bold flex items-center justify-center flex-shrink-0">✓</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


        {/* ================= ROW 4: CARD 7 & CARD 8 (EXACT MATCH FROM NEW IMAGE) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 7: INDIGO - Terrace Waterproofing Cost Per Square Feet */}
          <div className="rounded-2xl bg-white p-6 border-2 border-indigo-200 shadow-lg shadow-indigo-50 flex flex-col justify-between hover:border-indigo-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-indigo-100 text-indigo-800 uppercase tracking-wider">
                  07 • COST PER SQ FT
                </span>
                <span className="text-xl">💰</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Terrace Waterproofing <span className="text-indigo-600">Cost Per Square Feet</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Looking for the terrace waterproofing cost in Delhi NCR? We provide a complete waterproofing solution starting at just:
              </p>

              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-200 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>🔹 On Smooth plaster OR China mosaic Surface</span>
                  <span className="text-indigo-700 font-black">₹50/- sq. ft</span>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-200 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>🔹 On Tiled Surface</span>
                  <span className="text-indigo-700 font-black">₹60/- sq. ft</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>⚡ Minimum charge (For areas below 300 sq. ft)</span>
                  <span className="text-amber-700 font-black">₹15,000</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                This price includes all materials, chemicals, and full labour, backed by a 3 to 5-year written guarantee.
              </p>

              <div className="border-t border-slate-100 pt-2 space-y-2">
                <p className="text-xs font-extrabold text-indigo-900">Please note: The base rate covers a standard application. Additional charges may apply for essential surface preparation work, such as:</p>
                <ul className="space-y-1.5 text-[11px] text-slate-600">
                  <li className="flex items-start gap-1.5"><span>•</span> Complete removal of cement crust or old waterproofing coating on the terrace.</li>
                  <li className="flex items-start gap-1.5"><span>•</span> Minor or major plaster repair.</li>
                  <li className="flex items-start gap-1.5"><span>•</span> Making new watas in the corners of the boundary wall.</li>
                </ul>
              </div>

              <p className="text-[11px] text-slate-500 font-medium italic pt-1 border-t border-slate-100">
                We serve all areas of Delhi NCR. For large projects above 10,000 square feet, we offer our services across India with an additional 20% transportation charge applied to the listed rates.
              </p>
            </div>
          </div>


          {/* CARD 8: TEAL - Calculator & Measurements Banner Box */}
          <div className="rounded-2xl bg-white p-6 border-2 border-teal-200 shadow-lg shadow-teal-50 flex flex-col justify-between hover:border-teal-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-black bg-teal-100 text-teal-800 uppercase tracking-wider">
                  08 • COST CALCULATOR
                </span>
                <span className="text-xl">🧮</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Instant Online <span className="text-teal-600">Cost Calculator</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For your convenience, you can easily estimate your project cost. Simply measure your terrace and enter the dimensions into our online calculator. You will receive a professional and detailed estimate instantly. <a href="#calculator" className="text-teal-700 font-bold underline">Click here: Terrace Waterproofing Cost Calculator.</a>
              </p>

              {/* Exact Calculator Visual Box matching the Image */}
              <div className="w-full bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 rounded-2xl p-5 flex flex-col items-center justify-center text-center text-white border border-teal-500/30 shadow-inner relative overflow-hidden group space-y-3">
                <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-all"></div>
                
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest bg-teal-800 text-teal-200 px-2 py-0.5 rounded font-bold">Interactive Tool</span>
                  <h4 className="text-base sm:text-lg font-black tracking-wide text-white">TERRACE WATERPROOFING</h4>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">MEASUREMENTS & COST CALCULATOR</p>
                </div>

                <div className="relative z-10 flex items-center gap-3 py-1">
                  <div className="text-2xl">📐</div>
                  <div className="text-2xl">🧮</div>
                  <div className="text-2xl">💧</div>
                </div>

                <a 
                  href="#calculator" 
                  className="relative z-10 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>➔ VIEW CALCULATOR</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TerraceDetailsCards