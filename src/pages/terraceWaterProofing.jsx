import React from "react";
import TerraceDetailsCards from "./terraceDetailsCards";
import OtherRoofWaterproofing from "./otherRoofwaterproofing";
import DiyAndFaq from "./diyAndFaq";

const TerraceWaterproofing = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-white/50 inline-block px-3 py-1 rounded-md shadow-sm">
              Reliable & Long-Lasting Waterproofing for Every Roof Terrace
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Terrace Waterproofing Service{" "}
              <span className="block text-slate-900">
                in Delhi NCR
              </span>
            </h1>

            <h3 className="text-lg sm:text-xl font-black text-rose-950 tracking-wide">
              Terrace, Slope, Balcony & Parapet Waterproofing
            </h3>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              Roof terrace waterproofing is essential in Delhi NCR due to
              extreme heat and heavy monsoon conditions. Without proper
              treatment, small cracks quickly turn into ceiling leakage and
              damp walls.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#inspection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-extrabold text-sm shadow-lg transition-all duration-300"
              >
                <span>👉 GET FREE INSPECTION</span>
              </a>

              <a
                href="tel:+919825012345"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-extrabold text-sm shadow-lg transition-all duration-300"
              >
                <span>👉 TALK TO EXPERT</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE GRID */}
          <div className="lg:col-span-5 bg-white/40 p-4 sm:p-6 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md">

            {/* TITLE */}
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                Terrace Waterproofing
              </h2>

              <p className="text-xs font-bold text-slate-800 tracking-wider mt-0.5">
                Roof Slope • Balcony • Parapet
              </p>
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-3">

              {/* 1st Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=500&q=80"
                  alt="Terrace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2nd Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80"
                  alt="Worker Application"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 3rd Image - FIXED */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
                  alt="Worker Applying Membrane"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 4th Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-md bg-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                  alt="Balcony Terrace"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* CALLING BOX */}
            <div className="mt-4 relative overflow-hidden rounded-xl shadow-md bg-slate-900 p-4 text-white flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="text-pink-400 text-2xl">
                  📞
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-pink-400">
                    Need Immediate Help?
                  </p>

                  <p className="text-sm sm:text-lg font-black">
                    +91 97170 45819
                  </p>
                </div>
              </div>

              <a
                href="tel:+919825012345"
                className="bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow transition duration-300"
              >
                CALL NOW
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* 2. INFO CONTENT SECTION */}
      <section className="w-full py-16 md:py-20 bg-white px-6 sm:px-12 lg:px-20">
        <div className="w-full space-y-8">

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight leading-tight">
              Professional Roof Terrace Waterproofing Solutions by Waterseal
              Delhi NCR
            </h2>
          </div>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            Is your terrace leaking during the rainy season? Do you notice
            damp patches, water stains, or seepage on your ceiling? Even if
            your terrace has China Mosaic, floor tiles, PCC, or an existing
            waterproof coating, leakage can still occur if the root cause is
            not properly identified.
          </p>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            In many cases, water leakage is not caused by the terrace alone.
            Cracks in parapet walls, damaged overhead water tanks, external
            wall cracks, roof slope issues, or other structural defects can
            also allow rainwater to seep into the building. Simply applying a
            waterproof coating is often not enough. A professional inspection
            is essential to identify the actual source of leakage and provide
            the right waterproofing treatment.
          </p>

          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            With over{" "}
            <strong className="text-slate-950 font-black">
              30 years of experience
            </strong>
            ,{" "}
            <strong className="text-slate-950 font-black">
              WaterSeal
            </strong>{" "}
            has been delivering reliable{" "}
            <strong className="text-slate-950 font-black">
              Terrace Waterproofing Services
            </strong>{" "}
            across Delhi NCR. Our advanced{" "}
            <strong className="text-slate-950 font-black">
              PSV (Polymerized Silicone Vinyl) Waterproofing Technology
            </strong>{" "}
            provides long-lasting protection for China Mosaic, tiled
            terraces, concrete roofs, and other roof surfaces, helping keep
            your property dry, durable, and leak-free for years.
          </p>

        </div>
      </section>

      {/* 3. TERRACE DETAILS CARDS */}
      <TerraceDetailsCards />

      {/* 4. OTHER ROOF WATERPROOFING */}
      <OtherRoofWaterproofing />

      {/* 5. DIY & FAQ */}
      <DiyAndFaq />
    </div>
  );
};

export default TerraceWaterproofing;