import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'
import BlogList from './BlogList'

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

// Newest first; ties (same date) fall back to array order, latest appended wins
const sorted = posts
  .map((post, i) => ({ post, i }))
  .sort((a, b) => Date.parse(b.post.date) - Date.parse(a.post.date) || b.i - a.i)
  .map(({ post }) => post)

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

        <BlogList posts={sorted} />
      </div>
    </main>
  )
}
