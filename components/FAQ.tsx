'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'

const faqs = [
  {
    q: 'How soon can we expect to see results?',
    a: "Most clients start seeing qualified meetings within the first 3–4 weeks. A full pipeline typically forms within 60–90 days depending on your target market and offer clarity. We move fast so you don't wait.",
  },
  {
    q: 'How does payment work?',
    a: 'We offer flexible engagement models. Typically a flat monthly retainer with a performance component tied to meetings booked. We\'ll discuss what makes sense for your specific situation on the call.',
  },
  {
    q: 'How much more cost-effective is this than hiring an SDR?',
    a: 'Hiring a full-time SDR costs $80K–$120K per year in salary plus tools, training, management overhead, and ramp time (often 3–6 months). Our system delivers comparable or better results at a fraction of the cost — typically saving $8,500+ per month.',
  },
  {
    q: 'What\'s your refund policy?',
    a: 'We stand behind our work. If we don\'t hit the agreed-upon meeting targets in the first 60 days, we\'ll continue working at no charge until we do. We only win when you win.',
  },
  {
    q: 'Why choose you over others?',
    a: 'Most agencies send volume. We build systems. We obsess over targeting, messaging, and your offer — not just sending emails. Every campaign is built around real pain signals, not generic personas. The results speak for themselves.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px 0' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <SectionBadge label="Need to Know" />
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginTop: 20,
          }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ borderBottom: '1px solid #1e1e1e' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '24px 0',
                  cursor: 'pointer', gap: 16, textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: 'clamp(16px, 2vw, 22px)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: open === i ? '#fff' : '#919191',
                  transition: 'color 0.3s',
                }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1px solid ${open === i ? '#2563EB' : '#3d3d3d'}`,
                    background: open === i ? '#2563EB' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 15,
                      color: '#afafaf',
                      lineHeight: 1.8,
                      paddingBottom: 24,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
