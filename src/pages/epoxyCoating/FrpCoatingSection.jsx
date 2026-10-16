import React from 'react'

const FrpCoatingSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-6 sm:px-12 lg:px-20 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP 3 CARDS WITH IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Epoxy Coating */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
                <img 
                  src="https://picsum.photos/500/350?random=301" 
                  alt="Epoxy Coating" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-xl font-black text-slate-950">
                Epoxy Coating:
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Epoxy resin is a type of adhesive that dries hard, shiny, and smooth, similar to acrylic. The consistency of epoxy is similar to honey; it applies to a surface other than a floor. Sometimes, it needs to work its magic.
              </p>
            </div>
          </div>

          {/* Card 2: Epoxy Tile Joint Silent Kit */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
                <img 
                  src="https://picsum.photos/500/350?random=302" 
                  alt="Epoxy Tile Joint" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-xl font-black text-slate-950">
                Epoxy Tile Joint Silent Kit:
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If the tile joints of the bathroom or gallery are open, then by mixing epoxy + hardener in the ratio of 2:1 and filling the joints, this leakage can be easily stopped. 
                <a href="#more" className="text-emerald-600 font-extrabold hover:underline ml-1">For more Information, click here</a>
              </p>
            </div>
          </div>

          {/* Card 3: Anti-Corrosion Coating */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
                <img 
                  src="https://picsum.photos/500/350?random=303" 
                  alt="Anti-Corrosion Coating" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-xl font-black text-slate-950">
                Anti-Corrosion Coating:
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Corrosion is a natural process. When metallic materials come into contact with air and/or water, for example, iron begins to rust when oxygen reacts with water at its surface. Therefore, metal equipment...
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: What is FRP Coating */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-8">
          
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wider uppercase">
              Advanced Polymer Tech
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What is FRP Coating?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">FRP Coating (Fiber-Reinforced Plastic Coating)</strong> is a high-strength, corrosion-resistant protective layer applied over various surfaces such as <strong className="text-slate-900 font-bold">cement sheets, metal sheets, tanks, pipelines, and chemical plant equipment</strong>. It is designed to enhance the durability and lifespan of structural laminates by shielding them from moisture, chemicals, weathering, and mechanical wear.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900">
              Why FRP Coating Is Needed
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              FRP coating is widely used in industries where <strong className="text-slate-900 font-bold">composite materials</strong> are exposed to harsh environments. This specialized coating system provides:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                <span className="text-slate-700 text-sm sm:text-base"><strong className="text-slate-900 font-bold">Excellent resistance to chemicals</strong>, acids, and solvents</span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                <span className="text-slate-700 text-sm sm:text-base"><strong className="text-slate-900 font-bold">Superior mechanical strength</strong></span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                <span className="text-slate-700 text-sm sm:text-base"><strong className="text-slate-900 font-bold">Anti-Corrosion Coating</strong>, UV rays, and water</span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                <span className="text-slate-700 text-sm sm:text-base"><strong className="text-slate-900 font-bold">Long-term protection</strong> with minimal maintenance</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            It is essential in the <strong className="text-slate-900 font-bold">manufacture and maintenance</strong> of industrial components like fibre sheets, pipes, and tanks, especially in sectors like construction, pharmaceuticals, chemicals, and water treatment.
          </div>

        </div>

      </div>
    </section>
  )
}

export default FrpCoatingSection