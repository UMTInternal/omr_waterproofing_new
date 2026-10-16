import React from 'react'

const ChooseHeader = () => {
  return (
    <section className="py-10 sm:py-14 bg-transparent font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        {/* Solid Sky-Blue Badge for High Visibility */}
        <span className="inline-flex bg-[#088395] text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full border border-sky-300 shadow-md mb-4">
          WHY CHOOSE ORM WATERPROOFING
        </span>

        {/* Main Title Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          A Trusted Waterproofing <br className="hidden sm:inline" />
          Contractor in Delhi NCR
        </h2>

        {/* Short Teal Divider */}
        <div className="w-16 h-1 bg-[#088395] mx-auto rounded-full mb-6"></div>

        {/* Sub-description subtitle */}
        <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-semibold">
          Every waterproofing project is planned according to the condition of your property, 
          ensuring the right treatment for terraces, roofs, bathrooms, basements and exterior walls.
        </p>

      </div>
    </section>
  )
}

export default ChooseHeader