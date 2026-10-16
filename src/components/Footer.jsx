import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0b5c74] text-slate-300 font-sans pt-16 pb-8 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & About (Col-span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/15">
                <span className="text-xl font-black text-white tracking-wider">ORM</span>
                <span className="text-xl font-bold text-sky-300 ml-1">Waterproofing</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-200 max-w-sm font-normal">
              ORM Waterproofing is a trusted waterproofing contractor in Delhi NCR with over 30 years of experience. We find the root cause of leakage and deliver long-lasting, warrantied solutions for homes, businesses and industries across India.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/share/p/1HsETkfMeH/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/p/DPN1rnoElzw/?stkn=bnM3cXE0MXMyNnVr" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              
            </div>
          </div>

          {/* Column 2: Waterproofing Services (Col-span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide border-b border-white/20 pb-2 inline-block">
              Waterproofing Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/terrace" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Terrace Waterproofing</Link></li>
              <li><Link to="/services/bathroom" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Bathroom Waterproofing</Link></li>
              <li><Link to="/services/water-tank" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Water Tank Waterproofing</Link></li>
              <li><Link to="/services/wall-dampness" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Wall Dampness Treatment</Link></li>
              <li><Link to="/services/industrial-shed" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Industrial Shed Waterproofing</Link></li>
              <li><Link to="/services/swimming-pool" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Swimming Pool Waterproofing</Link></li>
            </ul>
          </div>

          {/* Column 3: DIY & Resources (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide border-b border-white/20 pb-2 inline-block">
              DIY & Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/diy-waterproofing" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> DIY Waterproofing</Link></li>
              <li><Link to="/waterproofing-tips" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Waterproofing Tips</Link></li>
              <li><Link to="/cost-guide" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Cost Guide</Link></li>
              <li><Link to="/cost-calculator" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Cost Calculator</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> FAQs</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> About Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Products (Col-span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide border-b border-white/20 pb-2 inline-block">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products/psv-premix" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> PSV Premix Waterproofing</Link></li>
              <li><Link to="/products/roof-terrace-coating" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Roof & Terrace Coating</Link></li>
              <li><Link to="/products/wall-crack-treatment" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Wall & Crack Treatment</Link></li>
              <li><Link to="/products/bathroom-tank-care" className="hover:text-white transition-colors flex items-center gap-1.5"><span>›</span> Bathroom & Tank Care</Link></li>
            </ul>

            {/* Get in Touch heading embedded below products or separate */}
            <div className="pt-4">
              <h3 className="text-white font-extrabold text-base tracking-wide border-b border-white/20 pb-2 inline-block mb-3">
                Get in Touch
              </h3>
              <ul className="space-y-3 text-xs leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">📍</span>
                  <span>Dehli NCR, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">📞</span>
                  <span>+91 97170 45819</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✉️</span>
                  <span>contact@ormwaterproofing.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">⏰</span>
                  <div>
                    <p className="font-semibold text-white">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} ORM Waterproofing. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer