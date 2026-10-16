import React from 'react'

const IndustrialShedDetails = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Intro Section */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight leading-tight">
            Industrial Shed Waterproofing Services in Delhi NCR
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-5xl">
            We offer expert <strong className="text-slate-900 font-bold">Industrial Shed Waterproofing</strong> services tailored for residential, commercial, and industrial structures. Since every shed faces unique challenges, we provide customized treatments, including precision crack sealing, professional patchwork, specialized welding, FRP lining work, and high-performance coatings.
          </p>
        </div>

        {/* Main Grid Card Section (Left Images Grid, Right Problems List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image Grid Poster */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 rounded-3xl shadow-lg flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Image 1: Corrugated roof cracks */}
              <div className="relative group overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=500&q=80" 
                  alt="Damaged Corrugated Sheet" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* Image 2: Rust / Corrosion */}
              <div className="relative group overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" 
                  alt="Rust and Seepage" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* Image 3: Sheet gap */}
              <div className="relative group overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" 
                  alt="Roof Gaps" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              {/* Image 4: External / Monkeys factor */}
              <div className="relative group overflow-hidden rounded-2xl shadow-md bg-white border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" 
                  alt="External Factor Roof" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 font-medium italic text-center pt-2 border-t border-slate-200">
              Understanding the core causes of industrial shed damage: How thermal expansion, heavy rains, external factors, and material aging create leaks.
            </p>
          </div>

          {/* Right Column: Problems We Solve */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-green-700 tracking-tight mb-3">
                Common Industrial Shed Leakage Problems We Solve
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-normal mb-6">
                Shed leakages in Delhi NCR typically arise from various factors, such as:
              </p>

              <ul className="space-y-4 text-slate-700 text-sm sm:text-base font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Thermal Expansion:</strong> Constant weather changes causing structural shifts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Rainwater Accumulation:</strong> Heavy pressure from stagnant water.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">External Damage:</strong> Physical impact from monkeys or debris.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Material Aging:</strong> Corrosion and holes in the sheeting due to long-term wear and tear.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Our process begins with a thorough inspection to identify the exact entry point of water, ensuring a long-lasting and effective <strong className="text-slate-950 font-extrabold">Industrial Shed Waterproofing</strong> solution.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default IndustrialShedDetails