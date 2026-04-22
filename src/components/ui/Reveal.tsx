import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

type RevealProps = {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
