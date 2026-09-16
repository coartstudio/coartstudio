import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/lib/posts'
import { ArrowLeft } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['CoArt Studio'],
      images: [{ url: post.image, width: 800, height: 400, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'CoArt Studio',
      url: 'https://www.coart.studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CoArt Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.coart.studio/coart-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.coart.studio/blog/${post.slug}`,
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All articles
        </Link>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-[#0071BC] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-li:text-gray-700
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              &larr; Back to all articles
            </Link>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0071BC, #29ABE2)',
              }}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
