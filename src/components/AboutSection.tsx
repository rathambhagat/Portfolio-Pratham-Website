import AnimatedText from './AnimatedText'
import SectionHeading from './SectionHeading'
import { ContactButton } from './Buttons'

const ABOUT_TEXT =
  'I am a systems engineer built from the ground up and an expert in Git. I focus on async systems, clean architecture, and frictionless user experiences that drive business value. I truly enjoy working with founders and fast-growing startups to build practical software that ships. Let\u2019s build something incredible together!'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40"
      style={{ background: '#05070a' }}
    >
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 max-w-3xl">
        <SectionHeading>About</SectionHeading>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#e2e8f0] font-light text-center leading-relaxed"
          style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.5rem)' }}
        />

        <ContactButton />
      </div>
    </section>
  )
}
