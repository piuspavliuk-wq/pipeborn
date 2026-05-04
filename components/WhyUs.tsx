'use client'
import { motion } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'
import ParticleCanvas from './ui/ParticleCanvas'
import GlowButton from './ui/GlowButton'

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
)
const ThumbIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v12"/>
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
  </svg>
)
const UsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const cards = [
  { icon: <BrainIcon />, title: 'Pain-focused offer refinement', body: 'We tune your offer to speak your market\'s language and solve their top pain. No jargon. Just messaging that lands and converts.' },
  { icon: <ThumbIcon />, title: 'Targeted leads with real Interest', body: 'We fill your pipeline with leads actually interested in your service/product — by solving real pain, not guessing generic offers.' },
  { icon: <UsersIcon />, title: 'Streamlined sales process', body: 'We handle the boring outbound, refine your offer, and send you live, meeting-ready leads straight to Slack to minimize response time.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="r-section" style={{ padding: '100px 0' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <SectionBadge label="Why Us" />
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginTop: 20,
            lineHeight: 1.2,
          }}>
            We Connect You With Your<br />Dream Clients.
          </h2>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#afafaf',
            marginTop: 16,
            lineHeight: 1.6,
          }}>
            We win the deals. Your sales team just takes the sales calls — all of them.
          </p>
        </motion.div>

        {/* Cards — 3-col → 1-col on mobile */}
        <div className="r-grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: 'linear-gradient(180deg, #262626 0%, #111 100%)', borderRadius: 23, padding: 1 }}
            >
              <div style={{
                background: 'radial-gradient(46% 31% at 50% 0%, #1e1e1e 0%, #111 100%)',
                borderRadius: 22,
                padding: '32px 32px 40px',
                display: 'flex', flexDirection: 'column', gap: 24, height: '100%',
              }}>
                {/* Icon area */}
                <div
                  className="r-prop-screen"
                  style={{
                    background: 'radial-gradient(57% 65% at 50% 50%, #0e0e0e 0%, #050505 100%)',
                    border: '1px solid #262626',
                    borderRadius: 18,
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '16/10',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <ParticleCanvas />
                  </div>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                      style={{
                        width: 68, height: 68, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                        border: '1px solid #3B82F6',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 0 12px rgba(37,99,235,0.1), 0 0 32px rgba(37,99,235,0.25)',
                      }}
                    >
                      {card.icon}
                    </motion.div>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontFamily: 'Satoshi, sans-serif', fontSize: 20, fontWeight: 500,
                    letterSpacing: '-0.02em', color: '#fff', textTransform: 'capitalize', marginBottom: 10,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: '#afafaf', lineHeight: 1.65 }}>
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}
        >
          <GlowButton href="https://calendly.com/alex-meetpius/30min" label="Get Ideal Clients" variant="dark" />
        </motion.div>
      </div>
    </section>
  )
}
