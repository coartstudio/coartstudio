import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { authors } from '@/lib/authors'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.coart.studio'

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...Object.keys(authors).map((slug) => ({
      url: `${baseUrl}/authors/${slug}`,
      lastModified: new Date('2026-09-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...blogEntries,
  ]
}
