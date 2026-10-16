import React from 'react'

const FreeInspectionSection = () => {
  return (
    /* OUTER BG: Uniform Solid Ocean Blue Background without any patches */
    <section className="py-24 bg-[#1b7593] font-sans relative text-center">

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Orange/Amber Tag */}
        <span className="inline-block text-[#fdb813] sm:text-[#ffa726] text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
          READY TO STOP THE LEAKAGE?
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Get a Free Site Inspection Today
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
          Send us your photos or book a free inspection and our experts will recommend the most effective, long-lasting waterproofing solution.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          {/* Book Free Inspection Button (Orange Solid) */}
          <button 
            onClick={() => console.log('Book inspection clicked')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f6ad55] hover:bg-[#ed8936] text-slate-950 font-extrabold text-base shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Book Free Inspection</span>
            <span className="text-lg">→</span>
          </button>

          {/* Call Us Now Button (Teal Outline with Phone Icon) */}
          <button 
            onClick={() => window.location.href = 'tel:+919876543210'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/80 hover:border-white text-white font-extrabold text-base bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            {/* Phone Icon */}
            <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Us Now</span>
          </button>

        </div>

      </div>
    </section>
  )
}

export default FreeInspectionSection