import React from 'react'
const build = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
import About from './About'
import ChooseHeader from './ChooseHeader'
import Cards from './Cards'
import ServicesSection from './ServicesSection'
import SolutionsProcessSection from './SolutionsProcessSection'
import WhatsAppSection from './WhatsAppSection'
import ChemicalProductSection from './ChemicalProductionSection'
import PremixSection from './PremixSection'
import OptionsSection from './OptionSection'
import FaqSection from './FaqSection'
import ServicesDirectorySection from './DirectorySection'
import FreeInspectionSection from './FreeInspectSection'
 

const Home = () => {
  return (
    /* WEBPAGE MAIN BACKGROUND - Sky Blue & Cyan Gradient */
    <div className="bg-gradient-to-b from-sky-100 via-sky-50 to-cyan-100 min-h-screen font-sans text-gray-800 relative overflow-hidden">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-300/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/40 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="space-y-6">
          <div>
            <span className="inline-block bg-white/90 backdrop-blur-md text-[#088395] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-sky-200 shadow-sm">
              TRUSTED WATERPROOFING CONTRACTOR
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Terrace, Bathroom, <br />
            Wall & Basement <br />
            <span className="text-[#088395]">Waterproofing</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
            For over 30 years, ORM Waterproofing has solved leakage and seepage problems for residential, commercial and industrial projects across Delhi NCR — by finding the actual source of the problem, not just covering the cracks.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#f3a847] hover:bg-[#e09536] text-black font-extrabold text-sm px-6 py-3.5 rounded-full transition shadow-md flex items-center gap-2 hover:scale-105 duration-200">
              📋 Book Free Inspection
            </button>
            
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm px-6 py-3.5 rounded-full transition shadow-md flex items-center gap-2 hover:scale-105 duration-200"
            >
              💬 WhatsApp Now
            </a>
          </div>

          {/* Key Feature Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-extrabold text-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="text-[#088395] text-sm">🛡️</span> 5-Year Written Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#088395] text-sm">🔍</span> Free Site Inspection
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#088395] text-sm">🏆</span> 30+ Years Experience
            </span>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative pt-6 sm:pt-0 group cursor-pointer">
          
          {/* HOVER ONLY: Bright Yellow Glow */}
          <div className="absolute -inset-3 bg-yellow-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none"></div>

          {/* Main Image Wrapper */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 transition-transform duration-300 group-hover:-translate-y-1">
            <img 
              src={build} 
              alt="Waterproofing Site Scaffolding" 
              className="w-full h-[380px] sm:h-[460px] object-cover object-center"
            />
          </div>

          {/* Top-Left Floating Badge: 4.8/5 Rating */}
          <div className="absolute -top-3 left-2 sm:-left-6 bg-white py-2 px-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 z-20">
            <span className="text-amber-400 text-lg">⭐</span>
            <div>
              <p className="font-extrabold text-gray-900 text-xs leading-none">4.8/5</p>
              <p className="text-gray-400 text-[10px] mt-0.5">1,200+ Reviews</p>
            </div>
          </div>

          {/* Top-Right Floating Badge: 5-Year Warranty */}
          <div className="absolute top-4 right-4 bg-[#088395] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-20">
            🛡️ 5-Year Warranty
          </div>

          {/* Bottom-Right Floating Badge: 30+ Years Experience */}
          <div className="absolute bottom-6 right-2 sm:-right-4 bg-white py-2 px-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 z-20">
            <span className="text-amber-500 text-base">💡</span>
            <div>
              <p className="font-black text-gray-900 text-xs leading-tight">30+ Years</p>
              <p className="text-gray-400 text-[10px]">of Experience</p>
            </div>
          </div>

        </div>  

      </section>
      <About/>
      <ChooseHeader/>
      <Cards/>
      <ServicesSection/>
      <SolutionsProcessSection/>
      <WhatsAppSection/>
        <ChemicalProductSection/>
        <PremixSection/>
        <OptionsSection/>
        <FaqSection/>
        <ServicesDirectorySection/>   
        <FreeInspectionSection/>

    </div>
  )
}

export default Home