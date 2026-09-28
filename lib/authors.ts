import type { Post } from './posts'

export type Author = {
  slug: string
  name: string
  jobTitle: string
  bio: string
  image: string
}

export const authors: Record<string, Author> = {
  'gerald-tony': {
    slug: 'gerald-tony',
    name: 'Gerald Tony',
    jobTitle: 'Founder, CoArt Studio',
    bio: 'Gerald Tony is the founder of CoArt Studio, a human-first digital agency in Dubai. He has 17+ years of industry experience and has launched more than 10 brands and businesses. He writes about branding, web and app development, AI, and growing a business in the UAE.',
    image: '/authors/gerald-tony.jpg',
  },
  'hannah-finch': {
    slug: 'hannah-finch',
    name: 'Hannah Finch',
    jobTitle: 'Head of Content, CoArt Studio',
    bio: 'Hannah Finch is Head of Content at CoArt Studio in Dubai and has worked in content since 2020. She writes about social media, content production, and digital marketing for brands in the UAE.',
    image: '/authors/hannah-finch.jpg',
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
    image: `https://www.coart.studio${author.image}`,
    worksFor: { '@id': 'https://www.coart.studio/#organization' },
  }
}
