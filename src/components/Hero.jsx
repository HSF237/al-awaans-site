import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Phone, Watch, Tablet, Earbuds, PowerBank } from './Illustrations'

const SHOP = 'https://store.leens.online'

const BRANDS = [
  'Samsung', 'Apple', 'Xiaomi', 'G-Shock Casio', 'Realme',
  'ASUS ROG', 'Vivo', 'Redmi', 'iPad', 'Galaxy Watch',
]

const ease = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
const wordSlide = (i) => ({
  hidden: { y: '108%' },
  show:   { y: 0, transition: { duration: 0.82, delay: i * 0.09, ease } },
})

function Float({ children, className, depth = 1, delay = 0, rotate = 0, duration = 6 }) {
  return (
    <motion.div
      className={className}
      style={{ '--depth': depth }}
      animate={{ y: [0, -14 * depth, 0], rotate: [rotate, rotate + 1.5, rotate] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero({ ready }) {
  // mouse parallax for the device cluster
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 14 })
  const sy = useSpring(my, { stiffness: 60, damping: 14 })
  const tx = useTransform(sx, v => v * 18)
  const ty = useTransform(sy, v => v * 14)

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section className="hero" id="hero" onMouseMove={onMove}>
      {/* ── Background layers ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="dots" />
        <div className="grain" />
      </div>

      <div className="hero-grid container">
        {/* ── Text column ── */}
        <motion.div
          className="hero-stack"
          variants={stagger}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp}>
            <span className="hero-pill">
              <span className="pill-dot" />
              Al Awaans Online Shop &nbsp;&middot;&nbsp; Abu Dhabi, UAE
            </span>
          </motion.div>

          <motion.div variants={stagger} className="hero-headline">
            {['YOUR', 'ACCESSORY', 'HUB.'].map((word, i) => (
              <div key={word} className="word-row">
                <motion.span
                  className={`hero-word${i === 1 ? ' hero-word--accent' : ''}`}
                  variants={wordSlide(i)}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>

          <motion.p className="hero-sub" variants={fadeUp}>
            Premium mobile accessories, smartphones, smartwatches
            and tablets — Abu Dhabi's trusted tech destination.
          </motion.p>

          <motion.div className="hero-ctas" variants={fadeUp}>
            <a href={SHOP} target="_blank" rel="noreferrer" className="btn btn-gold btn-lg">
              Shop Now <ArrowRight size={15} />
            </a>
            <a href="#about" className="btn btn-ghost btn-lg">
              Explore
            </a>
          </motion.div>

          <motion.div className="hero-trust" variants={fadeUp}>
            <span><ShieldCheck size={15} /> Premium quality</span>
            <span><Sparkles size={15} /> Best AED prices</span>
          </motion.div>
        </motion.div>

        {/* ── Illustrated device cluster ── */}
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          aria-hidden="true"
        >
          <motion.div className="art-inner" style={{ x: tx, y: ty }}>
            <svg className="orbit" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="238" stroke="url(#gGold)" strokeOpacity="0.28" strokeDasharray="2 10" />
              <circle cx="250" cy="250" r="180" stroke="url(#gGold)" strokeOpacity="0.16" />
              <circle cx="250" cy="250" r="120" stroke="url(#gGold)" strokeOpacity="0.1" strokeDasharray="4 8" />
              <circle cx="250" cy="12" r="5" fill="#E8C46A" />
              <circle cx="430" cy="250" r="3.5" fill="#E8C46A" opacity="0.7" />
            </svg>
            <div className="art-glow" />

            <Float className="dev dev-tablet" depth={0.7} delay={0.6} rotate={-8} duration={7}>
              <Tablet />
            </Float>
            <Float className="dev dev-phone" depth={1} delay={0} rotate={0} duration={6}>
              <Phone />
            </Float>
            <Float className="dev dev-watch" depth={1.3} delay={0.9} rotate={8} duration={5.5}>
              <Watch />
            </Float>
            <Float className="dev dev-buds" depth={1.2} delay={0.3} rotate={-6} duration={6.5}>
              <Earbuds />
            </Float>
            <Float className="dev dev-bank" depth={0.9} delay={1.2} rotate={10} duration={7.5}>
              <PowerBank />
            </Float>

            <Float className="chip chip-1" depth={0.5} delay={0.4} duration={5}>
              <b>500+</b> products in stock
            </Float>
            <Float className="chip chip-2" depth={0.5} delay={1} duration={6}>
              <b>AED</b> local pricing
            </Float>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scrolling brand strip ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
