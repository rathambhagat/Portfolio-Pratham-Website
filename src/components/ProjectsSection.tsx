import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    category: 'Startup / Automation',
    name: 'Concierge AI',
    desc: 'WhatsApp-Based AI Order Management System. Built async AI chat architecture over WhatsApp API for end-to-end order processing, retail workflows, and live inventory tracking.',
    tags: ['Python', 'Async', 'WhatsApp API', 'Event-Driven'],
    images: {
      left1: '/images/projects/concierge-dashboard.png',
      left2: '/images/projects/concierge-chat.png',
      right: '/images/projects/concierge-architecture.png',
    },
  },
  {
    num: '02',
    category: 'Terminal Tools',
    name: 'AuthTrail',
    desc: 'Terminal-Based Decision & Work Review Log. Lightweight Python CLI for auditing subordinate work updates with local data persistence. Built entirely on the Python Standard Library.',
    tags: ['Python', 'CLI', 'stdlib', 'Local-First'],
    images: {
      left1: '/images/projects/authtrail-cli.png',
      left2: '/images/projects/authtrail-data.png',
      right: '/images/projects/authtrail-overview.png',
    },
  },
]

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Slide from left for even index, right for odd index
  const slideDirection = index % 2 === 0 ? -1 : 1
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [slideDirection * 300, 0, 0, slideDirection * 300])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])

  return (
    <motion.div
      ref={cardRef}
      className="max-w-5xl mx-auto w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 p-5 sm:p-7 md:p-9 mb-12 sm:mb-16 md:mb-20"
      style={{
        background: 'rgba(215, 226, 234, 0.03)',
        x,
        opacity,
        scale,
      }}
    >
      {/* Top row */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div className="flex items-baseline gap-4">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 80px)' }}
          >
            {project.num}
          </span>
          <div className="flex flex-col">
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
            >
              {project.name}
            </span>
          </div>
        </div>
      </div>

      {/* Description + tags */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <p
          className="text-[#D7E2EA]/80 font-light leading-relaxed max-w-xl"
          style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
        >
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#D7E2EA]/30 text-[#D7E2EA]/60 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image grid — smaller, contained */}
      <div className="flex gap-2 sm:gap-3 max-h-[260px] sm:max-h-[300px] md:max-h-[340px] overflow-hidden rounded-2xl">
        <div className="flex flex-col gap-2 sm:gap-3" style={{ width: '40%' }}>
          <img
            src={project.images.left1}
            alt={`${project.name} screenshot 1`}
            className="rounded-xl object-cover w-full h-1/2"
            loading="lazy"
          />
          <img
            src={project.images.left2}
            alt={`${project.name} screenshot 2`}
            className="rounded-xl object-cover w-full h-1/2"
            loading="lazy"
          />
        </div>
        <div style={{ width: '60%' }}>
          <img
            src={project.images.right}
            alt={`${project.name} screenshot 3`}
            className="rounded-xl object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <motion.h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '50px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
