import { useRef, useEffect, useState } from 'react'

// Tech-themed and project images for the marquee
const IMAGES = [
  { id: 0, src: '/images/tech/servers.png', alt: 'Server infrastructure' },
  { id: 1, src: '/images/projects/concierge-dashboard.png', alt: 'Concierge AI dashboard' },
  { id: 2, src: '/images/tech/code.png', alt: 'Code editor' },
  { id: 3, src: '/images/projects/authtrail-cli.png', alt: 'AuthTrail CLI' },
  { id: 4, src: '/images/tech/git.png', alt: 'Git branching' },
  { id: 5, src: '/images/projects/concierge-chat.png', alt: 'Concierge AI chat' },
  { id: 6, src: '/images/tech/architecture.png', alt: 'System architecture' },
  { id: 7, src: '/images/projects/authtrail-data.png', alt: 'AuthTrail data' },
  { id: 8, src: '/images/projects/concierge-architecture.png', alt: 'Concierge architecture' },
  { id: 9, src: '/images/projects/authtrail-overview.png', alt: 'AuthTrail overview' },
]

const ROW1 = IMAGES.slice(0, 5)
const ROW2 = IMAGES.slice(5)

function MarqueeRow({ images, offset, direction }: { images: typeof IMAGES; offset: number; direction: 1 | -1 }) {
  const tripled = [...images, ...images, ...images]
  const translateX = direction === 1 ? offset - 200 : -(offset - 200)

  return (
    <div className="flex gap-3 overflow-visible" style={{ willChange: 'transform', transform: `translateX(${translateX}px)` }}>
      {tripled.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="rounded-2xl object-cover flex-shrink-0"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} offset={offset} direction={1} />
        <MarqueeRow images={ROW2} offset={offset} direction={-1} />
      </div>
    </section>
  )
}
