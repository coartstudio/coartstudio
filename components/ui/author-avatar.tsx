import Image from 'next/image'
import type { Author } from '@/lib/authors'

// Headshot that can't be clicked open, dragged out, or saved via right-click:
// the image ignores pointer events and a transparent layer sits on top of it.
export function AuthorAvatar({ author, size }: { author: Author; size: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden select-none bg-gray-100"
      style={{ width: size, height: size }}
    >
      <Image
        src={author.image}
        alt={author.name}
        width={size * 2}
        height={size * 2}
        draggable={false}
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  )
}
