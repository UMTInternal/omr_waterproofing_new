import React from 'react'
import { Link } from 'react-router-dom'

const image1 = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
const image2 = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
const image3 = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
const image4 = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'


const ServicesSection = () => {
  const services = [
    {
      title: "Terrace Waterproofing",
      description: "A flexible, high-build system that stops terrace leakage, bridges cracks and withstands heat, rain and UV for years.",
      image: image1,
      badge: "Popular",
      link: "/services/terrace"
    },
    {
      title: "Bathroom Waterproofing",
      description: "Leakage repair and waterproofing for bathrooms — often without removing tiles — to stop seepage into rooms below.",
      image: image2,
      badge: "No-Tile Removal",
      link: "/services/bathroom"
    },
    {
      title: "Water Tank Waterproofing",
      description: "Food-grade, non-toxic waterproofing for underground and overhead tanks to keep water clean and stop leakage.",
      image: image3,
      badge: "Food Safe",
      link: "/services/water-tank"
    },
    {
      title: "Wall Dampness Treatment",
      description: "Breathable treatment for damp walls that stops moisture, peeling paint and mould for dry, healthy interiors.",
      image: image4,
      badge: "Anti-Mould",
      link: "/services/wall-dampness"
    }
  ]

  return (
    <section className="relative py-20 bg-slate-900 text-white font-sans overflow-hidden">

      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#088395]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">

            {/* Pill Tag */}
            <span className="inline-flex items-center gap-2 bg-[#088395]/15 border border-[#088395]/30 text-teal-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              OUR SERVICES
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
              Professional <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-[#088395] bg-clip-text text-transparent">
                Waterproofing Services
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Complete solutions for every leakage problem — from terraces and roofs to bathrooms, walls and water tanks.
            </p>
          </div>

          {/* View All Services Button */}
          <div className="shrink-0">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#088395] to-teal-600 hover:from-teal-500 hover:to-[#088395] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-teal-900/40 hover:shadow-teal-500/30 hover:scale-105"
            >
              <span>View All Services</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-teal-400/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between"
            >
              {/* Top Dynamic Border Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#088395] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

              <div>
                {/* Image Container with Dynamic Scale */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-teal-300 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-teal-500/30 shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-extrabold text-xl mb-2.5 group-hover:text-teal-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Action Bar */}
              <div className="p-6 pt-0 mt-2">
                <Link
                  to={item.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-700/50 text-xs font-bold text-teal-400 group-hover:text-white transition-colors duration-300"
                >
                  <span>View Service Details</span>
                  <span className="w-7 h-7 rounded-full bg-teal-500/10 group-hover:bg-teal-500 group-hover:text-slate-900 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection