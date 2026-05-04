'use client'
import { motion } from 'framer-motion'
import GlowButton from './ui/GlowButton'
import AnimatedWord from './ui/AnimatedWord'

export default function Hero() {
  return (
    <section className="r-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '140px 24px 80px', overflow: 'hidden' }}>

      {/* Blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 382, height: 480,
          top: -85, left: '55%', transform: 'rotate(19deg)',
          background: '#1e3a8a', borderRadius: '50%', opacity: 0.35 }} />
        <div style={{ position: 'absolute', width: 284, height: 320,
          bottom: 139, left: '25%', transform: 'rotate(-30deg)',
          background: '#1d4ed8', borderRadius: '50%', opacity: 0.3 }} />
        <div style={{ position: 'absolute', width: 677, height: 584,
          top: '50%', left: '50%', transform: 'translate(-50%, -55%)',
          background: '#2563eb', borderRadius: '50%', opacity: 0.22 }} />
        <div style={{ position: 'absolute', width: 335, height: 600,
          top: '5%', left: '18%', transform: 'rotate(-23deg)',
          background: '#93c5fd', borderRadius: '50%', opacity: 0.08 }} />
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(58px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 400,
          background: 'linear-gradient(rgba(5,5,5,0) 0%, #050505 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, width: '100%', margin: '0 auto' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: 28 }}
        >
          <div className="badge-outer" style={{ display: 'inline-flex' }}>
            <div className="badge-inner">B2B Growth System</div>
          </div>
        </motion.div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(32px, 6vw, 72px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: '#fff',
          marginBottom: 24,
        }}>
          <AnimatedWord text="We Build" delay={0.15} />
          <AnimatedWord text="Growth" delay={0.25} accentWords={['Growth']} />
          <AnimatedWord text="Systems" delay={0.31} />
          <br />
          <AnimatedWord text="For B2B Tech" delay={0.37} />
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#afafaf',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 auto 40px',
          }}
        >
          Connect with the right clients predictably and consistently —
          without expensive SDRs, unreliable referrals, or hit-and-miss
          agencies — powered by systems that keep your pipeline full.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="r-hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          <GlowButton href="#services" label="Discover the System" variant="dark" />
          <GlowButton href="https://calendly.com/alex-meetpius/30min" label="Book A Call" variant="accent" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
              <rect x="1" y="1" width="18" height="30" rx="9" stroke="#3d3d3d" strokeWidth="1.5" />
              <motion.rect x="9" y="6" width="2" height="7" rx="1" fill="#2563EB"
                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
            </svg>
          </motion.div>
          <span style={{ fontSize: 10, color: '#3d3d3d', fontFamily: 'Manrope', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
