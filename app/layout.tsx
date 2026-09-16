import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coart.studio'),
  title: {
    default: 'CoArt Studio: Digital Marketing, Branding, Web & AI Built by Humans Who Care',
    template: '%s | CoArt Studio',
  },
  description:
    'Social media, brand identity, custom websites, mobile apps, and AI automation crafted by real designers, strategists, and developers. Not AI slop. Dubai digital agency.',
  keywords: [
    'digital agency',
    'branding agency',
    'web development agency',
    'mobile app development',
    'AI automation',
    'digital marketing',
    'brand identity design',
    'CoArt Studio',
  ],
  authors: [{ name: 'CoArt Studio' }],
  creator: 'CoArt Studio',
  publisher: 'CoArt Studio',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'CoArt Studio',
    title: 'CoArt Studio: Digital Marketing, Branding, Web & AI Built by Humans Who Care',
    description:
      'Social media, brand identity, custom websites, mobile apps, and AI automation crafted by real designers, strategists, and developers. Not AI slop. Dubai digital agency.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CoArt Studio — Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoArt Studio: Digital Marketing, Branding, Web & AI Built by Humans Who Care',
    description:
      'Social media, brand identity, custom websites, mobile apps, and AI automation crafted by real designers, strategists, and developers. Dubai digital agency.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased bg-stone-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.coart.studio/#organization',
                  name: 'CoArt Studio',
                  url: 'https://www.coart.studio',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.coart.studio/coart-logo.png',
                  },
                  sameAs: ['https://www.instagram.com/coartstudio'],
                  description:
                    'Human-first digital agency crafting social media, brand identity, custom websites, mobile apps, and AI automation. Real designers, strategists, and developers in Dubai.',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.coart.studio/#website',
                  url: 'https://www.coart.studio',
                  name: 'CoArt Studio',
                  publisher: {
                    '@id': 'https://www.coart.studio/#organization',
                  },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.coart.studio/#webpage',
                  url: 'https://www.coart.studio',
                  name: 'CoArt Studio: Digital Marketing, Branding, Web & AI Built by Humans Who Care',
                  isPartOf: {
                    '@id': 'https://www.coart.studio/#website',
                  },
                  about: {
                    '@id': 'https://www.coart.studio/#organization',
                  },
                  description:
                    'Social media, brand identity, custom websites, mobile apps, and AI automation crafted by real designers, strategists, and developers. Not AI slop. Dubai digital agency.',
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://www.coart.studio/#service',
                  name: 'CoArt Studio',
                  url: 'https://www.coart.studio',
                  image: 'https://www.coart.studio/coart-logo.png',
                  priceRange: '$$',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Digital Agency Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Brand Identity Design',
                          description:
                            'Logo design, visual identity systems, brand strategy, and brand guidelines.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Web & Mobile App Development',
                          description:
                            'Custom websites, mobile apps, SaaS platforms, and API architecture.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI-Powered Automation',
                          description:
                            'AI search optimization, business AI integration, lead generation, and workflow automation.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Digital Marketing',
                          description:
                            'SEO, social media management, paid advertising, and performance analytics.',
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-BDMELG31WR" />
      </body>
    </html>
  )
}