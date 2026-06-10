import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.3'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>
            <AnimatedWord word={word} scrollYProgress={scrollYProgress} start={start} end={end} />
          </span>
        )
      })}
    </p>
  )
}

function AnimatedWord({ word, scrollYProgress, start, end }: { word: string; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']; start: number; end: number }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1])
  const y = useTransform(scrollYProgress, [start, end], [6, 0])
  return (
    <motion.span style={{ opacity, y, display: 'inline-block' }} aria-hidden>
      {word}
    </motion.span>
  )
}
