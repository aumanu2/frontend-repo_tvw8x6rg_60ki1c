import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      message: form.get('message')
    }
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (res.ok) setStatus('sent')
      else setStatus(data.detail || 'error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let’s talk</h2>
            <p className="mt-3 text-slate-600">Tell us about your use case and we’ll get back within one business day.</p>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 p-6 ring-1 ring-slate-200">
              <p className="text-slate-800"><strong>Why teams choose us</strong></p>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
                <li>Calm, focused UI your customers enjoy</li>
                <li>Clear pricing and predictable scaling</li>
                <li>Modern API built for speed</li>
              </ul>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input name="name" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">Company</label>
                <input name="company" className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">Send message</button>
            {status === 'loading' && <p className="mt-3 text-slate-500">Sending…</p>}
            {status === 'sent' && <p className="mt-3 text-emerald-600">Thanks! We’ll be in touch shortly.</p>}
            {status && status !== 'loading' && status !== 'sent' && <p className="mt-3 text-rose-600">{String(status)}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
