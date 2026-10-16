import React from 'react'

const EpoxyCoatingDetails = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-6 sm:px-12 lg:px-20 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* TOP SECTION: Left Image Grid & Right Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Modern Image Gallery Grid */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Gallery Showcase
              </span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
                Epoxy Coatings
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-32 border border-slate-200/80 group">
                <img src="https://picsum.photos/400/300?random=201" alt="Epoxy Material" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-32 border border-slate-200/80 group">
                <img src="https://picsum.photos/400/300?random=202" alt="Pipelines Coating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-32 border border-slate-200/80 group">
                <img src="https://picsum.photos/400/300?random=203" alt="Warehouse Floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-32 border border-slate-200/80 group">
                <img src="https://picsum.photos/400/300?random=204" alt="Industrial Finish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-36 border border-slate-200/80 group">
              <img src="https://picsum.photos/600/300?random=205" alt="Complete Floor Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold tracking-wider uppercase shadow-sm">
                Advanced Protection
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Epoxy Coating
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Waterseal Epoxy Coating is a high-quality, fast-drying solution used to protect industrial and commercial surfaces from <strong className="text-slate-900 font-bold">water, stains, and corrosion</strong>. It is widely applied on factory floors, warehouses, tanks, and metal surfaces where long-lasting durability and chemical resistance are critical.
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-md shadow-slate-100 border border-slate-200/60 space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                What Is Epoxy Coating?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Epoxy coating is a <strong className="text-slate-900 font-bold">two-component resin system</strong> that cures to form a hard, protective layer. It bonds tightly to surfaces like concrete, metal, or tile, creating a <strong className="text-slate-900 font-bold">moisture-resistant, stain-proof, and glossy finish</strong>. This makes it ideal for flooring systems, especially in environments exposed to oil, food, acids, and alkalis.
              </p>
            </div>

            <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-3xl border border-emerald-100/80 space-y-2">
              <h3 className="text-xl font-extrabold text-emerald-950">
                Why Choose Waterseal?
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Waterseal's epoxy coating is specially formulated for <strong className="text-slate-900 font-bold">industrial durability and corrosion protection</strong>. It offers:
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Applications & Key Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          
          {/* Applications Card */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-950 tracking-tight border-b pb-4 border-slate-200">
              Applications:
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 font-semibold">
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Factory and warehouse floors</li>
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Decorative terrace, wall, and floors</li>
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Industrial kitchens & food processing areas</li>
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Chemical plants and workshops</li>
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Tanks, metal structures, and pipelines</li>
              <li className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs"><span className="text-emerald-600 font-black text-lg">→</span> Basements and garages</li>
            </ul>

            <p className="text-xs sm:text-sm text-slate-600 pt-4 border-t border-slate-200 leading-relaxed font-medium">
              Waterseal's <strong className="text-slate-900 font-bold">epoxy coating</strong> ensures both performance and aesthetics. Whether you're sealing a concrete floor or protecting a metal tank, our coating offers <strong className="text-slate-900 font-bold">long-lasting, high-performance waterproofing</strong>.
            </p>
          </div>

          {/* Benefits & Action Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-4">
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span><strong className="text-slate-900 font-bold">Fast curing</strong> for quicker project completion</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span><strong className="text-slate-900 font-bold">Excellent stain and chemical resistance</strong></span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span><strong className="text-slate-900 font-bold">Strong adhesion</strong> to metal, concrete, and tile</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span><strong className="text-slate-900 font-bold">Long-term protection</strong> against pitting, galvanic, and crevice corrosion</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span>Safe for <strong className="text-slate-900 font-bold">food-contact surfaces</strong></span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span>Resistance to <strong className="text-slate-900 font-bold">diesel, mineral oil, dilute acids, alkalis, and sewage</strong></span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs">
                  <span className="text-emerald-600 font-black text-base mt-0.5">▪</span>
                  <span>Decorative finish that enhances the floor's appearance</span>
                </li>
              </ul>
            </div>

            {/* Bottom Callout Card */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 rounded-3xl shadow-xl text-white space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-black text-yellow-400 tracking-tight">
                  Looking for all types of waterproofing?
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">
                  Explore our complete Waterproofing Services Guide for every type of waterproofing solution.
                </p>
              </div>
              <a 
                href="#services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
              >
                <span>View Services →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default EpoxyCoatingDetails