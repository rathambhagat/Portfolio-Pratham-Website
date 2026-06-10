import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <motion.h2
      className={`heading-gradient-subtle font-heading font-bold uppercase leading-none tracking-tight text-center ${className}`}
      style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.h2>
  )
}
