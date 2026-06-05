import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function Hero({ ready }) {
  return (
    <section className="hero" id="hero">
      {/* ── Background layers ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="dots" />
        <div className="grain" />
      </div>

      {/* ── Centered content ── */}
      <div className="hero-stage">
        <motion.div
          className="hero-stack"
          variants={stagger}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="hero-pill">Al Awaans &nbsp;&middot;&nbsp; Abu Dhabi, UAE</span>
          </motion.div>

          {/* Word-by-word headline */}
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

          {/* Sub */}
          <motion.p className="hero-sub" variants={fadeUp}>
            Premium mobile accessories, smartphones, smartwatches
            and tablets — Abu Dhabi's trusted tech destination.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-ctas" variants={fadeUp}>
            <a href={SHOP} target="_blank" rel="noreferrer" className="btn btn-gold btn-lg">
              Shop Now <ArrowRight size={15} />
            </a>
            <a href="#about" className="btn btn-ghost btn-lg">
              Explore
            </a>
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
