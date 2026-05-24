import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import { ContactButton } from './Buttons'

const ABOUT_TEXT =
  'I am a systems engineer built from the ground up and an expert in Git. I focus on async systems, clean architecture, and frictionless user experiences that drive business value. I truly enjoy working with founders and fast-growing startups to build practical software that ships. Let\u2019s build something incredible together!'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner images */}
      <img src="/images/tech/servers.png" alt="" className="absolute top-12 left-8 w-28 sm:w-36 md:w-44 rounded-2xl opacity-60 rotate-[-6deg]" loading="lazy" />
      <img src="/images/tech/code.png" alt="" className="absolute top-12 right-8 w-28 sm:w-36 md:w-44 rounded-2xl opacity-60 rotate-[6deg]" loading="lazy" />
      <img src="/images/tech/git.png" alt="" className="absolute bottom-12 left-8 w-28 sm:w-36 md:w-44 rounded-2xl opacity-60 rotate-[6deg]" loading="lazy" />
      <img src="/images/tech/architecture.png" alt="" className="absolute bottom-12 right-8 w-28 sm:w-36 md:w-44 rounded-2xl opacity-60 rotate-[-6deg]" loading="lazy" />

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
