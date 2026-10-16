import React, { useState } from 'react'

const productsData = [
  {
    name: "PSV – PREMIX",
    tagline: "High-Performance Waterproof Mortar & Polymer Premix",
    description: "PSV Premix ek premium quality ka pre-mixed waterproof mortar hai jo heavy-duty sealing aur structural protection ke liye specially design kiya gaya hai. Yeh concrete aur masonry surfaces par excellent bonding strength provide karta hai, jisse pani ka seepage ya dampness roots tak nahi pahunch pati. Yeh terraces, balconies, bathrooms, aur sunken slabs ke liye ekdam best aur long-lasting solution hai.",
    highlights: ["Superior bonding strength on all concrete surfaces", "Prevents moisture penetration and water seepage", "Ideal for terraces, balconies & sunken slabs", "Easy to mix and apply with high durability"],
    // Blue/Teal Gradient Theme
    theme: {
      btnBg: "bg-blue-600 hover:bg-blue-700",
      activeRing: "ring-blue-300 border-white",
      boxGradient: "bg-gradient-to-br from-blue-900 via-teal-900 to-slate-950 border-blue-400/50",
      accentText: "text-blue-300",
      badgeBg: "bg-blue-500/30 text-blue-200 border-blue-400/40"
    }
  },
  {
    name: "PPC MAT STRIPS",
    tagline: "Heavy-Duty Reinforcement & Joint Sealing Fabric",
    description: "PPC Mat Strips high-tensile strength non-woven polyester fabric strips hoti hain jinhe liquid waterproofing membranes ke sath combination mein use kiya jata hai. Yeh vulnerable joints, corners, parapet walls, aur dynamic cracks ko robust structural support deti hain taaki membrane stretch hokar phate nahi. Yeh poori waterproofing system ki life ko double kar deti hain.",
    highlights: ["High tensile strength and tear resistance", "Provides structural support to joints & corners", "Works perfectly with liquid waterproofing coats", "Prevents cracking in high-movement areas"],
    // Green Gradient Theme
    theme: {
      btnBg: "bg-emerald-600 hover:bg-emerald-700",
      activeRing: "ring-emerald-300 border-white",
      boxGradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-slate-950 border-emerald-400/50",
      accentText: "text-emerald-300",
      badgeBg: "bg-emerald-500/30 text-emerald-200 border-emerald-400/40"
    }
  },
  {
    name: "PSV CHEMICAL",
    tagline: "Advanced Liquid Waterproofing Shield",
    description: "Yeh ek multi-purpose aur high-solid liquid waterproofing chemical hai jo concrete ke microscopic pores aur capillary tracts ke andar tak deep penetrate karta hai. Yeh wahan jaakar ek impermeable moisture barrier create karta hai jo pani, salt attack, aur efflorescence ko poori tarah roakta hai. Yeh diwaren aur chhato ko long-term ke liye ekdum safe rakhta hai.",
    highlights: ["Deep penetration into concrete pores", "Creates an unbreakable moisture shield", "Prevents efflorescence and salt damage", "Long-lasting protection against heavy rains"],
    // Purple Gradient Theme
    theme: {
      btnBg: "bg-purple-600 hover:bg-purple-700",
      activeRing: "ring-purple-300 border-white",
      boxGradient: "bg-gradient-to-br from-purple-900 via-violet-900 to-slate-950 border-purple-400/50",
      accentText: "text-purple-300",
      badgeBg: "bg-purple-500/30 text-purple-200 border-purple-400/40"
    }
  },
  {
    name: "QUICK SEAL",
    tagline: "Instant Leak Plug & Emergency Sealing Solution",
    description: "Quick Seal ek fast-setting hydraulic compound hai jo chalte hue active water leaks, seepage points, aur gushing water jets ko turant band karne ke liye banaya gaya hai. Yeh continuous water pressure ke bawajood kuch hi minutes mein hard hokar leak ko seal kar deta hai. Plumbers aur waterproofing experts ke liye yeh ek emergency life-saver product hai.",
    highlights: ["Sets within minutes under water pressure", "Plugs active leaks and gushing water instantly", "High structural adhesion and quick hardness", "Essential for emergency plumbing and roof repairs"],
    // Red / Orange Gradient Theme
    theme: {
      btnBg: "bg-red-600 hover:bg-red-700",
      activeRing: "ring-red-300 border-white",
      boxGradient: "bg-gradient-to-br from-red-900 via-orange-950 to-slate-950 border-red-400/50",
      accentText: "text-red-300",
      badgeBg: "bg-red-500/30 text-red-200 border-red-400/40"
    }
  },
  {
    name: "NON SHRINK POWDER",
    tagline: "High-Strength Grouting & Void Filling Compound",
    description: "Yeh ek expansion-compensated non-shrink powder hai jo heavy structural grouting, honeycombs, machinery foundations, aur core-cutting repairs ke liye use kiya jata hai. Application ke baad isme kisi bhi tarah ki volumetric shrinkage ya cracking nahi hoti, jisse poori structure ki strength aur stability maintain rehti hai. Yeh voids ko poori tarah solid fill karta hai.",
    highlights: ["Zero volumetric shrinkage after curing", "High compressive strength for heavy loads", "Perfect for honeycombs & core-cutting gaps", "Ensures absolute structural stability"],
    // Yellow / Amber Gradient Theme
    theme: {
      btnBg: "bg-amber-600 hover:bg-amber-700",
      activeRing: "ring-amber-300 border-white",
      boxGradient: "bg-gradient-to-br from-amber-900 via-yellow-950 to-slate-950 border-amber-400/50",
      accentText: "text-amber-300",
      badgeBg: "bg-amber-500/30 text-amber-200 border-amber-400/40"
    }
  },
  {
    name: "CRACK FILLER KIT",
    tagline: "Complete DIY Solution for Wall & Roof Cracks",
    description: "Yeh ek all-in-one professional kit hai jo hairline cracks se lekar wide structural cracks ko permanent repair karne ke liye banayi gayi hai. Isme flexible crack-filling paste aur specialized reinforcing tape milti hai jo diwaren aur chhato mein expansion aur contraction ko handle karti hai. Yeh baarish ke pani ko cracks ke zariye andar aane se poori tarah rokti hai.",
    highlights: ["All-in-one complete crack repair kit", "Flexible paste handles structural movement", "Stops water infiltration through walls", "Easy to apply for both DIY and professionals"],
    // Indigo Gradient Theme
    theme: {
      btnBg: "bg-indigo-600 hover:bg-indigo-700",
      activeRing: "ring-indigo-300 border-white",
      boxGradient: "bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-950 border-indigo-400/50",
      accentText: "text-indigo-300",
      badgeBg: "bg-indigo-500/30 text-indigo-200 border-indigo-400/40"
    }
  },
  {
    name: "COMBO PACK",
    tagline: "All-in-One Complete Waterproofing Arsenal",
    description: "Yeh ek cost-effective aur comprehensive bundle kit hai jisme primers, waterproofing chemicals, aur sealants ek hi pack mein milte hain. Agar aapko apne ghar ki roof, bathrooms, ya exterior walls par complete waterproofing karni hai, toh alag-alag cheezein kharidne ki zarurat nahi padti. Yeh ek complete startup kit hai jo professional results deti hai.",
    highlights: ["Cost-effective bundle of essential products", "Includes primers, chemicals & sealants", "Perfect for complete roof & bathroom projects", "Saves time and ensures system compatibility"],
    // Teal Gradient Theme
    theme: {
      btnBg: "bg-teal-600 hover:bg-teal-700",
      activeRing: "ring-teal-300 border-white",
      boxGradient: "bg-gradient-to-br from-teal-900 via-cyan-950 to-slate-950 border-teal-400/50",
      accentText: "text-teal-300",
      badgeBg: "bg-teal-500/30 text-teal-200 border-teal-400/40"
    }
  },
  {
    name: "CLEAR-COAT KIT",
    tagline: "Transparent Protective Waterproof Glaze",
    description: "Yeh ek crystal-clear, UV-resistant waterproof coating hai jo exposed brickwork, natural stone, marble, aur tiled facades ko protect karti hai bina unke original look ya aesthetic beauty ko badle. Yeh transparent layer ek protective shield ki tarah kaam karti hai jo dampness aur fungus ko andar nahi ghusne deti jabki building ki real shine waisi hi dikhti rehti hai.",
    highlights: ["Crystal clear finish preserves natural look", "High UV resistance against yellowing", "Prevents dampness on exposed brick and stone", "Stops water absorption while remaining breathable"],
    // Cyan / Sky Blue Gradient Theme
    theme: {
      btnBg: "bg-cyan-600 hover:bg-cyan-700",
      activeRing: "ring-cyan-300 border-white",
      boxGradient: "bg-gradient-to-br from-cyan-900 via-slate-900 to-black border-cyan-400/50",
      accentText: "text-cyan-300",
      badgeBg: "bg-cyan-500/30 text-cyan-200 border-cyan-400/40"
    }
  }
]

const ProductButtonsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0])

  return (
    <div className="w-full min-h-screen bg-slate-900 py-12 px-4 sm:px-8">
      
      {/* 4x2 Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {productsData.map((item, index) => {
          const isSelected = selectedProduct.name === item.name

          return (
            <button
              key={index}
              onClick={() => setSelectedProduct(item)}
              className={`flex items-center justify-between px-4 py-3.5 ${item.theme.btnBg} text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 border-2 ${
                isSelected ? `${item.theme.activeRing} ring-4 ring-offset-2 scale-[1.03]` : 'border-transparent'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-white text-sm">➔</span>
                <span className="truncate">{item.name}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Detail Box with Dynamic Gradients matching each product */}
      <div className={`max-w-6xl mx-auto mt-8 border-2 rounded-2xl p-6 sm:p-8 text-white shadow-2xl transition-all duration-500 ${selectedProduct.theme.boxGradient}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4 mb-5">
          <div>
            <span className={`text-[11px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border ${selectedProduct.theme.badgeBg}`}>
              Selected Product Details
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white tracking-wide">
              {selectedProduct.name}
            </h3>
            <p className={`text-xs sm:text-sm font-semibold mt-1 ${selectedProduct.theme.accentText}`}>
              {selectedProduct.tagline}
            </p>
          </div>
          <button className={`mt-4 md:mt-0 font-extrabold text-xs py-2.5 px-6 rounded-xl transition-all shadow-lg text-white ${selectedProduct.theme.btnBg}`}>
            Enquire Now 🚀
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-2">Detailed Overview</h4>
            <p className="text-sm text-gray-100 leading-relaxed text-justify">
              {selectedProduct.description}
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${selectedProduct.theme.accentText}`}>Key Features & Benefits</h4>
            <ul className="space-y-2">
              {selectedProduct.highlights.map((highlight, idx) => (
                <tr key={idx}></tr> // dummy or valid element
              ))}
              {selectedProduct.highlights.map((highlight, idx) => (
                <li key={idx} className="text-xs text-gray-200 flex items-start gap-2">
                  <span className={`font-bold ${selectedProduct.theme.accentText}`}>✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductButtonsSection