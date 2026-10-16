import React from 'react'
import { Link } from 'react-router-dom'

const ServicesDirectorySection = () => {
  const serviceCategories = [
    {
      title: "Roof Waterproofing",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      subServices: [
        { name: "Terrace Waterproofing", link: "/services/terrace" },
        { name: "Industrial Shed Waterproofing", link: "/services/industrial-shed" }
      ],
      cardBg: "from-[#2A080C] via-[#1A0508] to-[#120305]",
      cardBorder: "border-rose-500/30 hover:border-rose-500/80",
      topGlow: "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600",
      iconBg: "bg-rose-600 shadow-rose-600/50",
      linkHover: "hover:text-rose-400"
    },
    {
      title: "Bathroom Leakage",
      icon: (
        <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      subServices: [
        { name: "Bathroom Repair Methods", link: "/services/bathroom-repair" },
        { name: "Bathroom Renovation", link: "/services/bathroom-renovation" },
        { name: "New Bathroom Waterproofing", link: "/services/new-bathroom" }
      ],
      cardBg: "from-[#2B1B04] via-[#1C1102] to-[#120B01]",
      cardBorder: "border-amber-500/30 hover:border-amber-500/80",
      topGlow: "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600",
      iconBg: "bg-amber-500 shadow-amber-500/50",
      linkHover: "hover:text-amber-400"
    },
    {
      title: "Wall Treatment",
      icon: (
        <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      subServices: [
        { name: "Interior Waterproofing", link: "/services/interior-waterproofing" },
        { name: "Exterior Waterproofing", link: "/services/exterior-waterproofing" },
        { name: "Retaining Wall Waterproofing", link: "/services/retaining-wall" }
      ],
      cardBg: "from-[#042416] via-[#02170E] to-[#010E09]",
      cardBorder: "border-emerald-500/30 hover:border-emerald-500/80",
      topGlow: "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600",
      iconBg: "bg-emerald-500 shadow-emerald-500/50",
      linkHover: "hover:text-emerald-400"
    },
    {
      title: "Water Tank Waterproofing",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subServices: [
        { name: "Underground Tank", link: "/services/underground-tank" },
        { name: "Overhead Tank", link: "/services/overhead-tank" },
        { name: "Swimming Pool Waterproofing", link: "/services/swimming-pool" }
      ],
      cardBg: "from-[#071A36] via-[#041024] to-[#020A17]",
      cardBorder: "border-blue-500/30 hover:border-blue-500/80",
      topGlow: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600",
      iconBg: "bg-blue-500 shadow-blue-500/50",
      linkHover: "hover:text-blue-400"
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
          SERVICES DIRECTORY
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          Explore Our Complete<br />Range of Services
        </h2>

        {/* Accent Line */}
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mx-auto my-4 shadow-sm"></div>

        {/* Subtitle */}
        <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto mb-14 font-semibold">
          Organised by category, so you can find exactly the right treatment for your property.
        </p>

        {/* DARK GLOW CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-b ${category.cardBg} p-6 sm:p-7 rounded-[28px] border ${category.cardBorder} shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Glowing Top Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${category.topGlow}`}></div>

              <div>
                {/* Icon & Title Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                  <div className={`w-12 h-12 rounded-2xl ${category.iconBg} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-black text-white leading-snug tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Sub-Services List */}
                <ul className="space-y-3 mb-6">
                  {category.subServices.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link 
                        to={sub.link}
                        className={`text-slate-300/80 text-xs sm:text-sm font-semibold transition-colors duration-200 block py-0.5 ${category.linkHover}`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesDirectorySection