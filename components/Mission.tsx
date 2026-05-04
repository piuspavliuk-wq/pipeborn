'use client'
import { motion } from 'framer-motion'
import SectionBadge from './ui/SectionBadge'
import AnimatedWord from './ui/AnimatedWord'
import GlowButton from './ui/GlowButton'

export default function Mission() {
  return (
    <section id="mission" style={{
      padding: '100px 0',
      background: '#080808',
      textAlign: 'center',
      borderTop: '1px solid #1a1a1a',
    }}>
      <div className="section-container" style={{ maxWidth: 760 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <SectionBadge label="Our Mission" />
        </motion.div>

        <h2 style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(30px, 5vw, 56px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: '#fff',
          marginBottom: 32,
        }}>
          <AnimatedWord text="We Drive Businesses" delay={0} />
          <br />
          <AnimatedWord text="Beyond Outdated Tactics." delay={0.1} />
          <br />
          <AnimatedWord text="The New Way To Scale." delay={0.2} accentWords={['The', 'New', 'Way', 'To', 'Scale.']} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <GlowButton href="#contact" label="Book A Call" variant="accent" />
        </motion.div>
      </div>
    </section>
  )
}
