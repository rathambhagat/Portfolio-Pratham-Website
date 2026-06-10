import Magnet from './Magnet'

export function ContactButton() {
  return (
    <Magnet padding={80} strength={4}>
      <a
        href="#contact"
        className="glow-button relative inline-flex items-center rounded-full font-heading font-medium tracking-wider text-[#e2e8f0] cursor-pointer px-8 py-3.5 sm:px-10 sm:py-4 text-sm no-underline hover:scale-[1.03] transition-transform duration-300"
      >
        Contact Me
      </a>
    </Magnet>
  )
}
