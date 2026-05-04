'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CALENDLY = 'https://calendly.com/alex-meetpius/30min'

interface Props {
  href?: string
  label: string
  variant?: 'dark' | 'accent'
  icon?: 'arrow' | 'calendar'
  className?: string
}

const ArrowIcon = ({ flip }: { flip: boolean }) => (
  <motion.svg width="15" height="15" viewBox="0 0 16 16" fill="none"
    initial={false}
    animate={{ rotate: flip ? -45 : 0 }}
    transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
)

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
)

export default function GlowButton({ href, label, variant = 'dark', icon = 'arrow', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const finalHref = href ?? CALENDLY
  const isExternal = finalHref.startsWith('http') || finalHref.startsWith('tel') || finalHref.startsWith('mailto')

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 })
  }

  const glow = 'rgb(30, 64, 175)'

  return (
    <motion.a
      ref={ref}
      href={finalHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={onMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative inline-flex items-center gap-2 cursor-pointer select-none ${className}`}
      style={{ background: 'linear-gradient(180deg, #262626 0%, rgba(33,33,33,0.4) 100%)', borderRadius: 7, padding: '10px 22px' }}
    >
      <span style={{ position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none', background: `radial-gradient(20.7% 50% at ${pos.x}% ${pos.y}%, ${glow} 0%, transparent 100%)`, transition: 'background 0.05s' }} />
      <span style={{ position: 'absolute', inset: 0, borderRadius: 7, pointerEvents: 'none', background: `radial-gradient(25% 50% at ${pos.x}% ${pos.y}%, ${glow} 0%, transparent 100%)`, filter: 'blur(15px)', transition: 'background 0.05s' }} />
      <span style={{ position: 'absolute', inset: 1, borderRadius: 6, background: 'rgb(13,13,13)', pointerEvents: 'none' }} />
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 7 }}>
        {icon === 'calendar' && <span className={variant === 'accent' ? 'text-gradient' : ''}><CalendarIcon /></span>}
        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, fontWeight: variant === 'accent' ? 600 : 500 }}
          className={variant === 'accent' ? 'text-gradient' : 'text-white'}>
          {label}
        </span>
        {icon === 'arrow' && <span className={variant === 'accent' ? 'text-gradient' : ''}><ArrowIcon flip={hovered} /></span>}
      </span>
    </motion.a>
  )
}
