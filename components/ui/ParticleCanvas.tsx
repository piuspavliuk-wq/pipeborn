'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; opacity: number
  pulseOffset: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    let w = 0, h = 0

    const particles: Particle[] = []

    const init = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)

      particles.length = 0
      for (let i = 0; i < 7; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.4 + 0.15,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0
    const draw = () => {
      t += 0.012
      ctx.clearRect(0, 0, w, h)

      // Grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.045)'
      ctx.lineWidth = 0.5
      const step = 28
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }

      // Center glow
      const cx = w / 2, cy = h / 2
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80)
      grd.addColorStop(0, 'rgba(37,99,235,0.08)')
      grd.addColorStop(1, 'rgba(37,99,235,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2); ctx.fill()

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + p.pulseOffset)
        const alpha = p.opacity * (0.6 + 0.4 * pulse)

        // Subtle line to center if close
        const dx = cx - p.x, dy = cy - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(cx, cy)
          ctx.strokeStyle = `rgba(99,160,255,${(1 - dist / 100) * 0.12})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${alpha})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
