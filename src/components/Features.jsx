export default function Features(){
  const items = [
    {
      title: 'Card issuing',
      desc: 'Instantly create virtual and physical cards with spend controls and real-time insights.',
      color: 'from-rose-100 to-orange-100'
    },
    {
      title: 'Billing automation',
      desc: 'Reduce churn with smart retries, dunning flows, and beautiful invoices.',
      color: 'from-sky-100 to-indigo-100'
    },
    {
      title: 'Risk & compliance',
      desc: 'Stay safe with built-in KYC/KYB, 3DS, and anomaly detection.',
      color: 'from-emerald-100 to-teal-100'
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="text-slate-600 mt-3">A focused toolkit that covers issuing, billing, and risk in one calm place.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br ${f.color}`}>
              <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
