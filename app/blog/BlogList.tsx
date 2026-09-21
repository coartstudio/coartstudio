'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'
import type { Post } from '@/lib/posts'

export default function BlogList({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1))
    return [...counts.entries()].sort((a, b) => b[1] - a[1])
  }, [posts])

  const q = query.trim().toLowerCase()
  const filtered = posts.filter(
    (p) =>
      (category === 'All' || p.category === category) &&
      (!q ||
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q))
  )

  // Feature the newest post only in the unfiltered view
  const isDefaultView = category === 'All' && !q
  const featured = isDefaultView ? filtered[0] : undefined
  const rest = featured ? filtered.slice(1) : filtered

  return (
    <>
      {featured && (
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071BC] mb-3">
            Latest article
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-5 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 md:h-full md:col-span-2 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-[#0071BC] text-white">
                New
              </span>
            </div>
            <div className="flex flex-col justify-center md:col-span-3 p-5 md:p-7">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
                  {featured.category}
                </span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#0071BC] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{featured.date}</span>
                <span className="flex items-center gap-1 font-semibold text-[#0071BC] group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      <div className="relative mb-5 max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0071BC] focus:ring-2 focus:ring-[#0071BC]/20"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
        {[['All', posts.length] as [string, number], ...categories].map(([name, count]) => (
          <button
            key={name}
            role="tab"
            aria-selected={category === name}
            onClick={() => setCategory(name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === name
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {name} <span className="opacity-60">{count}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 py-12">
          No articles match your search.{' '}
          <button
            className="text-[#0071BC] font-semibold"
            onClick={() => {
              setQuery('')
              setCategory('All')
            }}
          >
            Clear filters
          </button>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-700 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0071BC] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-[#0071BC] group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
