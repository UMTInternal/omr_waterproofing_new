import React from 'react'
import { Link } from 'react-router-dom'

const OptionsSection = () => {
  const options = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Professional Services",
      description: "Expert inspection, application and a written warranty.",
      link: "/services",
      // LAAL (RED) DARK CARD
      cardBg: "from-[#2A080C] via-[#1A0508] to-[#120305]",
      cardBorder: "border-rose-500/30 hover:border-rose-500/80",
      topGlow: "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600",
      iconBg: "bg-rose-600 text-white shadow-rose-600/50",
      btnBg: "bg-rose-600 text-white shadow-rose-600/40",
      btnText: "text-rose-500",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "DIY Waterproofing Guides",
      description: "Step-by-step guides to complete the job yourself.",
      link: "/diy-guide",
      // PILA (AMBER) DARK CARD
      cardBg: "from-[#2B1B04] via-[#1C1102] to-[#120B01]",
      cardBorder: "border-amber-500/30 hover:border-amber-500/80",
      topGlow: "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600",
      iconBg: "bg-amber-500 text-slate-950 shadow-amber-500/50",
      btnBg: "bg-amber-500 text-slate-950 shadow-amber-500/40",
      btnText: "text-amber-500",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Waterproofing Tips",
      description: "Practical tips to prevent leaks before they start.",
      link: "/tips",
      // HARA (GREEN) DARK CARD
      cardBg: "from-[#042416] via-[#02170E] to-[#010E09]",
      cardBorder: "border-emerald-500/30 hover:border-emerald-500/80",
      topGlow: "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600",
      iconBg: "bg-emerald-500 text-slate-950 shadow-emerald-500/50",
      btnBg: "bg-emerald-500 text-slate-950 shadow-emerald-500/40",
      btnText: "text-emerald-500",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cost Calculators",
      description: "Estimate your waterproofing cost in minutes.",
      link: "/calculator",
      // NILA (BLUE) DARK CARD
      cardBg: "from-[#071A36] via-[#041024] to-[#020A17]",
      cardBorder: "border-blue-500/30 hover:border-blue-500/80",
      topGlow: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600",
      iconBg: "bg-blue-500 text-white shadow-blue-500/50",
      btnBg: "bg-blue-500 text-white shadow-blue-500/40",
      btnText: "text-blue-500",
    }
  ]

  return (
    /* OUTER BG: Pure Sky Blue Blend */
    <section className="py-20 bg-gradient-to-b from-sky-200 via-sky-100 to-cyan-200 font-sans relative overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        
        {/* Top Tag */}
        <span className="inline-block bg-[#088395] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-sky-300 shadow-md">
          EXPLORE OPTIONS
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          Do It Yourself, or Let Us Handle It
        </h2>

        {/* Accent Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mx-auto my-4 shadow-sm"></div>

        {/* Subtitle */}
        <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto mb-14 font-semibold">
          Whether you prefer professional help or a hands-on DIY approach, we have the right path for you.
        </p>

        {/* IMAGE MATCHING DARK GLOW CARDS ON SKY BLUE BG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {options.map((item, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-b ${item.cardBg} p-6 sm:p-7 rounded-[28px] border ${item.cardBorder} shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Glowing Top Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.topGlow}`}></div>

              <div>
                {/* Rounded Icon Box with Glow */}
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-black text-white mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed mb-8 font-normal">
                  {item.description}
                </p>
              </div>

              {/* READ MORE & Round Arrow Button */}
              <div className="flex items-center justify-between pt-2">
                <Link 
                  to={item.link} 
                  className={`text-xs font-black uppercase tracking-wider ${item.btnText} hover:underline`}
                >
                  READ MORE
                </Link>

                <Link 
                  to={item.link}
                  className={`w-8 h-8 rounded-full ${item.btnBg} flex items-center justify-center font-bold text-sm shadow-md group-hover:translate-x-1 transition-transform duration-200`}
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OptionsSection