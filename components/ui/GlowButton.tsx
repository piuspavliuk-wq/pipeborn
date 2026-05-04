'use client'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  href?: string
  children?: React.ReactNode
  label: string
  variant?: 'dark' | 'accent'
  className?: string
  onClick?: () => void
}

const ArrowIcon = ({ flip }: { flip: boolean }) => (
  <motion.svg
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    initial={false}
    animate={{ rotate: flip ? -45 : 0 }}
    transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
  >
    <path d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
)

export default function GlowButton({ href = '#', label, variant = 'dark', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const glowRgb = 'rgb(30, 64, 175)'

  if (variant === 'accent') {
    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={onMouseMove}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className={`relative inline-flex items-center gap-2 cursor-pointer select-none ${className}`}
        style={{
          background: `linear-gradient(180deg, #262626 0%, rgba(33,33,33,0.4) 100%)`,
          borderRadius: 7,
          padding: '10px 22px',
        }}
      >
        {/* Stroke layer */}
        <span style={{
          position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none',
          background: `radial-gradient(20.7% 50% at ${pos.x}% ${pos.y}%, ${glowRgb} 0%, transparent 100%)`,
          transition: 'background 0.05s',
        }} />
        {/* Glow layer */}
        <span style={{
          position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none',
          background: `radial-gradient(25% 50% at ${pos.x}% ${pos.y}%, ${glowRgb} 0%, transparent 100%)`,
          filter: 'blur(15px)',
          transition: 'background 0.05s',
        }} />
        {/* Fill */}
        <span style={{
          position: 'absolute', inset: 1, borderRadius: 6,
          background: 'rgb(13,13,13)', pointerEvents: 'none',
        }} />
        {/* Content */}
        <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="text-gradient font-semibold" style={{ fontFamily: 'Manrope', fontSize: 15 }}>
            {label}
          </span>
          <span className="text-gradient">
            <ArrowIcon flip={hovered} />
          </span>
        </span>
      </motion.a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative inline-flex items-center gap-2 cursor-pointer select-none ${className}`}
      style={{
        background: `linear-gradient(180deg, #262626 0%, rgba(33,33,33,0.4) 100%)`,
        borderRadius: 7,
        padding: '10px 22px',
      }}
    >
      {/* Stroke layer */}
      <span style={{
        position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none',
        background: `radial-gradient(20.7% 50% at ${pos.x}% ${pos.y}%, ${glowRgb} 0%, transparent 100%)`,
        transition: 'background 0.05s',
      }} />
      {/* Glow layer */}
      <span style={{
        position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none',
        background: `radial-gradient(25% 50% at ${pos.x}% ${pos.y}%, ${glowRgb} 0%, transparent 100%)`,
        filter: 'blur(15px)',
        transition: 'background 0.05s',
      }} />
      {/* Fill */}
      <span style={{
        position: 'absolute', inset: 1, borderRadius: 6,
        background: 'rgb(13,13,13)', pointerEvents: 'none',
      }} />
      {/* Content */}
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'Manrope', fontSize: 15, fontWeight: 500, color: '#fff' }}>
        {label}
        <ArrowIcon flip={hovered} />
      </span>
    </motion.a>
  )
}
