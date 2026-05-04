'use client'
import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  accentWords?: string[]
}

export default function AnimatedWord({ text, className = '', delay = 0, accentWords = [] }: Props) {
  const words = text.split(' ')

  return (
    <span className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => {
        const isAccent = accentWords.includes(word)
        return (
          <motion.span
            key={i}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.06,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            {isAccent ? (
              <span className="text-gradient">{word}</span>
            ) : word}
          </motion.span>
        )
      })}
    </span>
  )
}
