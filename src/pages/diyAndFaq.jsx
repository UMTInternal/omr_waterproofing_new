import React, { useState } from 'react'

const DiyAndFaq = () => {
  // FAQ accordion state (pehla wala default open rahega jaisa image me hai)
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      question: "Why is roof terrace waterproofing important?",
      answer: "Without proper Roof terrace waterproofing, rain and heat can seriously damage your home. High heat causes surface cracks, and heavy rains can create holes in the plaster or joints. Water seeps through these openings, leading to internal moisture and structural damage over time."
    },
    {
      question: "How can I determine if my house's terrace needs waterproofing?",
      answer: "Look for warning signs such as damp patches on ceilings, peeling paint, water seepage during rains, visible cracks on the roof surface, or moss and algae growth."
    },
    {
      question: "Which chemical is best for roof terrace waterproofing?",
      answer: "Waterseal PSV-PREMIX is a top-tier ready-to-use non-cementitious waterproofing chemical specifically engineered to withstand harsh weather conditions, intense heat, and heavy monsoons."
    },
    {
      question: "How can I fix a water leakage issue on my roof terrace without the help of a professional?",
      answer: "You can use our DIY PSV-PREMIX solution by following our step-by-step application guide. Clean the surface, seal the cracks properly, and apply the required coats using a brush or roller."
    },
    {
      question: "If we will fixing major roof cracks, then stop water from dripping inside?",
      answer: "Yes, sealing major cracks and applying a complete protective waterproof coating stops water infiltration at the source, preventing indoor dripping completely."
    }
  ]

  return (
    <section className="w-full py-12 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* TOP SECTION: 2 COLUMNS (DIY & Weather on Left, FAQs on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: DIY & Weather Conditions (7 Spans) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* DIY Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-200 shadow-lg shadow-emerald-50 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                DIY Roof Terrace Waterproofing – <span className="text-emerald-600">Easy & Affordable</span>
              </h2>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Don’t have access to a trusted waterproofing contractor? 
                  No worries — Waterseal brings you <strong className="text-slate-900">PSV-PREMIX</strong>, a ready-to-use roof terrace waterproofing chemical that’s easy to apply yourself!
                </p>
                <p>
                  This DIY solution can be used by any skilled painter or mason — no professional required. 
                  Simply follow our detailed guide and enjoy long-lasting waterproofing protection.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#guide" 
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 p-3 rounded-xl border border-emerald-200 transition-all w-full sm:w-auto"
                >
                  <span>👉 Learn how to waterproof your terrace yourself: <strong className="underline block sm:inline">Step-by-Step Roof Terrace Waterproofing Guide</strong></span>
                </a>
              </div>
            </div>


            {/* Built for Indian Weather Conditions Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-amber-200 shadow-lg shadow-amber-50 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Built for <span className="text-amber-600">Indian Weather Conditions</span>
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  From scorching summers to heavy monsoons, India’s climate is tough on terraces.
                </p>
                <p>
                  Waterseal <strong className="text-slate-900">PSV</strong> is engineered to withstand heat, rain, and moisture, preventing seepage and keeping your roof cool and dry throughout the year.
                </p>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: FAQs (5 Spans) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border-2 border-sky-200 shadow-lg shadow-sky-50 space-y-6">
            <div>
              <span className="text-[10px] font-black tracking-wider text-sky-700 uppercase bg-sky-100 px-2.5 py-1 rounded-md border border-sky-200">
                HELP & SUPPORT
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight mt-2">
                What is waterproofing, and why is it important to have it in your home? - FAQs.
              </h3>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div 
                    key={index} 
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className={`w-full flex items-center justify-between p-3.5 text-left text-xs sm:text-sm font-bold transition-colors ${
                        isOpen ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-black ${isOpen ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 text-slate-700'}`}>
                          {isOpen ? '−' : '+'}
                        </span>
                        {faq.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>


        {/* BOTTOM SECTION: FINAL ADVICE BANNER */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950 p-6 sm:p-8 rounded-2xl text-white border border-emerald-500/30 shadow-xl space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
              EXPERT RECOMMENDATION
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white pt-1">
              Final Advice
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <p>
              Repairing only the visible leakage without finding the real source usually results in repeated problems. A proper approach that checks the roof, walls, water tanks and internal wet areas together provides long-term protection and avoids structural damage.
            </p>
            <p className="pt-1">
              If a waterproofing expert is not easily available near you, you can <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold underline hover:text-emerald-300">WhatsApp us</a> clear photos or short videos of the affected areas, and we will review them and guide you with the most suitable solution.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DiyAndFaq