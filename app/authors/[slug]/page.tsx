import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/lib/posts'
import { authors, getPostAuthor, authorJsonLd, authorUrl } from '@/lib/authors'
import { AuthorAvatar } from '@/components/ui/author-avatar'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = authors[slug]
  if (!author) return {}
  return {
    title: `${author.name}, ${author.jobTitle}`,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
    openGraph: {
      title: `${author.name} | CoArt Studio`,
      description: author.bio,
      url: `/authors/${author.slug}`,
      type: 'profile',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: author.name }],
    },
  }
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  const author = authors[slug]
  if (!author) notFound()

  // Newest first, same ordering as the blog index
  const authorPosts = posts
    .map((post, i) => ({ post, i }))
    .filter(({ post }) => getPostAuthor(post).slug === author.slug)
    .sort((a, b) => Date.parse(b.post.date) - Date.parse(a.post.date) || b.i - a.i)
    .map(({ post }) => post)

  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: authorUrl(author),
    isPartOf: { '@id': 'https://www.coart.studio/#website' },
    mainEntity: { ...authorJsonLd(author), description: author.bio },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors mb-8 inline-block"
        >
          &larr; All articles
        </Link>

        <div className="flex items-center gap-5 mb-6">
          <AuthorAvatar author={author} size={96} />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{author.name}</h1>
            <p className="text-gray-500">{author.jobTitle}</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">{author.bio}</p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Articles by {author.name}</h2>
        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {authorPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-center justify-between gap-4 py-4">
                <span>
                  <span className="block font-semibold text-gray-900 group-hover:text-[#0071BC] transition-colors">
                    {post.title}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.category} · {post.date}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#0071BC] transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
