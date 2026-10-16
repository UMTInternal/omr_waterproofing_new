import React from 'react'
import { Link } from 'react-router-dom'

const bathWaterProof = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80'

const ChemicalProductSection = () => {
  const features = [
    {
      title: "Flexible layer that resists cracks from temperature change",
    },
    {
      title: "No excessive cement mixing needed — keeps flexibility high",
    },
    {
      title: "100 kg covers approximately 1,000–1,200 sq. ft. (4-coat system)",
    },
    {
      title: "Easy roller application for skilled applicators or DIY users",
    },
    {
      title: "Excellent adhesion on concrete, screed and terrace finishes",
    },
    {
      title: "Available and delivered across India",
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-sky-100 via-sky-50 to-cyan-100 font-sans overflow-hidden">
      
      {/* Dynamic Background Sky-Blue Light Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-300/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-sky-200/80 shadow-2xl shadow-sky-900/10">
          
          {/* LEFT COLUMN: Image Container with Overlapping Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-sky-200 shadow-xl bg-slate-900 group">
              <img 
                src={bathWaterProof} 
                alt="PSV Premix Waterproofing Application" 
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

              {/* Single Line Coverage Badge (Bottom Left) */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-amber-500 text-slate-950 font-black px-5 py-3.5 rounded-2xl shadow-xl backdrop-blur-md border border-amber-400/50">
                <span className="text-xs sm:text-sm whitespace-nowrap block">
                  1,000–1,200 sq.ft. coverage per 100 kg
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pill Tag */}
            <span className="inline-block bg-[#088395] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 w-fit shadow-md">
              ADVANCED TECHNOLOGY
            </span>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3">
              PSV Premix <br className="hidden sm:block" />
              Waterproofing <br className="hidden sm:block" />
              Chemical
            </h2>

            {/* Sub-heading */}
            <h3 className="text-base sm:text-lg font-extrabold text-[#088395] mb-4">
              Flexible, durable roof & terrace protection
            </h3>

            {/* Description Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
              ORM Waterproofing PSV Premix is a ready-to-mix waterproofing formulation designed for terrace waterproofing, roof leakage repair, wall seepage treatment and crack protection in residential and commercial buildings. Its flexible waterproofing system provides durable protection against rain, heat and water-related damage.
            </p>

            {/* 2-Column Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 text-xs sm:text-sm font-semibold leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#088395] hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <span>View Products</span>
                <span>→</span>
              </Link>

              <Link
                to="/application-guide"
                className="inline-flex items-center gap-2 border-2 border-[#088395] text-[#088395] hover:bg-[#088395] hover:text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 bg-white/50"
              >
                <span>Application Guide</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ChemicalProductSection