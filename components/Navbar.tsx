'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlowButton from './ui/GlowButton'

const links = [
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Mission',  href: '#mission' },
  { label: 'Services', href: '#services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="r-nav-header"
      initial={{ opacity: 0, y: -16, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 26,
        left: '50%',
        zIndex: 100,
        width: 'calc(100% - 48px)',
        maxWidth: 960,
      }}
    >
      <div style={{
        background: 'linear-gradient(180deg, #262626 0%, rgba(33,33,33,0.4) 100%)',
        borderRadius: 40,
        padding: 1,
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
      }}>
        <nav
          className="r-nav-inner"
          style={{
            background: '#050505',
            borderRadius: 40,
            padding: '13px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          {/* Logo */}
          <a href="/" style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: '-0.03em',
            color: '#fff',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            Pipe<span className="text-gradient">Born</span>
          </a>

          {/* Links — hidden on mobile */}
          <div
            className="r-nav-links"
            style={{ display: 'flex', alignItems: 'center', gap: 28 }}
          >
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#afafaf',
                  transition: 'color 0.3s cubic-bezier(.44,0,.56,1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#afafaf')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <GlowButton href="https://calendly.com/alex-meetpius/30min" label="Let's Talk" variant="dark" />
        </nav>
      </div>
    </motion.header>
  )
}
