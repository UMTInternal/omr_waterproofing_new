import React from 'react'

const WhatsAppSection = () => {
  const whatsappNumber = "919825012345" // Apne WhatsApp number se replace kar sakte ho
  const message = encodeURIComponent("Hello, I want to send site photos for waterproofing expert advice.")

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#042f2e] text-white font-sans overflow-hidden">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute -top-12 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-12 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side: Floating Glowing WhatsApp Icon */}
          <div className="shrink-0 relative">
            {/* Pulsing Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none"></div>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-transform duration-300 group border-4 border-emerald-400/30"
            >
              <svg 
                className="w-14 h-14 sm:w-20 sm:h-20 text-white fill-current group-hover:rotate-12 transition-transform duration-300" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Top Subtitle Badge */}
            <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
              FAST & FREE EXPERT ADVICE
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Send Your Site Photos & Videos on WhatsApp
            </h2>

            {/* Description */}
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
              Not sure which waterproofing method is right for your property? Send us photos and videos of the leakage and our experts will explain the best solution — the advantages, limitations and expected cost — so you can decide with confidence.
            </p>

            {/* Action Bar: Buttons & Call Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Us Block */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-800/60 border border-emerald-600/40 flex items-center justify-center text-emerald-300 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                    OR CALL US NOW
                  </span>
                  <a href="tel:+919825012345" className="text-lg font-black text-white hover:text-emerald-300 transition-colors">
                    +91 98250 12345
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatsAppSection