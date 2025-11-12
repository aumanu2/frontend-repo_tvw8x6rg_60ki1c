import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28" id="hero">
      <div className="absolute inset-0 h-[560px]">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[520px] flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-sm font-medium mb-4">Minimal fintech for modern teams</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Grow faster with a pastel‑clean finance platform
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Accept payments, manage cards, and automate billing — wrapped in a calm pastel aesthetic your customers will love.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">See pricing</a>
            <a href="#contact" className="rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 font-medium hover:bg-slate-50 transition">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
