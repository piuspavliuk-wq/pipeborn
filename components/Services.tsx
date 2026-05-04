'use client'
import { motion } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'

const CodeLine = ({ children, dim }: { children: string; dim?: boolean }) => (
  <div style={{
    fontFamily: 'Roboto Mono, monospace',
    fontSize: 12,
    color: dim ? '#555' : '#afafaf',
    lineHeight: 1.7,
    whiteSpace: 'pre',
  }}>
    {children}
  </div>
)

/* ── SVG icons for feature pills ─────────────────────────── */
const IconLightning = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="M9 16l2 2 4-4"/>
  </svg>
)
const IconChart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-6 4 4 4-8"/>
  </svg>
)
const IconSparkle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
    <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)
const IconSignal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h3M19 12h3M12 2v3M12 19v3"/>
    <path d="M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
)

const pills = [
  { Icon: IconLightning,  label: 'Warm Intros' },
  { Icon: IconCalendar,   label: 'Booked Meetings' },
  { Icon: IconChart,      label: 'Data Insight' },
  { Icon: IconSparkle,    label: 'Personalisation' },
  { Icon: IconShield,     label: 'Lead Qualification' },
  { Icon: IconSignal,     label: 'Offer Refinement' },
]

/* ── Inbox rows for dashboard mockup ─────────────────────── */
const inboxRows = [
  { name: 'outreach@acme.io',        status: 'Active',  sent: 142, dot: '#22c55e' },
  { name: 'growth@techcorp.com',     status: 'Active',  sent: 98,  dot: '#22c55e' },
  { name: 'hello@pipeline.co',       status: 'Warming', sent: 34,  dot: '#3B82F6' },
  { name: 'sales@ventures.dev',      status: 'Active',  sent: 211, dot: '#22c55e' },
  { name: 'contact@scaleup.io',      status: 'Warming', sent: 17,  dot: '#3B82F6' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <SectionBadge label="Our Services" />
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(26px, 4vw, 38px)',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginTop: 20,
            lineHeight: 1.2,
            textTransform: 'capitalize',
          }}>
            Grow fast with a steady flow of new clients.
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, color: '#afafaf', marginTop: 12 }}>
            What makes our system work:
          </p>
        </motion.div>

        {/* Widgets grid */}
        <div className="r-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

          {/* Widget A — AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1 }}
          >
            <div style={{
              background: 'radial-gradient(46% 30% at 50% 0%, #1a1a1a 0%, #0d0d0d 100%)',
              borderRadius: 19, padding: '36px 36px',
            }}>
              <h4 style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 22, fontWeight: 500,
                letterSpacing: '-0.02em', color: '#fff', textTransform: 'capitalize', marginBottom: 14 }}>
                We use AI where it works
              </h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: '#afafaf', lineHeight: 1.65, marginBottom: 28 }}>
                AI doesn't write our emails — it fills in the blanks. We use human-written templates and let AI handle the details, so every message feels personal.
              </p>
              {/* Mock email widget */}
              <div style={{
                background: '#080808',
                border: '1px solid #1e1e1e',
                borderRadius: 12,
                padding: '16px 20px',
              }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                {[
                  { label: 'Warm Intro', status: 'Replied ✓', active: true },
                  { label: 'Personalised Hook', status: 'Delivered', active: true },
                  { label: 'Follow-up #2', status: 'Pending', active: false },
                ].map(row => (
                  <div key={row.label} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 12px', borderRadius: 7,
                    background: 'rgba(255,255,255,0.025)',
                    marginBottom: 5,
                    opacity: row.active ? 1 : 0.4,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB' }} />
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#afafaf' }}>{row.label}</span>
                    </div>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, color: '#555' }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Widget B — Pain targeting */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1 }}
          >
            <div style={{
              background: 'radial-gradient(46% 30% at 50% 0%, #1a1a1a 0%, #0d0d0d 100%)',
              borderRadius: 19, padding: '36px 36px',
            }}>
              <h4 style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 22, fontWeight: 500,
                letterSpacing: '-0.02em', color: '#fff', textTransform: 'capitalize', marginBottom: 14 }}>
                We target by pain, not persona
              </h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: '#afafaf', lineHeight: 1.65, marginBottom: 28 }}>
                We find buyers who actually feel the pain your product solves — using signals like job posts, reviews, news, and role changes. Then we reach out with a message that fits.
              </p>
              {/* Code snippet */}
              <div style={{
                background: '#080808',
                border: '1px solid #1e1e1e',
                borderRadius: 12,
                padding: '16px 20px',
              }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <CodeLine dim>{'// signals detected for lead #4821'}</CodeLine>
                <CodeLine>{''}</CodeLine>
                <CodeLine>{'lead.signals = ['}</CodeLine>
                <CodeLine>{'  "hiring SDR",       // intent'}</CodeLine>
                <CodeLine>{'  "negative G2 review",// pain'}</CodeLine>
                <CodeLine>{'  "new VP of Sales",  // trigger'}</CodeLine>
                <CodeLine>{']'}</CodeLine>
                <CodeLine>{''}</CodeLine>
                <CodeLine dim>{'→ score: 91/100  → sending...'}</CodeLine>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Widget C — full width dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #111 100%)', borderRadius: 20, padding: 1, marginBottom: 48 }}
        >
          <div className="r-dashboard-grid" style={{
            background: 'radial-gradient(46% 30% at 50% 0%, #1a1a1a 0%, #0d0d0d 100%)',
            borderRadius: 19,
            padding: '40px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 56,
            alignItems: 'center',
          }}>
            {/* Left — text + stat */}
            <div>
              <h4 style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 22, fontWeight: 500,
                letterSpacing: '-0.02em', color: '#fff', textTransform: 'capitalize', marginBottom: 14 }}>
                One dashboard to manage 75+ inboxes
              </h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: '#afafaf', lineHeight: 1.65, marginBottom: 32 }}>
                Gone are the volume bottlenecks of 1 SDR = 1 inbox. When you work with us, you send at whatever scale you'd like to send at.
              </p>
              {/* Big stat */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
                <div>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: 52, fontWeight: 700,
                    letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>
                    75<span className="text-gradient">+</span>
                  </p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#555', marginTop: 6 }}>
                    Active inboxes managed
                  </p>
                </div>
                <div style={{ paddingBottom: 6 }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: '4px 10px',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#22c55e' }}>
                      All systems live
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — inbox dashboard mockup */}
            <div className="r-dashboard-visual" style={{
              background: '#080808',
              border: '1px solid #1a1a1a',
              borderRadius: 14,
              overflow: 'hidden',
            }}>
              {/* Dashboard header */}
              <div style={{
                padding: '14px 18px',
                borderBottom: '1px solid #141414',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#ff5f57','#febc2e','#28c840'].map(c => (
                      <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#3d3d3d', marginLeft: 4 }}>
                    Inbox Manager
                  </span>
                </div>
                <div style={{
                  fontFamily: 'Manrope, sans-serif', fontSize: 11,
                  color: '#2563EB', background: 'rgba(37,99,235,0.1)',
                  padding: '3px 9px', borderRadius: 20,
                }}>
                  75 inboxes
                </div>
              </div>

              {/* Column headers */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 80px 60px 70px',
                padding: '8px 18px',
                borderBottom: '1px solid #0f0f0f',
              }}>
                {['Inbox', 'Status', 'Sent', ''].map(h => (
                  <span key={h} style={{ fontFamily: 'Manrope, sans-serif', fontSize: 10,
                    color: '#3d3d3d', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Inbox rows */}
              {inboxRows.map((row, i) => (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 80px 60px 70px',
                    alignItems: 'center',
                    padding: '10px 18px',
                    borderBottom: i < inboxRows.length - 1 ? '1px solid #0f0f0f' : 'none',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      style={{ width: 6, height: 6, borderRadius: '50%', background: row.dot, flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 11, color: '#919191' }}>
                      {row.name}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'Manrope, sans-serif', fontSize: 11,
                    color: row.status === 'Active' ? '#22c55e' : '#3B82F6',
                    background: row.status === 'Active' ? 'rgba(34,197,94,0.08)' : 'rgba(59,130,246,0.08)',
                    padding: '2px 8px', borderRadius: 20, width: 'fit-content',
                  }}>
                    {row.status}
                  </span>
                  <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 11, color: '#555' }}>
                    {row.sent}
                  </span>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(5)].map((_, j) => (
                      <div key={j} style={{
                        width: 3, height: 8 + j * 3,
                        borderRadius: 2,
                        background: j < Math.floor(row.sent / 50) + 1 ? '#2563EB' : '#1a1a1a',
                        alignSelf: 'flex-end',
                      }} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature pills — redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}
        >
          {pills.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.055 }}
              whileHover={{ borderColor: 'rgba(59,130,246,0.4)', y: -2 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                padding: '9px 16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid #1e1e1e',
                borderRadius: 40,
                cursor: 'default',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
            >
              {/* Icon bubble */}
              <div style={{
                width: 24, height: 24,
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3B82F6 100%)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 8px rgba(59,130,246,0.3)',
              }}>
                <Icon />
              </div>
              <span style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: '#919191',
                whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
