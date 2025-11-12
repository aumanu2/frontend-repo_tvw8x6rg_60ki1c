import { useEffect, useState } from 'react'

export default function Blog(){
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL
      try {
        const res = await fetch(`${base}/api/blog`)
        const data = await res.json()
        setPosts(data)
      } catch(e) {
        setPosts([])
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">From the blog</h2>
          <p className="text-slate-600 mt-3">Insights on fintech, product, and growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
              {p.cover_image ? (
                <img src={p.cover_image} className="h-40 w-full object-cover" />
              ) : (
                <div className="h-40 w-full bg-gradient-to-br from-purple-100 to-pink-100" />
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-700 line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 text-sm text-slate-500">By {p.author_name || 'Team'} </div>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="md:col-span-3 text-center text-slate-500">No posts yet. Use the contact form to request a demo blog seed.</div>
          )}
        </div>
      </div>
    </section>
  )
}
