import { useEffect, useState } from 'react'

export default function Pricing(){
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/api/pricing`)
      const data = await res.json()
      setPlans(data.plans || [])
    }
    load()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple pricing</h2>
          <p className="text-slate-600 mt-3">Start free. Scale when you’re ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${p.price}</span>
                  <span className="text-slate-500">/{p.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#auth" className="mt-6 rounded-full bg-slate-900 text-white px-5 py-3 text-center font-medium hover:bg-slate-800 transition">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
