import React from 'react'

const DiyGuide = () => {
  const diyTopics = [
    {
      step: "01",
      title: "Fix Cracks",
      desc: "Clean surface cracks thoroughly, widen them slightly into a V-shape, apply primer, and fill them tightly using high-grade acrylic sealant or epoxy crack filler to stop water ingress.",
      bg: "bg-amber-50/90 border-amber-200 hover:border-amber-400",
      badge: "bg-amber-200 text-amber-900 border-amber-300"
    },
    {
      step: "02",
      title: "DIY Terrace WP",
      desc: "Clean the terrace roof of all dust and debris, apply a waterproof primer coat, and roll on 2-3 thick coats of fiber-reinforced liquid waterproofing membrane for sun and rain protection.",
      bg: "bg-sky-50/90 border-sky-200 hover:border-sky-400",
      badge: "bg-sky-200 text-sky-900 border-sky-300"
    },
    {
      step: "03",
      title: "Fix Tiles Joints",
      desc: "Scrape out old, damaged, or crumbling grout from tile joints, clean the gaps completely, and fill them with anti-fungal epoxy grout or waterproof tile joint sealant to prevent floor seepage.",
      bg: "bg-teal-50/90 border-teal-200 hover:border-teal-400",
      badge: "bg-teal-200 text-teal-900 border-teal-300"
    },
    {
      step: "04",
      title: "Groundwater Issues?",
      desc: "If groundwater is rising through your floors or walls, surface DIY methods won't work. This requires professional negative-side pressure injection and heavy-duty sump pump solutions.",
      bg: "bg-indigo-50/90 border-indigo-200 hover:border-indigo-400",
      badge: "bg-indigo-200 text-indigo-900 border-indigo-300"
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-amber-50 via-sky-50/60 to-indigo-50/70 px-6 sm:px-12 lg:px-20 text-slate-900 font-sans relative overflow-hidden">

      {/* Background ambient soft glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-300/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-sky-200/80 pb-10">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-600 text-white text-xs font-black tracking-widest uppercase shadow-sm">
              🛠️ Do It Yourself (DIY) Waterproofing Guide
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Smart DIY Solutions & Quick Fixes
            </h2>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Step-by-step practical guides to fix minor cracks, terrace seepage, and tile joint leaks yourself before they turn into major structural problems.
            </p>
          </div>

          {/* Call Now Action Box */}
          <div className="bg-slate-950 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 shrink-0 border-2 border-sky-500/40 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-slate-950 flex items-center justify-center text-2xl font-black shadow-lg">
              📞
            </div>
            <div>
              <span className="block text-xs font-black uppercase tracking-wider text-sky-400">Need Expert Help?</span>
              <a href="tel:+919825585997" className="text-xl sm:text-2xl font-black text-white hover:underline">
                +91 97170 45819
              </a>
            </div>
          </div>
        </div>

        {/* 4 DIY Topic Cards Grid with Light Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diyTopics.map((item, index) => (
            <div
              key={index}
              className={`group relative ${item.bg} backdrop-blur-xl p-8 rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top hover accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 via-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black tracking-widest uppercase px-3 py-1 rounded-lg border ${item.badge}`}>
                    DIY Step {item.step}
                  </span>
                  <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center font-black text-sm shadow-sm">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 tracking-tight group-hover:text-sky-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Waterseal Guide</span>
                <span className="text-xs font-black text-sky-800 uppercase tracking-widest bg-white px-3 py-1 rounded-xl shadow-sm border border-slate-200">
                  Easy Fix
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DiyGuide