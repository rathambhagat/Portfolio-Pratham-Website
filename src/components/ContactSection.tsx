import FadeIn from './FadeIn'

/* Inline SVG icons to avoid lucide-react export issues */
function LinkedinIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function MailIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pratham-bhagat-38489a39b/',
    Icon: LinkedinIcon,
    color: '#0A66C2',
    display: 'Pratham Bhagat',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rathambhagat',
    Icon: GithubIcon,
    color: '#D7E2EA',
    display: 'rathambhagat',
  },
  {
    label: 'Email',
    href: 'mailto:prathambhagat720@gmail.com',
    Icon: MailIcon,
    color: '#EA4335',
    display: 'prathambhagat720@gmail.com',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      {/* Gradient divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[80%]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(182,0,168,0.5) 30%, rgba(118,33,176,0.5) 70%, transparent 100%)',
        }}
      />

      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="text-center text-[#D7E2EA]/70 font-light max-w-md mx-auto mb-14 sm:mb-18 md:mb-20"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
        >
          Have a project in mind or want to collaborate? Let&apos;s connect &mdash; I&apos;m always open to interesting conversations.
        </p>
      </FadeIn>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 justify-center items-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
        {CONTACT_LINKS.map((link, i) => (
          <FadeIn key={link.label} delay={0.2 + i * 0.1}>
            <a
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              id={`contact-${link.label.toLowerCase()}`}
              className="group flex items-center gap-4 rounded-2xl border-2 border-[#D7E2EA]/15 px-7 py-5 sm:px-8 sm:py-6 transition-all duration-300 hover:border-[#D7E2EA]/40 hover:scale-[1.03] w-full sm:w-auto no-underline"
              style={{ background: 'rgba(215,226,234,0.03)' }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300"
                style={{ background: `${link.color}15` }}
              >
                <link.Icon
                  size={24}
                  color={link.color}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[0.65rem] font-medium">
                  {link.label}
                </span>
                <span
                  className="text-[#D7E2EA] font-medium truncate max-w-[220px]"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
                >
                  {link.display}
                </span>
              </div>
              <ArrowUpRightIcon
                size={18}
                className="text-[#D7E2EA]/30 ml-auto transition-all duration-300 group-hover:text-[#D7E2EA]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Footer */}
      <FadeIn delay={0.5}>
        <div className="text-center">
          <p
            className="text-[#D7E2EA]/30 font-light uppercase tracking-widest"
            style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)' }}
          >
            &copy; {new Date().getFullYear()} Pratham Bhagat &mdash; Built with passion
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
