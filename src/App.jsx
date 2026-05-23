// App.jsx — Pratham Pradeep Bhagat · Portfolio
// Vite + React · Tailwind CSS v3 (darkMode: 'class') · Framer Motion · lucide-react

import { useReducedMotion, motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Terminal, Zap, Code2 } from "lucide-react";

// ─── Animation helpers ──────────────────────────────────────────────────────

function useFadeUp(reduced) {
  return {
    hidden:  { opacity: 0, y: reduced ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };
}

const TRANSITION_BASE   = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
const TRANSITION_STAGGER = { ...TRANSITION_BASE, staggerChildren: 0.1 };

// ─── Data ───────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "concierge-ai",
    name: "Concierge AI",
    tagline: "WhatsApp-Based AI Order Management System",
    icon: Zap,
    bullets: [
      "Built async AI chat architecture over WhatsApp API for end-to-end order processing, retail workflows, and live inventory tracking.",
      "Event-driven backend handles concurrent customer interactions — zero app installs required for end users.",
    ],
    tags: ["Python", "Async", "WhatsApp API", "Event-Driven"],
  },
  {
    id: "authtrail",
    name: "AuthTrail",
    tagline: "Terminal-Based Decision & Work Review Log",
    icon: Terminal,
    bullets: [
      "Lightweight Python CLI for auditing subordinate work updates with local data persistence.",
      "Built on Python Standard Library only — zero external dependencies, immediate portability across environments.",
    ],
    tags: ["Python", "CLI", "stdlib", "Local-First"],
  },
];

const SKILLS = [
  { category: "Languages",      items: ["Python", "C", "C++"] },
  { category: "Concepts",       items: ["Data Structures & Algorithms", "Event-Driven Architecture", "Async Systems"] },
  { category: "Tooling",        items: ["Git", "GitHub", "Linux / CLI"] },
];

// ─── Small reusable pieces ──────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
      {children}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">
      <span className="text-cyan-400 mr-2">§</span>{children}
    </h2>
  );
}

// ─── Sections ───────────────────────────────────────────────────────────────

function Hero({ reduced }) {
  const fadeUp = useFadeUp(reduced);

  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)" }}
      />

      <motion.div
        className="relative z-10 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: TRANSITION_STAGGER } }}
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} transition={TRANSITION_BASE} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            Open to technical internships — July 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          transition={TRANSITION_BASE}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-100 mb-3"
        >
          Pratham Bhagat
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={fadeUp}
          transition={TRANSITION_BASE}
          className="text-base sm:text-lg text-cyan-400 font-mono mb-6"
        >
          Systems Engineer · Building high-leverage tools for fast-growing startups & founders
        </motion.p>

        {/* Hero copy */}
        <motion.p
          variants={fadeUp}
          transition={TRANSITION_BASE}
          className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
        >
          I'm a second-year B.Tech student building practical software that ships. From WhatsApp-integrated
          production pipelines to local-first CLI utilities, I focus on async systems, clean architecture,
          and frictionless user experiences that drive business value.
        </motion.p>

        {/* CTA links */}
                <motion.div
          variants={fadeUp}
          transition={TRANSITION_BASE}
          className="flex flex-wrap gap-3"
        >
          <a
            href="https://github.com/rathambhagat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-100 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          >
            <Github size={15} aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratham-bhagat-38489a39b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-100 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          >
            <Linkedin size={15} aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="mailto:prathambhagat720@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium hover:bg-cyan-400/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          >
            <Mail size={15} aria-hidden="true" /> Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono text-gray-600">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </header>
  );
}

function Projects({ reduced }) {
  const fadeUp = useFadeUp(reduced);

  return (
    <section
      aria-label="Projects"
      className="px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Projects</SectionHeading>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: TRANSITION_STAGGER } }}
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                transition={TRANSITION_BASE}
                className="group relative rounded-xl border border-gray-800 bg-gray-900/70 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-gray-700 transition-colors"
                style={{ "--fallback-bg": "#111827" }}
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(400px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(6,182,212,0.04), transparent 60%)" }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shrink-0">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-gray-100 font-semibold text-base leading-tight">{project.name}</h3>
                      <p className="text-gray-500 text-xs font-mono mt-0.5">{project.tagline}</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-gray-700 shrink-0 mt-1" aria-hidden="true" />
                </div>

                <ul className="flex flex-col gap-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                      <span className="text-cyan-400/60 font-mono mt-0.5 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Skills({ reduced }) {
  const fadeUp = useFadeUp(reduced);

  return (
    <section
      aria-label="Skills"
      className="px-6 sm:px-12 lg:px-24 py-24 border-t border-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Skills</SectionHeading>

        <motion.div
          className="grid gap-8 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: TRANSITION_STAGGER } }}
        >
          {SKILLS.map(({ category, items }) => (
            <motion.div key={category} variants={fadeUp} transition={TRANSITION_BASE}>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">{category}</p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <Code2 size={12} className="text-gray-700 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact({ reduced }) {
  const fadeUp = useFadeUp(reduced);

  return (
    <footer
      aria-label="Contact"
      className="px-6 sm:px-12 lg:px-24 py-24 border-t border-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Contact</SectionHeading>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: TRANSITION_STAGGER } }}
        >
          <motion.div variants={fadeUp} transition={TRANSITION_BASE} className="max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3">
              Let's build something.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Available for technical internships from July 2026. If you're working on
              something interesting, I'd love to hear about it.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={TRANSITION_BASE}
            className="flex flex-col gap-3 shrink-0"
          >
            <a
              href="mailto:prathambhagat720@gmail.com"
              className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
            >
              <Mail size={14} aria-hidden="true" className="text-cyan-400" />
              prathambhagat720@gmail.com
            </a>
            <a
              href="tel:+918830752846"
              className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
            >
              <Phone size={14} aria-hidden="true" className="text-cyan-400" />
              +91 88307 52846
            </a>
            <a
              href="https://github.com/rathambhagat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
            >
              <Github size={14} aria-hidden="true" className="text-cyan-400" />
              github.com/rathambhagat
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-bhagat-38489a39b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
            >
              <Linkedin size={14} aria-hidden="true" className="text-cyan-400" />
              linkedin.com/in/pratham-bhagat
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-xs font-mono text-gray-700 border-t border-gray-900 pt-8"
        >
          © 2025 Pratham Pradeep Bhagat · Built with React + Tailwind
        </motion.p>
      </div>
    </footer>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────

export default function App() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Skip-to-content — first focusable element */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-400 focus:text-gray-950 focus:text-sm focus:font-semibold focus:outline-none"
      >
        Skip to content
      </a>

      <div
        className="min-h-screen bg-gray-950 text-gray-100"
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        <Hero reduced={reduced} />

        <main id="main-content">
          <Projects reduced={reduced} />
          <Skills   reduced={reduced} />
        </main>

        <Contact reduced={reduced} />
      </div>
    </>
  );
}