import type { Post } from './posts'

export type Author = {
  slug: string
  name: string
  jobTitle: string
  bio: string
}

export const authors: Record<string, Author> = {
  'gerald-tony': {
    slug: 'gerald-tony',
    name: 'Gerald Tony',
    jobTitle: 'Founder, CoArt Studio',
    bio: 'Gerald Tony is the founder of CoArt Studio, a human-first digital agency in Dubai, and writes about branding, web and app development, AI, and growing a business in the UAE.',
  },
  'hannah-finch': {
    slug: 'hannah-finch',
    name: 'Hannah Finch',
    jobTitle: 'Head of Content, CoArt Studio',
    bio: 'Hannah Finch is Head of Content at CoArt Studio in Dubai, writing about social media, content production, and digital marketing for brands in the UAE.',
  },
}

// Content and marketing articles are Hannah's; everything else is Gerald's.
// A post can override this with an explicit `author` slug.
export function getPostAuthor(post: Post): Author {
  if (post.author && authors[post.author]) return authors[post.author]
  return post.category === 'Digital Marketing' ? authors['hannah-finch'] : authors['gerald-tony']
}

export function authorUrl(author: Author) {
  return `https://www.coart.studio/authors/${author.slug}`
}

export function authorJsonLd(author: Author) {
  return {
    '@type': 'Person',
    '@id': `${authorUrl(author)}#person`,
    name: author.name,
    jobTitle: author.jobTitle.split(',')[0],
    url: authorUrl(author),
    worksFor: { '@id': 'https://www.coart.studio/#organization' },
  }
}
