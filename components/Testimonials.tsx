'use client'
import { motion } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'

const Stars = () => (
  <div style={{ display: 'flex', gap: 3 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#2563EB">
        <path d="M8 1.3l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.17 4.48 12.1l.67-3.92L2.3 5.4l3.94-.57L8 1.3z"/>
      </svg>
    ))}
  </div>
)

const Avatar = ({ initials, grad }: { initials: string; grad: string }) => (
  <div style={{
    width: 40, height: 40, borderRadius: '50%', background: grad,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', flexShrink: 0,
  }}>{initials}</div>
)

const cards = [
  { quote: '"Transformed our lead generation completely. The quality of meetings was exceptional."', name: 'Sarah Johnson', title: 'CEO, Helpcare AI', initials: 'SJ', grad: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)' },
  { quote: '"We achieved +$85K in additional revenue in just one quarter with their systematic approach."', name: 'Michael Chen', title: 'Founder, Vention', initials: 'MC', grad: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)' },
  { quote: '"The targeting is unlike anything we\'d tried before. They find prospects who actually need our solution right now."', name: 'Laura M.', title: 'CRO, PrimaCove', initials: 'LM', grad: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)' },
]

export default function Testimonials() {
  return (
    <section className="r-section" style={{ padding: '100px 0', background: '#080808' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <SectionBadge label="Faster results. Done-For-You." />
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(24px, 4vw, 38px)',
            fontWeight: 500, letterSpacing: '-0.025em',
            color: '#fff', marginTop: 20, lineHeight: 1.2, textTransform: 'capitalize',
          }}>
            Our system helped businesses<br />like yours.
          </h2>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1, marginBottom: 24 }}
        >
          <div
            className="r-featured-inner"
            style={{
              background: 'radial-gradient(50% 60% at 50% 0%, #161616 0%, #0d0d0d 100%)',
              borderRadius: 19, padding: '48px 48px',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
            }}
          >
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#919191', marginBottom: 8 }}>Overview</p>
              <h3 style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 500, letterSpacing: '-0.02em',
                color: '#dedede', lineHeight: 1.4,
              }}>
                Our system helped FabuLingua add 5 new clients in under 48 Days— fast traction in a competitive market.
              </h3>
              <div style={{ display: 'flex', gap: 40, marginTop: 32, flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 'clamp(32px, 5vw, 40px)', fontWeight: 700, color: '#2563EB', letterSpacing: '-0.03em' }}>32%</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#919191', marginTop: 4 }}>Sales increase in first month.</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 'clamp(32px, 5vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>5×</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#919191', marginTop: 4 }}>Pipeline results. Zero ad spend.</p>
                </div>
              </div>
            </div>
            <div>
              <Stars />
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)', color: '#ccc', lineHeight: 1.7, marginTop: 16, marginBottom: 24 }}>
                "Transformed our lead generation completely. The quality of meetings was exceptional — every conversation felt targeted and relevant."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar initials="SJ" grad="linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)" />
                <div>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff' }}>Sarah Johnson</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#919191', marginTop: 2 }}>CEO, Helpcare AI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 32, flexWrap: 'wrap' }}
        >
          {['FabuLingua', 'CreativeEdge', 'PrimaCove', 'Helpcare AI', 'Vention'].map(name => (
            <span key={name} style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(12px, 2vw, 15px)', color: '#3d3d3d', letterSpacing: '-0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#919191')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3d3d3d')}>
              {name}
            </span>
          ))}
        </motion.div>

        {/* Cards — 3-col → 1-col on mobile */}
        <div className="r-grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1 }}
            >
              <div style={{ background: '#0d0d0d', borderRadius: 19, padding: '28px 28px', display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                <Stars />
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: '#ccc', lineHeight: 1.7, flex: 1 }}>{c.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar initials={c.initials} grad={c.grad} />
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff' }}>{c.name}</p>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#919191', marginTop: 2 }}>{c.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
