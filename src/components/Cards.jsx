const Cards = () => {
  const items = [
    'Leakage Diagnosis',
    'Waterproofing Chemicals',
    'Site Inspection',
    'Long-Term Protection'
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-3 h-12 w-12 rounded-xl bg-[#e0f7fa] text-[#088395] flex items-center justify-center text-2xl">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
