'use client'
import { motion } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'
import GlowButton from './ui/GlowButton'

const stats = [
  { val: '15+',    label: 'Qualified calls\nbooked per month' },
  { val: '60d',    label: 'Average time to\nfull pipeline' },
  { val: '4.2%',   label: 'Average cold email\nreply rate' },
  { val: '$8.5K+', label: 'Monthly savings vs\nhiring an SDR' },
]

const outcomes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
      </svg>
    ),
    title: 'Zero domain burnouts',
    body: 'Proper SPF, DKIM, DMARC and inbox warm-up from day one — your emails land in primary, not spam.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'First replies within 2 weeks',
    body: 'We move fast. Most clients see their first positive replies and booked calls within 2–3 weeks of launch.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'You just take the calls',
    body: 'We handle everything — lists, infra, copy, campaigns, optimisation. Your only job is showing up to the meeting.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 16l4-6 4 4 4-8"/>
      </svg>
    ),
    title: 'Weekly reporting',
    body: 'Full transparency — open rates, reply rates, calls booked, and what we\'re testing next. No black boxes.',
  },
]

export default function Testimonials() {
  return (
    <section className="r-section" style={{ padding: '100px 0', background: '#080808' }}>
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <SectionBadge label="What You Can Expect" />
          <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', marginTop: 20, lineHeight: 1.2 }}>
            Outbound That Pays For Itself.
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(14px, 2vw, 16px)', color: '#afafaf', marginTop: 14, lineHeight: 1.65, maxWidth: 480, margin: '14px auto 0' }}>
            Numbers based on real campaigns we've run. Not promises — benchmarks.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1, marginBottom: 24 }}
        >
          <div style={{ background: 'radial-gradient(50% 80% at 50% 0%, #161616 0%, #0d0d0d 100%)', borderRadius: 19, padding: '40px 48px' }}>
            <div className="r-grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.val}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '24px 20px',
                    borderRight: i < stats.length - 1 ? '1px solid #1e1e1e' : 'none',
                  }}
                >
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.04em', color: i % 2 === 0 ? '#2563EB' : '#fff', lineHeight: 1 }}>
                    {s.val}
                  </p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#555', marginTop: 10, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Instantly proof screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 24 }}
        >
          <div style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1 }}>
            <div style={{ background: '#0d0d0d', borderRadius: 19, padding: '24px 24px 16px' }}>
              {/* Header bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#ff5f57','#febc2e','#28c840'].map(c => (
                      <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#3d3d3d', marginLeft: 6 }}>
                    Instantly — Live Campaign Analytics
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[
                    { val: '11.6K', label: 'Sequences' },
                    { val: '4.43%', label: 'Reply rate' },
                    { val: '$2.3M', label: 'Pipeline' },
                  ].map(s => (
                    <div key={s.label} style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 8, padding: '4px 12px', textAlign: 'center' }}>
                      <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 13, fontWeight: 700, color: '#2563EB' }}>{s.val}</span>
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, color: '#555', marginLeft: 5 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Screenshot */}
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #1a1a1a' }}>
                <img
                  src="/instantly.png"
                  alt="Instantly campaign analytics — real results"
                  style={{ width: '100%', display: 'block', borderRadius: 12 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Outcomes grid */}
        <div className="r-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }}>
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: 'linear-gradient(180deg, #141414 0%, #0d0d0d 100%)', border: '1px solid #1a1a1a', borderRadius: 16, padding: '28px 28px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {o.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 8, letterSpacing: '-0.02em' }}>
                    {o.title}
                  </h4>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#919191', lineHeight: 1.65 }}>
                    {o.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#555', marginBottom: 20 }}>
            Be among the first to see these results in your pipeline.
          </p>
          <GlowButton label="Book A Free Strategy Call" icon="calendar" variant="accent" />
        </motion.div>

      </div>
    </section>
  )
}
