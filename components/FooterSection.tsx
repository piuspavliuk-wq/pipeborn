'use client'
import { motion } from 'framer-motion'
import GlowButton from './ui/GlowButton'

export default function FooterSection() {
  return (
    <footer>
      {/* Footer CTA card */}
      <section id="contact" style={{ padding: '80px 0 0' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="r-footer-cta"
            style={{
              position: 'relative',
              background: '#050505',
              borderRadius: 20,
              overflow: 'hidden',
              padding: '80px 60px',
              textAlign: 'center',
              border: '1px solid #1a1a1a',
            }}
          >
            {/* Blobs (mirrored from hero) */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', transform: 'rotateY(180deg)' }}>
              <div style={{ position: 'absolute', width: 382, height: 480,
                top: -85, left: '55%', transform: 'rotate(19deg)',
                background: '#1e3a8a', borderRadius: '50%', opacity: 0.3 }} />
              <div style={{ position: 'absolute', width: 677, height: 584,
                top: '50%', left: '50%', transform: 'translate(-50%, -55%)',
                background: '#2563eb', borderRadius: '50%', opacity: 0.18 }} />
              <div className="dot-grid" style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(58px)' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(5,5,5,0) 0%, #050505 100%)',
                opacity: 0.87,
              }} />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontFamily: 'Manrope, sans-serif', fontSize: 13,
                color: '#919191', letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: 20,
              }}>
                PipeBorn
              </p>
              <h2 style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: '#fff',
                lineHeight: 1.15,
                maxWidth: 680,
                margin: '0 auto 16px',
              }}>
                Let's Turn Your Goals Into Reality
              </h2>
              <p style={{
                fontFamily: 'Manrope, sans-serif', fontSize: 16,
                color: '#afafaf', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.6,
              }}>
                PipeBorn is an AI-driven growth optimization agency that uses cutting-edge tech to scale your B2B company.
              </p>
              <GlowButton href="#contact" label="Book A Call" variant="accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bottom */}
      <div style={{ padding: '48px 0 40px', borderTop: '1px solid #1a1a1a', marginTop: 64 }}>
        <div className="section-container r-footer-top" style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 40,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <p style={{
              fontFamily: 'Satoshi, sans-serif', fontSize: 18, fontWeight: 700,
              letterSpacing: '-0.03em', color: '#fff', marginBottom: 12,
            }}>
              Pipe<span className="text-gradient">Born</span>
            </p>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#555', lineHeight: 1.7 }}>
              PipeBorn is an AI-driven growth optimization agency that uses cutting-edge tech to scale your B2B company.
            </p>
          </div>

          {/* Links */}
          <div className="r-footer-links" style={{ display: 'flex', gap: 56 }}>
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3d3d3d', marginBottom: 16 }}>
                Company
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['Why Us', '#why-us'], ['Mission', '#mission'], ['Services', '#services']].map(([l, h]) => (
                  <a key={l} href={h} style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#555',
                    transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#afafaf')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3d3d3d', marginBottom: 16 }}>
                Contact
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[["Let's Talk", '#contact'], ['Book A Call', '#contact'], ['contact@pipeborn.com', 'mailto:contact@pipeborn.com']].map(([l, h]) => (
                  <a key={l} href={h} style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: '#555',
                    transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#afafaf')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="section-container r-footer-bottom" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 40, paddingTop: 24, borderTop: '1px solid #1a1a1a',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#3d3d3d' }}>
            Copyright PipeBorn. All right reserved.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#3d3d3d' }}>
            contact@pipeborn.com
          </p>
        </div>
      </div>
    </footer>
  )
}
