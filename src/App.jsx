import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Auth from './components/Auth'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Auth />
        <Blog />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-500">
        <p>© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
