import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-[#0f3c4c] text-white text-xs py-2 px-4 sm:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span>📍 Delhi NCR</span>
          <span>⭐ 4.8 Rated on Google</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a href="tel:+919717045819" className="hover:underline">📞 +91 97170 45819</a>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-[#25D366] text-white px-2.5 py-0.5 rounded-full font-medium hover:opacity-90 flex items-center gap-1"
          >
            💬 WhatsApp
          </a>
          <span>✉️ contact@ormwaterproofing.in</span>
          <span>🕒 Mon–Sat 9am–6pm</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 sm:px-8 py-2 flex justify-between items-center max-w-7xl mx-auto relative bg-white">
        
        {/* Brand Logo */}
        <Link to="/" aria-label="ORM Waterproofing home" className="flex items-center py-1 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#0f3c4c]">ORM</span>
            <span className="text-xl sm:text-2xl font-bold text-[#088395]">Waterproofing</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-semibold text-gray-700 text-sm">
          <Link to="/" className="hover:text-[#088395]">Home</Link>

          {/* Mega Menu Services */}
          <div className="group py-2">
            <button className="flex items-center gap-1 hover:text-[#088395] group-hover:text-[#088395] group-hover:bg-teal-50 px-3 py-1 rounded-md transition">
              Services <span className="text-xs transition-transform duration-200 group-hover:rotate-180">^</span>
            </button>

            {/* Mega Dropdown Box */}
            <div className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 rounded-b-2xl p-6">
              <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6 text-left">
                
                {/* Column 1 */}
                <div>
                  <h3 className="font-bold text-[#088395] text-sm mb-3 flex items-center gap-1 border-b pb-1">
                    🏠 Roof Waterproofing
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 font-normal">
                    <li><Link to="/terrce-waterproofing" className="hover:text-[#088395]">• Terrace Waterproofing</Link></li>
                    <li><Link to="/Industrial-Waterproofing" className="hover:text-[#088395]">• Industrial Shed Waterproofing</Link></li>
                    <li><Link to="/Epoxy-Coating" className="hover:text-[#088395]">• Epoxy Coating</Link></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="font-bold text-[#088395] text-sm mb-3 flex items-center gap-1 border-b pb-1">
                    🛁 Bathroom Leakage
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 font-normal">
                    <li><Link to="/Bathroom-Waterproofing-Methods" className="hover:text-[#088395]">• Bathroom Repair Methods</Link></li>
                    <li><Link to="/Bathroom-Renovation-Section" className="hover:text-[#088395]">• Bathroom Renovation</Link></li>
                    <li><Link to="/New-Bathroom-VIP" className="hover:text-[#088395]">• New Bathroom Waterproofing</Link></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="font-bold text-[#088395] text-sm mb-3 flex items-center gap-1 border-b pb-1">
                    🌱 Wall Treatment
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 font-normal">
                    <li><Link to="/Interior-Waterproofing" className="hover:text-[#088395]">• Interior Waterproofing</Link></li>
                    <li><Link to="/Exterior-Waterproofing" className="hover:text-[#088395]">• Exterior Waterproofing</Link></li>
                    <li><Link to="/Retaining-Waterproofing" className="hover:text-[#088395]">• Retaining Wall Waterproofing</Link></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <h3 className="font-bold text-[#088395] text-sm mb-3 flex items-center gap-1 border-b pb-1">
                    💧 Water Tank Waterproofing
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600 font-normal">
                    <li><Link to="/Underground-Tank" className="hover:text-[#088395]">• Underground Tank</Link></li>
                    <li><Link to="/Overhead-WaterTank" className="hover:text-[#088395]">• Overhead Tank</Link></li>
                    <li><Link to="/SwimmingPool-Waterproofing" className="hover:text-[#088395]">• Swimming Pool Waterproofing</Link></li>
                  </ul>
                </div>

                {/* Column 5: Callout Card */}
                <div className="bg-[#0f3c4c] text-white p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-300 font-bold tracking-wider uppercase block mb-1">
                      WE'RE HERE TO HELP
                    </span>
                    <h4 className="font-bold text-sm mb-2">Not sure where the leak is?</h4>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      Get a free on-site inspection and an honest, no-obligation recommendation from our experts.
                    </p>
                  </div>
                  <Link 
                    to="/contact" 
                    className="mt-4 bg-[#f39c12] hover:bg-[#d68910] text-white text-xs font-bold py-2 px-3 rounded-lg text-center transition flex items-center justify-center gap-1"
                  >
                    Free Inspection →
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <Link to="/tips" className="hover:text-[#088395]">Tips</Link>
          <Link to="/guide" className="hover:text-[#088395] flex items-center gap-0.5">DIY Guide <span className="text-xs">▾</span></Link>
          
          {/* Calculator Mega Menu Style with Proper Hover */}
          <div className="group py-2">
            <button className="flex items-center gap-1 hover:text-[#088395] group-hover:text-[#088395] group-hover:bg-teal-50 px-3 py-1 rounded-md transition">
              Calculator <span className="text-xs transition-transform duration-200 group-hover:rotate-180">^</span>
            </button>

            {/* Dropdown Box matching Services Style with absolute positioning & hidden by default */}
            <div className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 rounded-b-2xl p-6">
              <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 text-left">
                
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#088395] text-sm mb-2 flex items-center gap-1 border-b pb-1">
                      📐 TERRACE MEASUREMENTS
                    </h3>
                    <Link to="/calculator/terrace" className="text-xs text-gray-600 font-normal hover:text-[#088395] block py-1">
                      • Calculate exact terrace area and waterproofing estimate
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#088395] text-sm mb-2 flex items-center gap-1 border-b pb-1">
                      🛁 BATHROOM COST CALCULATOR
                    </h3>
                    <Link to="/calculator/bathroom" className="text-xs text-gray-600 font-normal hover:text-[#088395] block py-1">
                      • Estimate waterproofing cost for bathroom leakage repair
                    </Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#088395] text-sm mb-2 flex items-center gap-1 border-b pb-1">
                      💧 WATER TANK COST CALCULATOR
                    </h3>
                    <Link to="/calculator/water-tank" className="text-xs text-gray-600 font-normal hover:text-[#088395] block py-1">
                      • Calculate underground & overhead water tank coating cost
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#088395] text-sm mb-2 flex items-center gap-1 border-b pb-1">
                      🧱 WALL WATERPROOFING COST
                    </h3>
                    <Link to="/calculator/wall" className="text-xs text-gray-600 font-normal hover:text-[#088395] block py-1">
                      • Dampness & wall treatment cost calculator
                    </Link>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#088395] text-sm mb-2 flex items-center gap-1 border-b pb-1">
                      🧪 CHEMICAL COST CALCULATOR
                    </h3>
                    <Link to="/calculator/chemical" className="text-xs text-gray-600 font-normal hover:text-[#088395] block py-1">
                      • Material & chemical consumption estimation
                    </Link>
                  </div>
                  <div className="bg-[#0f3c4c] text-white p-3 rounded-xl flex flex-col justify-between mt-2">
                    <h4 className="font-bold text-xs mb-1">💬 WHATSAPP AN EXPERT</h4>
                    <p className="text-[10px] text-gray-300 mb-2">Need a custom estimation? Chat directly with our waterproofing specialist.</p>
                    <a 
                      href="https://wa.me/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-[#25D366] text-white text-[11px] font-bold py-1 px-2 rounded text-center transition block"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link to="/products" className="hover:text-[#088395] flex items-center gap-0.5">Products <span className="text-xs">▾</span></Link>         
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block shrink-0">
          <Link 
            to="/contact" 
            className="bg-[#088395] hover:bg-[#06616e] text-white font-medium text-sm px-5 py-2.5 rounded-full transition shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            📋 Book Free Inspection
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl text-gray-800">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 font-semibold text-gray-700 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/tips" onClick={() => setIsOpen(false)}>Tips</Link>
          <Link to="/guide" onClick={() => setIsOpen(false)}>DIY Guide ▾</Link>
          <Link to="/calculator" onClick={() => setIsOpen(false)}>Calculator ▾</Link>
          <div className="pl-4 flex flex-col gap-2 text-xs text-gray-600">
            <Link to="/calculator/terrace" onClick={() => setIsOpen(false)}>• Terrace Measurements</Link>
            <Link to="/calculator/water-tank" onClick={() => setIsOpen(false)}>• Water Tank Cost Calculator</Link>
            <Link to="/calculator/chemical" onClick={() => setIsOpen(false)}>• Chemical Cost Calculator</Link>
            <Link to="/calculator/bathroom" onClick={() => setIsOpen(false)}>• Bathroom Cost Calculator</Link>
            <Link to="/calculator/wall" onClick={() => setIsOpen(false)}>• Wall Waterproofing Cost</Link>
          </div>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products ▾</Link>
        </div>
      )}
    </header>
  )
}

export default Header