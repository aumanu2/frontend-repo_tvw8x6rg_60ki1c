import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-slate-600">
      <a href="#features" className="hover:text-slate-900 transition">Features</a>
      <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
      <a href="#blog" className="hover:text-slate-900 transition">Blog</a>
      <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
      <a href="#auth" className="md:ml-4 rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition">Sign in</a>
    </div>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold text-slate-800 text-lg">PastelPay</a>
          <nav className="hidden md:block">{navLink}</nav>
          <button className="md:hidden p-2 rounded-md hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-white/40 pt-4">{navLink}</div>
        )}
      </div>
    </header>
  )
}
