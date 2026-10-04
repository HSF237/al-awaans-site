import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { Phone, PowerBank, Earbuds, Watch } from './Illustrations'

const SHOP = 'https://store.leens.online'

const STATS = [
  { n: '500+',   l: 'Products in stock' },
  { n: '1,000+', l: 'Happy customers' },
  { n: '4',      l: 'Product categories' },
  { n: 'AED',    l: 'Local pricing' },
]

/* Counts up numeric stats ("500+", "1,000+", "4"); leaves text like "AED" as is. */
function Stat({ n, l }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const match = n.match(/^([\d,]+)(.*)$/)
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : null
  const suffix = match ? match[2] : ''
  const [val, setVal] = useState(match ? 0 : n)

  useEffect(() => {
    if (!inView || target === null) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target])

  const text = target === null ? n : val.toLocaleString('en-US') + suffix

  return (
    <div ref={ref} className="about__stat">
      <span className="about__stat-n">{text}</span>
      <p className="about__stat-l">{l}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about__inner">

          {/* ── ILLUSTRATION ── */}
          <Reveal>
            <div className="about__art" aria-hidden="true">
              <div className="about__art-glow" />
              <svg className="about__ring" viewBox="0 0 300 300">
                <defs>
                  <path id="circ" d="M150,150 m-134,0 a134,134 0 1,1 268,0 a134,134 0 1,1 -268,0" />
                </defs>
                <text fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="url(#gGold)">
                  <textPath href="#circ" textLength="830" lengthAdjust="spacing">ABU DHABI  ✦  UAE  ✦  PREMIUM MOBILE TECH  ✦  ABU DHABI  ✦  UAE  ✦  </textPath>
                </text>
              </svg>
              <Phone className="ab ab-phone" />
              <Watch className="ab ab-watch" />
              <PowerBank className="ab ab-bank" />
              <Earbuds className="ab ab-buds" />
            </div>
          </Reveal>

          {/* ── CONTENT ── */}
          <div className="about__body">
            <Reveal>
              <span className="label">About Us</span>
              <h2 className="h2">More than<br />a <em>mobile shop.</em></h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="about__p">
                Al Awaans Online Shop is Abu Dhabi's trusted destination for premium mobile technology.
                We curate top-tier smartphones, accessories, smartwatches and tablets —
                all at prices that make sense.
              </p>
              <p className="about__p">
                Our team of specialists is always on hand to guide you to the right product.
                Whether you're a tech enthusiast or just need a reliable charger, we've got you covered.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="about__stats">
                {STATS.map(s => <Stat key={s.l} {...s} />)}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="about__cta">
                <a href={SHOP} target="_blank" rel="noreferrer" className="btn btn-gold btn-lg">
                  Browse Products <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
