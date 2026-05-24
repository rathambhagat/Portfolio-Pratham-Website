export function ContactButton() {
  return (
    <a
      href="#contact"
      className="rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block text-center no-underline border border-[#D7E2EA]/30 hover:border-[#D7E2EA]/60 transition-all duration-300 hover:scale-[1.04]"
      style={{
        background: 'rgba(215, 226, 234, 0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      Contact Me
    </a>
  )
}
