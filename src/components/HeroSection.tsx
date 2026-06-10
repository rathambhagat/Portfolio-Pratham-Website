import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden" style={{ background: '#05070a' }}>
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.15) 0%, transparent 70%)',
            top: '-20%',
            left: '-15%',
            animation: 'aurora 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-10%',
            animation: 'aurora 25s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, rgba(167, 139, 250, 0.06) 50%, transparent 70%)',
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'aurora 30s ease-in-out infinite',
          }}
        />
      </div>

      <motion.nav
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="text-[#e2e8f0] font-heading font-bold text-xl tracking-tight">PB</span>
        <div className="flex gap-6 md:gap-8">
          {['About', 'Services', 'Projects', 'Contact'].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#94a3b8] font-medium tracking-wide text-sm hover:text-[#e2e8f0] transition-colors duration-200 cursor-pointer hidden sm:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <motion.div
          className="flex items-center gap-2.5 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div
            className="w-2 h-2 rounded-full bg-[#5eead4]"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          <span className="text-[#94a3b8] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase font-heading">
            Systems Engineer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="heading-gradient font-heading font-bold text-center leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3.5rem, 16vw, 15rem)' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            PRATHAM
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-2 sm:-mt-4 md:-mt-6">
          <motion.h1
            className="heading-gradient font-heading font-bold text-center leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3.5rem, 16vw, 15rem)' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            BHAGAT
          </motion.h1>
        </div>

        <motion.p
          className="text-[#94a3b8] text-center font-light max-w-lg mt-8 sm:mt-10 leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Building high-leverage tools and async systems for fast-growing startups and founders.
        </motion.p>

        <motion.a
          href="#contact"
          className="glow-button mt-8 px-8 py-3.5 rounded-full font-heading font-medium text-sm tracking-wider text-[#e2e8f0] cursor-pointer no-underline hover:scale-[1.03] transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Get in Touch
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <span className="text-[#475569] text-[0.65rem] tracking-[0.3em] uppercase font-heading">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-[#475569]/50 flex justify-center pt-2">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#5eead4]"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
