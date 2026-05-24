import FadeIn from './FadeIn'

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
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto divide-y divide-[#0C0C0C]/10">
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1}>
            <div className="flex items-center gap-6 md:gap-10 py-8 sm:py-10 md:py-12">
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {svc.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
