import type { Metadata } from 'next'
import Link from 'next/link'

const CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about CoArt Studio, a human-first digital agency in Dubai: services, pricing, process, AI use, and how to get started.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | CoArt Studio',
    description:
      'Answers to common questions about CoArt Studio: services, pricing, process, AI use, and how to get started.',
    url: '/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CoArt Studio FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | CoArt Studio',
    description:
      'Answers to common questions about CoArt Studio: services, pricing, process, AI use, and how to get started.',
    images: ['/og-image.png'],
  },
}

// Answers are HTML so they can link to guides; the FAQPage schema uses the same text with tags stripped,
// which keeps the structured data identical to what visitors see.
const faqs: { question: string; answer: string }[] = [
  {
    question: 'What services does CoArt Studio offer?',
    answer:
      'CoArt Studio offers six services: social media and content production; videography and photography; brand identity design (logo, visual identity, brand strategy, guidelines, pitch decks); web and mobile app development; AI-powered automation, including AI search optimization; and digital marketing (SEO, social media management, paid advertising, analytics).',
  },
  {
    question: 'Where is CoArt Studio based?',
    answer:
      'CoArt Studio is based in Dubai and works with startups, entrepreneurs, and established businesses across the UAE. Content shoots take place in Dubai, and content can be delivered in English and Arabic.',
  },
  {
    question: 'Does CoArt Studio use AI to create its work?',
    answer:
      'CoArt Studio is a human-first agency. Real designers, strategists, directors, and developers lead every project. AI is used as a tool for speed, such as captions, resizing, and automating repetitive work, but the ideas, creative direction, and final decisions come from people.',
  },
  {
    question: 'How much does it cost to hire CoArt Studio?',
    answer:
      'Costs depend on scope, complexity, and timeline, so every project starts with a free discovery call and a tailored proposal. For typical Dubai market ranges, see the guides to <a href="/blog/social-media-content-production-cost-dubai">content production costs</a>, <a href="/blog/social-media-management-cost-dubai">social media management costs</a>, <a href="/blog/product-photography-cost-dubai">product photography costs</a>, <a href="/blog/branding-cost-dubai">branding costs</a>, <a href="/blog/website-cost-dubai">website costs</a>, and <a href="/blog/mobile-app-development-cost-dubai">mobile app costs</a> in Dubai.',
  },
  {
    question: 'How can AI automation help my business?',
    answer:
      'AI automation takes over repetitive work such as lead qualification, follow-ups, and reporting, and AI search optimization helps a brand appear in answers from ChatGPT, Perplexity, and Gemini. CoArt Studio AI clients report up to 70% reduction in manual workload within the first 90 days. Read more in the guide to <a href="/blog/ai-automation-for-small-business">AI automation for small businesses</a>.',
  },
  {
    question: "What is CoArt Studio's process for working with clients?",
    answer:
      'CoArt Studio follows four steps: Discover and Strategize, a deep dive into the business, brand, and goals; Design and Create, turning strategy into brand identities, designs, and content; Build and Launch, bringing products and campaigns to life; and Grow and Optimise, monitoring, testing, and improving results over time.',
  },
  {
    question: 'How do I get started with CoArt Studio?',
    answer:
      `Book a free discovery call. The call covers your goals, challenges, and how CoArt Studio can help, with no obligation. <a href="${CALENDAR_URL}" target="_blank" rel="noopener noreferrer">Book a discovery call</a>.`,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: 'https://www.coart.studio/faq',
  isPartOf: { '@id': 'https://www.coart.studio/#website' },
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.replace(/<[^>]+>/g, ''),
    },
  })),
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors mb-6 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently asked questions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Straight answers about working with CoArt Studio.
        </p>

        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {faqs.map((faq) => (
            <section key={faq.question} className="py-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h2>
              <p
                className="text-gray-700 leading-relaxed [&_a]:text-[#0071BC] [&_a]:font-medium hover:[&_a]:underline"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 p-6 md:p-8 text-center">
          <p className="text-lg font-semibold text-gray-900 mb-4">Have a question that isn&apos;t answered here?</p>
          <Link
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0071BC, #29ABE2)' }}
          >
            Book a discovery call
          </Link>
        </div>
      </div>
    </main>
  )
}
