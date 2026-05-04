'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'

const tabs = [
  {
    id: 0,
    label: 'Automated Sales System',
    content: {
      title: 'Automated Sales System',
      body: 'This system puts you in front of the right decision-makers at the right time — and builds a pipeline you can rely on. The result? Predictable growth, stronger relationships, and a process that works 24/7 — even when you don\'t.',
      note: 'Est. Savings: $8,500/month minimum',
      stats: null,
    },
  },
  {
    id: 1,
    label: '+$145,888 in new revenue in 3 months.',
    content: {
      title: '+$145,888 In New Revenue Added In 3 Months.',
      body: 'Partnered with MyoProcess to secure seven major partnerships, resulting in over €250,000 in revenue, adding $145,888 in new revenue, and 15+ meetings per month in just 3 months.',
      note: null,
      stats: [{ val: '15', label: 'Meetings / month' }, { val: '3 mo', label: 'Time to results' }],
    },
  },
  {
    id: 2,
    label: '+$70,221+ in new revenue in 2.5 months.',
    content: {
      title: '+$70,221+ In New Revenue Added In 2.5 Months.',
      body: 'ForPlayers was able to raise prices and add over $70,000 in revenue, with 13+ meetings booked per month in just 2.5 months.',
      note: null,
      stats: [{ val: '13', label: 'Meetings / month' }, { val: '2.5 mo', label: 'Time to results' }],
    },
  },
]

export default function WorkInAction() {
  const [active, setActive] = useState(0)

  return (
    <section className="r-section" style={{ padding: '100px 0' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <SectionBadge label="Our Work in Action" />
        </motion.div>

        {/* Tab layout — stacks on mobile/tablet */}
        <div className="r-grid-tab" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}>

          {/* Tabs */}
          <div className="r-work-tabs" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="r-work-tab-btn"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', padding: '20px 24px',
                  borderLeft: `2px solid ${active === tab.id ? '#2563EB' : '#3d3d3d'}`,
                  transition: 'border-color 0.3s',
                }}
              >
                <p style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: active === tab.id ? '#fff' : '#919191',
                  transition: 'color 0.3s',
                  lineHeight: 1.4,
                }}>
                  {tab.label}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div style={{ background: 'linear-gradient(180deg, #262626 0%, #141414 100%)', borderRadius: 20, padding: 1 }}>
            <div
              className="r-work-content"
              style={{
                background: 'radial-gradient(50% 30% at 50% 0%, #1a1a1a 0%, #111 100%)',
                borderRadius: 19, padding: '36px 40px', minHeight: 260,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    fontWeight: 500,
                    letterSpacing: '-0.025em',
                    color: '#fff',
                    marginBottom: 16,
                    lineHeight: 1.25,
                  }}>
                    {tabs[active].content.title}
                  </h2>
                  <p style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 15,
                    color: '#afafaf',
                    lineHeight: 1.65,
                    marginBottom: 24,
                  }}>
                    {tabs[active].content.body}
                  </p>
                  {tabs[active].content.note && (
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 13,
                      color: '#2563EB',
                      background: 'rgba(37,99,235,0.1)',
                      padding: '5px 12px',
                      borderRadius: 20,
                    }}>
                      {tabs[active].content.note}
                    </span>
                  )}
                  {tabs[active].content.stats && (
                    <div style={{ display: 'flex', gap: 40, marginTop: 8, flexWrap: 'wrap' }}>
                      {tabs[active].content.stats!.map(s => (
                        <div key={s.label}>
                          <p style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: 'clamp(28px, 4vw, 36px)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            color: '#2563EB',
                            lineHeight: 1,
                          }}>{s.val}</p>
                          <p style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 13,
                            color: '#919191',
                            marginTop: 6,
                          }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
