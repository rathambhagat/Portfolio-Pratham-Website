import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

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

  const slideDirection = index % 2 === 0 ? -1 : 1
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [slideDirection * 200, 0, 0, slideDirection * 200])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92])

  return (
    <motion.div
      ref={cardRef}
      className="glass-card max-w-5xl mx-auto w-full rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 md:mb-20"
      style={{ x, opacity, scale }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex items-baseline gap-4">
          <span
            className="heading-gradient font-heading font-bold leading-none"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            {project.num}
          </span>
          <div className="flex flex-col">
            <span className="text-[#5eead4] uppercase tracking-[0.2em] text-xs font-heading font-medium">
              {project.category}
            </span>
            <span
              className="text-[#e2e8f0] font-heading font-bold leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
            >
              {project.name}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <p
          className="text-[#94a3b8] font-light leading-relaxed max-w-xl"
          style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
        >
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3.5 py-1 text-xs font-heading font-medium uppercase tracking-wider text-[#5eead4]/70"
              style={{
                background: 'rgba(94, 234, 212, 0.06)',
                border: '1px solid rgba(94, 234, 212, 0.1)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 max-h-[260px] sm:max-h-[300px] md:max-h-[340px] overflow-hidden rounded-2xl">
        <div className="flex flex-col gap-3" style={{ width: '40%' }}>
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
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 relative"
      style={{ background: '#05070a' }}
    >
      <SectionHeading className="mb-16 sm:mb-20 md:mb-28">Projects</SectionHeading>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
