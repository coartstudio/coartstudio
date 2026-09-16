import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/lib/posts'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on branding, web development, AI automation, and digital marketing from CoArt Studio. Practical strategies to help your business grow.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | CoArt Studio',
    description:
      'Insights on branding, web development, AI automation, and digital marketing from CoArt Studio.',
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors mb-6 inline-block"
          >
            &larr; Back to home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Practical insights on branding, web development, AI automation, and
            digital marketing to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
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
      </div>
    </main>
  )
}
