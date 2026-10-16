import React, { useState } from 'react'

const faqsData = [
  {
    question: "1. What is industrial waterproofing?",
    answer: "Industrial waterproofing protects factory sheds and roofs from water leakage and damage. It uses coatings like PSV or epoxy to prevent cracks, dampness, and corrosion."
  },
  {
    question: "2. Which types of sheds can be waterproofed?",
    answer: "We waterproof all types of industrial, commercial, and residential sheds including metal corrugated sheets, fibre-cement roofing, asbestos sheets, and pre-engineered building (PEB) structures."
  },
  {
    question: "3. How much does industrial shed waterproofing cost?",
    answer: "The cost depends on the treatment type and roof condition. Cement shed PSV coatings start around ₹80 per sq. ft., while FRP patchwork and multi-layer epoxy coatings range between ₹150 to ₹280 per sq. ft."
  },
  {
    question: "4. Can I waterproof my shed without replacing it?",
    answer: "Yes! In most cases, minor to moderate cracks, sheet gaps, and holes can be fully restored using FRP mat reinforcement, specialized sealants, and waterproof coatings without needing expensive roof replacements."
  },
  {
    question: "5. Do you offer waterproofing across in Delhi NCR?",
    answer: "Yes, our expert teams provide comprehensive industrial shed waterproofing services across major industrial hubs, cities, and regions."
  },
  {
    question: "6. Is epoxy coating suitable for food factories?",
    answer: "Yes, 2-layer epoxy coatings with gloss finish provide seamless, food-grade, dust-free surfaces that are highly durable and easy to sanitize, making them ideal for food processing factories and warehouses."
  }
]

const IndustrialShedFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0) // Default first FAQ open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50 px-6 sm:px-12 lg:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wider uppercase">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions for Industrial Shed Waterproofing
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isOpen ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-emerald-700' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-lg transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-emerald-600 text-white rotate-0' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Answer Container */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-emerald-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default IndustrialShedFAQ