import React from 'react'

const PremixSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Easy Application",
      description: "Apply with a brush or roller directly on the prepared surface — no special equipment needed.",
      // Sky Blue Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-sky-500 text-slate-950",
      topBar: "bg-sky-400",
      cardBorder: "border-sky-500/30 hover:border-sky-400",
      numColor: "text-sky-500/20",
      shadowGlow: "hover:shadow-sky-500/25",
      titleColor: "text-sky-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Flexible Protection",
      description: "The elastic layer stretches and bridges cracks caused by heat and structural movement.",
      // Emerald Green Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-emerald-400 text-slate-950",
      topBar: "bg-emerald-400",
      cardBorder: "border-emerald-500/30 hover:border-emerald-400",
      numColor: "text-emerald-500/20",
      shadowGlow: "hover:shadow-emerald-500/25",
      titleColor: "text-emerald-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Long-Lasting Durability",
      description: "Built to last for years, resisting rain, heat, UV and weathering under normal conditions.",
      // Indigo Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-indigo-400 text-slate-950",
      topBar: "bg-indigo-400",
      cardBorder: "border-indigo-500/30 hover:border-indigo-400",
      numColor: "text-indigo-500/20",
      shadowGlow: "hover:shadow-indigo-500/25",
      titleColor: "text-indigo-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Excellent Coverage",
      description: "High coverage — 100 kg covers about 1,000–1,200 sq. ft. with a 4-coat system.",
      // Amber/Gold Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-amber-400 text-slate-950",
      topBar: "bg-amber-400",
      cardBorder: "border-amber-500/30 hover:border-amber-400",
      numColor: "text-amber-500/20",
      shadowGlow: "hover:shadow-amber-500/25",
      titleColor: "text-amber-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 001-9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Weather Resistant",
      description: "Handles monsoon rain, scorching sun and temperature swings without losing performance.",
      // Purple Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-purple-400 text-slate-950",
      topBar: "bg-purple-400",
      cardBorder: "border-purple-500/30 hover:border-purple-400",
      numColor: "text-purple-500/20",
      shadowGlow: "hover:shadow-purple-500/25",
      titleColor: "text-purple-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Trusted Quality",
      description: "Backed by decades of applied expertise and backed by written project warranties.",
      // Cyan Theme
      cardBg: "bg-slate-900/95",
      iconBg: "bg-cyan-400 text-slate-950",
      topBar: "bg-cyan-400",
      cardBorder: "border-cyan-500/30 hover:border-cyan-400",
      numColor: "text-cyan-500/20",
      shadowGlow: "hover:shadow-cyan-500/25",
      titleColor: "text-cyan-400"
    }
  ]

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-sky-100 via-sky-50 to-cyan-100 font-sans relative overflow-hidden">
      
      {/* Background Decorative Light Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {/* Pill Badge */}
        <span className="inline-flex items-center gap-2 bg-[#088395] text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6 border border-sky-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          WHY PSV PREMIX
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Built for Simpler, <br />
          <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Smarter Waterproofing
          </span>
        </h2>

        {/* Accent Line */}
        <div className="w-16 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mx-auto my-6 shadow-md shadow-sky-500/20"></div>

        {/* Sub-description */}
        <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto mb-16 font-semibold leading-relaxed">
          A flexible, durable coating engineered to make application easy — and protection long lasting.
        </p>

        {/* Dark Cards on Light Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`group relative ${item.cardBg} backdrop-blur-xl p-8 rounded-3xl border ${item.cardBorder} shadow-xl hover:shadow-2xl ${item.shadowGlow} transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between`}
            >
              {/* Colored Top Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.topBar}`}></div>

              <div>
                {/* Colored Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} font-black shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className={`text-xl font-black mb-3 ${item.titleColor}`}>
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Watermark Numbering */}
              <div className={`absolute bottom-3 right-6 text-5xl font-black ${item.numColor} pointer-events-none select-none`}>
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PremixSection