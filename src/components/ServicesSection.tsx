import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const SERVICES = [
  {
    num: '01',
    name: 'System Engineering',
    desc: 'Designing and maintaining robust, scalable server infrastructure from bare metal to production. End-to-end system configuration, monitoring, and high-availability setups.',
  },
  {
    num: '02',
    name: 'Git Expert',
    desc: 'Advanced Git workflows including rebasing strategies, submodule management, conflict resolution, and repository structuring for teams of any size.',
  },
  {
    num: '03',
    name: 'Git Server Setup',
    desc: 'Self-hosted Git server deployment and management using Gitea, GitLab, or bare repositories. Complete with authentication, hooks, mirroring, and backup strategies.',
  },
  {
    num: '04',
    name: 'System Optimization',
    desc: 'Performance tuning of Linux/Windows servers, kernel parameters, memory management, disk I/O optimization, and process scheduling for maximum throughput.',
  },
  {
    num: '05',
    name: 'Backend Engineering',
    desc: 'Building async, event-driven architectures that handle concurrent user interactions smoothly.',
  },
  {
    num: '06',
    name: 'CLI & Local-First Tools',
    desc: 'Developing lightweight, highly portable terminal-based utilities focusing on data persistence and zero external dependencies.',
  },
  {
    num: '07',
    name: 'API Integrations',
    desc: 'Seamlessly connecting platforms like WhatsApp API to create end-to-end processing and live tracking workflows.',
  },
  {
    num: '08',
    name: 'Version Control & CI/CD',
    desc: 'Expert-level Git management and deployment strategies designed for fast-moving startups and scalable projects.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 relative"
      style={{ background: '#05070a' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.15), transparent)',
        }}
      />

      <SectionHeading className="mb-16 sm:mb-20 md:mb-24">Services</SectionHeading>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.num}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#5eead4] font-heading font-bold text-sm tracking-wider mb-3 block">
              {svc.num}
            </span>
            <h3
              className="text-[#e2e8f0] font-heading font-semibold mb-2 group-hover:text-[#5eead4] transition-colors duration-300"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
            >
              {svc.name}
            </h3>
            <p
              className="text-[#94a3b8] font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}
            >
              {svc.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
