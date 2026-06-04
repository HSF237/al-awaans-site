import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const SHOP = 'https://hsf237.github.io/al-awaans.com/'

const CATS = [
  {
    name: 'Smartphones',
    desc: 'iPhone, Samsung Galaxy, Xiaomi, Realme, Vivo & ASUS ROG',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=85',
    alt: 'Premium smartphones on display',
  },
  {
    name: 'Smartwatches',
    desc: 'Apple Watch, Samsung Galaxy Watch, Xiaomi Smart Band',
    img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=85',
    alt: 'Smartwatches collection',
  },
  {
    name: 'Tablets',
    desc: 'iPad, Xiaomi Pad, Redmi Pad — for work, study & creativity',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=85',
    alt: 'Tablets on dark surface',
  },
  {
    name: 'Accessories',
    desc: 'Cases, chargers, earbuds, power banks & G-Shock watches',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85',
    alt: 'Premium headphones and accessories',
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
              <h2 className="h2">Shop by Category</h2>
            </div>
            <a href={SHOP} target="_blank" rel="noreferrer" className="btn btn-ghost">
              View All <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="cat-grid">
          {CATS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a href={SHOP} target="_blank" rel="noreferrer" className="cat-card">
                <img src={c.img} alt={c.alt} />
                <div className="cat-card__overlay" />
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
