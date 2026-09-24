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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CoArt Studio Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | CoArt Studio',
    description:
      'Insights on branding, web development, AI automation, and digital marketing from CoArt Studio.',
    images: ['/og-image.png'],
  },
}

// Newest first; ties (same date) fall back to array order, latest appended wins
const sorted = posts
  .map((post, i) => ({ post, i }))
  .sort((a, b) => Date.parse(b.post.date) - Date.parse(a.post.date) || b.i - a.i)
  .map(({ post }) => post)

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://www.coart.studio/blog#blog',
  url: 'https://www.coart.studio/blog',
  name: 'CoArt Studio Blog',
  inLanguage: 'en',
  isPartOf: { '@id': 'https://www.coart.studio/#website' },
  publisher: { '@id': 'https://www.coart.studio/#organization' },
  blogPost: sorted.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `https://www.coart.studio/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
  })),
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
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
