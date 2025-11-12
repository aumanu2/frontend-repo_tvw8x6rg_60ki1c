import { useState } from 'react'

export default function Auth(){
  const [mode, setMode] = useState('login')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const base = import.meta.env.VITE_BACKEND_URL
    setStatus('loading')

    try {
      if (mode === 'register') {
        const res = await fetch(`${base}/api/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.get('name'), email: form.get('email'), password: form.get('password') }) })
        const data = await res.json()
        if (!res.ok) throw new Error(data.detail || 'Error')
        setStatus('registered')
      } else {
        const res = await fetch(`${base}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) })
        const data = await res.json()
        if (!res.ok) throw new Error(data.detail || 'Error')
        setStatus('logged-in')
      }
    } catch (e) {
      setStatus(e.message || 'error')
    }
  }

  return (
    <section id="auth" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Create an account</h2>
            <p className="mt-3 text-slate-600">Get started in minutes. Switch between sign up and sign in.</p>
            <div className="mt-6 inline-flex rounded-full bg-slate-100 p-1">
              <button onClick={() => setMode('login')} className={`px-4 py-2 rounded-full text-sm font-medium transition ${mode==='login' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Sign in</button>
              <button onClick={() => setMode('register')} className={`px-4 py-2 rounded-full text-sm font-medium transition ${mode==='register' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Sign up</button>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            {mode === 'register' && (
              <div className="mb-4">
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input name="name" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-1">Password</label>
              <input type="password" name="password" required className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none border px-3 py-2 bg-white" />
            </div>
            <button type="submit" className="rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">{mode==='register' ? 'Create account' : 'Sign in'}</button>
            {status === 'loading' && <p className="mt-3 text-slate-500">Working…</p>}
            {status === 'registered' && <p className="mt-3 text-emerald-600">Welcome aboard!</p>}
            {status === 'logged-in' && <p className="mt-3 text-emerald-600">Signed in. You’re all set.</p>}
            {status && !['loading','registered','logged-in'].includes(status) && <p className="mt-3 text-rose-600">{String(status)}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
