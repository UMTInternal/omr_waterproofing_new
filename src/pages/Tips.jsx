 import React from 'react'

const Tips = () => {
  const tipsData = [
    {
      tag: "Assessment",
      title: "Is Home Waterproof?",
      desc: "Look for warning signs like damp patches on walls, peeling paint, bubbling plaster, or a musty odor. Catching seepage early prevents expensive structural damage and protects indoor air quality.",
      bg: "bg-emerald-50/90 border-emerald-300 hover:border-emerald-500",
      badge: "bg-emerald-200 text-emerald-900"
    },
    {
      tag: "New Build",
      title: "New Construction WP",
      desc: "The best time to waterproof is during construction. Apply advanced polymer membranes and heavy-duty coatings on sub-floors, basements, and bathrooms before tile or marble installation for lifelong security.",
      bg: "bg-teal-50/90 border-teal-300 hover:border-teal-500",
      badge: "bg-teal-200 text-teal-900"
    },
    {
      tag: "Evolution",
      title: "WP History & Tech",
      desc: "Waterproofing has evolved from primitive bitumen layers to modern crystallization, acrylic polymers, and PSv nano-chemicals that chemically bond with concrete to block water molecules forever.",
      bg: "bg-green-50/90 border-green-300 hover:border-green-500",
      badge: "bg-green-200 text-green-900"
    },
    {
      tag: "Strategy",
      title: "DIY vs Contractors",
      desc: "Surface-level crack filling can be a DIY task, but structural leakage, underground basements, retaining walls, and water tanks require certified contractor expertise and industrial injection machinery.",
      bg: "bg-lime-50/90 border-lime-300 hover:border-lime-500",
      badge: "bg-lime-200 text-lime-900"
    },
    {
      tag: "Protection",
      title: "Importance of WP",
      desc: "Quality waterproofing protects internal steel reinforcement bars from rusting, stops toxic black mold growth, and preserves the structural integrity and market resale value of your property.",
      bg: "bg-emerald-100/60 border-emerald-400 hover:border-emerald-600",
      badge: "bg-emerald-300 text-emerald-950"
    },
    {
      tag: "Restoration",
      title: "Old Building WP",
      desc: "Older structures require specialized negative-side waterproofing, high-pressure pressure grouting, and epoxy crack injections to reverse years of accumulated weather damage and seepage.",
      bg: "bg-teal-100/60 border-teal-400 hover:border-teal-600",
      badge: "bg-teal-300 text-teal-950"
    },
    {
      tag: "Economy",
      title: "Affordable Solutions",
      desc: "Smart preventive waterproofing costs significantly less than carrying out major structural building repairs, wall plaster rebuilding, and interior painting rework down the line.",
      bg: "bg-green-100/60 border-green-400 hover:border-green-600",
      badge: "bg-green-300 text-green-950"
    },
    {
      tag: "Environment",
      title: "Building Conditions",
      desc: "Analyze local ground water table levels, heavy monsoon intensity, and exterior wall exposure angles before selecting the right grade and thickness of waterproofing chemicals.",
      bg: "bg-emerald-50/70 border-emerald-300 hover:border-emerald-500",
      badge: "bg-emerald-200 text-emerald-900"
    },
    {
      tag: "Materials",
      title: "Types of WP Chemicals",
      desc: "Choose the right material based on application zones—such as liquid polyurethane (PU) for roofs, crystalline treatments for basements, and non-toxic acrylics for water storage tanks.",
      bg: "bg-teal-50/70 border-teal-300 hover:border-teal-500",
      badge: "bg-teal-200 text-teal-900"
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-green-100/60 px-6 sm:px-12 lg:px-20 text-slate-900 font-sans relative overflow-hidden">
      
      {/* Background ambient soft glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-emerald-200/80 pb-10">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-black tracking-widest uppercase shadow-sm">
              ⚡ Expert Knowledge & Pro Tips Hub
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Waterproofing Masterclass & Insights
            </h2>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Detailed professional insights on every aspect of waterproofing, chemical selection, and structural preservation in Delhi NCR.
            </p>
          </div>

          {/* Call Now Action Box matching image */}
          <div className="bg-slate-950 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 shrink-0 border-2 border-emerald-500/40 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center text-2xl font-black shadow-lg">
              📞
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-wider text-emerald-400">Call Us Now!</span>
              <a href="tel:+919825585997" className="text-xl sm:text-2xl font-black text-white hover:underline">
                  +91 98250 12345
              </a>
            </div>
          </div>
        </div>

        {/* 9 Grid Cards with Green Gradient Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tipsData.map((tip, index) => (
            <div 
              key={index}
              className={`group relative ${tip.bg} backdrop-blur-xl p-8 rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="space-y-4">
                <span className={`text-xs font-black tracking-widest uppercase px-3 py-1 rounded-lg border inline-block ${tip.badge}`}>
                  {tip.tag}
                </span>
                <h3 className="text-xl font-black text-slate-950 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {tip.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-300/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Waterseal Guide</span>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-xl shadow-sm">
                  Verified Tip
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Tips