import React from 'react'
import { Link } from 'react-router-dom'

const SolutionsProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Inspection",
      desc: "We inspect the site to find the real source of water entry.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      // 🔴 RED THEME
      cardTheme: {
        bg: "bg-gradient-to-br from-red-900 via-rose-950 to-stone-900",
        border: "border border-red-500/80",
        numBox: "bg-red-500 text-white shadow-md shadow-red-500/30",
        iconColor: "text-red-400",
        titleColor: "text-white",
        descColor: "text-rose-100/80"
      }
    },
    {
      num: "02",
      title: "Diagnosis",
      desc: "We recommend the correct treatment based on your surface condition.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      // 🟡 AMBER/YELLOW THEME
      cardTheme: {
        bg: "bg-gradient-to-br from-amber-900 via-yellow-950 to-stone-900",
        border: "border border-amber-500/80",
        numBox: "bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-500/30",
        iconColor: "text-amber-400",
        titleColor: "text-white",
        descColor: "text-amber-100/80"
      }
    },
    {
      num: "03",
      title: "Treatment",
      desc: "We execute the recommended waterproofing system cleanly and safely.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      // 🟢 GREEN THEME
      cardTheme: {
        bg: "bg-gradient-to-br from-emerald-900 via-green-950 to-zinc-900",
        border: "border border-emerald-500/80",
        numBox: "bg-emerald-500 text-white shadow-md shadow-emerald-500/30",
        iconColor: "text-emerald-400",
        titleColor: "text-white",
        descColor: "text-emerald-100/80"
      }
    },
    {
      num: "04",
      title: "Warranty",
      desc: "We hand over the job with a written warranty for your peace of mind.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      // 🔵 BLUE THEME
      cardTheme: {
        bg: "bg-gradient-to-br from-blue-900 via-sky-950 to-slate-900",
        border: "border border-blue-500/80",
        numBox: "bg-blue-500 text-white shadow-md shadow-blue-500/30",
        iconColor: "text-sky-400",
        titleColor: "text-white",
        descColor: "text-sky-100/80"
      }
    }
  ]

  return (
    // Section with Sky-Blue Background
    <section className="relative py-20 sm:py-28 bg-sky-100/70 font-sans overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-300/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pill Tag */}
            <span className="inline-flex items-center gap-2 bg-[#088395] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              WATERPROOFING SOLUTION
            </span>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
              Find the Right <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#088395] via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Leakage Solutions
              </span> <br className="hidden sm:block" />
              for Your Property
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              <p>
                Our waterproofing experts carefully assess your property to identify the root cause of leakage and recommend the most suitable waterproofing solution based on the condition of the surface.
              </p>
              <p>
                We provide clear information about the recommended treatment, how the work will be carried out, the estimated timeline and the expected cost — helping you make an informed decision with confidence.
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="relative bg-white border border-amber-300 border-l-4 border-l-amber-500 p-6 rounded-r-2xl mb-10 flex items-start gap-4 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                Our goal is to deliver high-quality workmanship, fair pricing and long-lasting results that protect your property for years to come.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/inspection"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#088395] to-teal-600 hover:from-teal-600 hover:to-[#088395] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-teal-900/20 hover:shadow-teal-500/30 hover:scale-[1.02]"
              >
                <span>Book Free Inspection</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </Link>
            </div>

          </div>


          {/* RIGHT COLUMN: Stepper Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-xl relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                  How We Solve Your Leakage
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  From root-cause diagnosis to a warrantied finish.
                </p>
              </div>

              {/* Vertical Stepper */}
              <div className="relative space-y-5 before:absolute before:inset-0 before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-[#088395]/30">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-center gap-4 group">
                    
                    {/* Circle Number Badge */}
                    <div className={`w-10 h-10 rounded-full ${step.cardTheme.numBox} font-black text-xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10`}>
                      {step.num}
                    </div>

                    {/* Rich Dark Styled Card for Steps */}
                    <div className={`flex-1 p-4 rounded-2xl ${step.cardTheme.bg} ${step.cardTheme.border} transition-all duration-300 shadow-md group-hover:-translate-y-0.5`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={step.cardTheme.iconColor}>
                          {step.icon}
                        </span>
                        <h4 className={`font-black text-base ${step.cardTheme.titleColor}`}>
                          {step.title}
                        </h4>
                      </div>
                      <p className={`text-xs leading-relaxed font-normal ${step.cardTheme.descColor}`}>
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

              {/* Bottom Card Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#088395] hover:bg-teal-700 text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl transition-all duration-300 shadow-md"
                >
                  <span>Explore All Services</span>
                  <span>→</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SolutionsProcessSection