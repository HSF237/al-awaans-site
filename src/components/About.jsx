import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const SHOP = 'https://hsf237.github.io/al-awaans.com/'

const STATS = [
  { n: '500+',   l: 'Products in stock' },
  { n: '1,000+', l: 'Happy customers' },
  { n: '4',      l: 'Product categories' },
  { n: 'AED',    l: 'Local pricing' },
]

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about__inner">

          {/* ── IMAGE ── */}
          <Reveal>
            <div className="about__img-frame">
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=85"
                alt="Mobile accessories and technology products"
              />
            </div>
          </Reveal>

          {/* ── CONTENT ── */}
          <div className="about__body">
            <Reveal>
              <span className="label">About Us</span>
              <h2 className="h2">More than<br />a mobile shop.</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p style={{ marginTop: 20, color: 'var(--text-2)', fontSize: '0.93rem', lineHeight: 1.82 }}>
                Al Awaans is Abu Dhabi's trusted destination for premium mobile technology.
                We curate top-tier smartphones, accessories, smartwatches and tablets —
                all at prices that make sense.
              </p>
              <p style={{ marginTop: 14, color: 'var(--text-2)', fontSize: '0.93rem', lineHeight: 1.82 }}>
                Our team of specialists is always on hand to guide you to the right product.
                Whether you're a tech enthusiast or just need a reliable charger, we've got you covered.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="about__stats">
                {STATS.map(s => (
                  <div key={s.n} className="about__stat">
                    <span className="about__stat-n">{s.n}</span>
                    <p className="about__stat-l">{s.l}</p>
                  </div>
                ))}
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
