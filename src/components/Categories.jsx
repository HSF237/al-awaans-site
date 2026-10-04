import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { Phone, Watch, Tablet, Headphones, Earbuds, Charger } from './Illustrations'

const SHOP = 'https://store.leens.online'

const CATS = [
  {
    mod: 'phones',
    no: '01',
    name: 'Smartphones',
    desc: 'iPhone, Samsung Galaxy, Xiaomi, Realme, Vivo & ASUS ROG',
    art: (
      <>
        <Phone className="ca ca-main" />
        <Phone className="ca ca-back" />
      </>
    ),
  },
  {
    no: '02',
    name: 'Smartwatches',
    desc: 'Apple Watch, Samsung Galaxy Watch, Xiaomi Smart Band',
    art: <Watch className="ca ca-main ca-tall" />,
  },
  {
    no: '03',
    name: 'Tablets',
    desc: 'iPad, Xiaomi Pad, Redmi Pad — for work, study & creativity',
    art: <Tablet className="ca ca-main ca-wide" />,
  },
  {
    mod: 'acc',
    no: '04',
    name: 'Accessories',
    desc: 'Cases, chargers, earbuds, power banks & G-Shock watches',
    art: (
      <>
        <Headphones className="ca ca-main ca-wide" />
        <Earbuds className="ca ca-sub-l" />
        <Charger className="ca ca-sub-r" />
      </>
    ),
  },
]

export default function Categories() {
  return (
    <section id="products" className="section">
      <div className="container">

        <Reveal>
          <div className="cat-header">
            <div>
              <span className="label">What We Offer</span>
              <h2 className="h2">Shop by <em>Category</em></h2>
            </div>
            <a href={SHOP} target="_blank" rel="noreferrer" className="btn btn-ghost">
              View All <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="cat-grid">
          {CATS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a href={SHOP} target="_blank" rel="noreferrer" className={`cat-card${c.mod ? ` cat-card--${c.mod}` : ''}`}>
                <span className="cat-card__no">{c.no}</span>
                <div className="cat-card__stage" aria-hidden="true">
                  <div className="cat-card__glow" />
                  {c.art}
                </div>
                <div className="cat-card__body">
                  <p className="cat-card__name">{c.name}</p>
                  <p className="cat-card__desc">{c.desc}</p>
                  <span className="cat-card__link">
                    Shop Now <ArrowRight size={13} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
