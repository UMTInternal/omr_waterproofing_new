import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FaqSection = () => {
  // Pehla FAQ by default open rahega
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is the best waterproofing solution for terrace leakage?",
      answer: "A flexible, high-build waterproofing system is the most reliable for terraces. We recommend a PSV premix membrane that bridges movement cracks, resists UV and heat, and forms a continuous layer. The exact solution depends on the surface condition, so we inspect the terrace to identify the root cause before recommending the right treatment."
    },
    {
      question: "How much does roof waterproofing cost?",
      answer: "The cost depends on the total square footage, current surface condition, and the choice of waterproofing membrane system required for long-term protection."
    },
    {
      question: "Can bathroom leakage be repaired without removing tiles?",
      answer: "Yes, using advanced tile-grout sealing, clear elastomeric coatings, and pressure grouting techniques, most bathroom leakages can be fixed without breaking tiles."
    },
    {
      question: "Which waterproofing chemical is best for roof seepage?",
      answer: "Acrylic elastomeric polymer coatings and PSV premix membranes are ideal for roof seepage due to their high elasticity and UV resistance."
    },
    {
      question: "How long does waterproofing last?",
      answer: "Properly applied professional waterproofing systems typically last anywhere from 8 to 12 years with a standard written warranty."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    /* OUTER BG: Exact same matching Sky Blue Gradient */
    <section className="py-20 bg-gradient-to-b from-sky-200 via-sky-100 to-cyan-200 font-sans relative overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Heading & CTAs */}
          <div className="lg:col-span-5 text-left">
            {/* Tag */}
            <span className="inline-block bg-[#088395] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-sky-300 shadow-md">
              FAQS
            </span>

            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Frequently<br />Asked Questions
            </h2>

            {/* Subtitle */}
            <p className="text-slate-700 text-base leading-relaxed mb-8 max-w-md font-semibold">
              Answers to the most common questions about waterproofing, leakage repair and the cost of the job.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                to="/faqs" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#00838f] text-[#00838f] font-bold text-sm bg-white/90 hover:bg-[#00838f] hover:text-white transition-all duration-200 shadow-sm"
              >
                <span>View All FAQs</span>
                <span>→</span>
              </Link>

              <button 
                onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25d366] text-white font-bold text-sm shadow-md hover:shadow-lg hover:bg-[#20ba5a] transition-all duration-200"
              >
                Chat with us
              </button>
            </div>
          </div>

          {/* Right Column - FAQ Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div 
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#00838f] shadow-md' 
                      : 'bg-white/95 border-sky-200 hover:border-sky-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {faq.question}
                    </span>

                    {/* Toggle Button Icon */}
                    <span 
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-lg transition-transform duration-200 ${
                        isOpen 
                          ? 'bg-[#00838f] text-white' 
                          : 'bg-[#e8f5e9] text-[#2e7d32]'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FaqSection