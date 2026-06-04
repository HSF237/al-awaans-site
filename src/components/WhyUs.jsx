import { BadgeCheck, Tag, Users, Package, MapPin, Headphones } from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Premium Quality',
    desc: 'Every product we carry meets strict quality standards. From flagship phones to everyday accessories — quality is never compromised.',
  },
  {
    icon: Tag,
    title: 'Competitive Prices',
    desc: 'The most competitive prices in Abu Dhabi. Get the best technology without overpaying — always.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our knowledgeable staff helps you pick the right product for your exact needs and budget, every single time.',
  },
  {
    icon: Package,
    title: 'Wide Selection',
    desc: 'Hundreds of products across smartphones, tablets, smartwatches and accessories — all in one place.',
  },
  {
    icon: MapPin,
    title: 'UAE Based',
    desc: 'Proudly serving Abu Dhabi and the UAE. Walk in or browse our online store — we are always here for you.',
  },
  {
    icon: Headphones,
    title: 'After-Sale Support',
    desc: 'Your satisfaction does not end at checkout. We are here before and after every purchase to make sure you are happy.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="section section-alt">
      <div className="container">

        <Reveal>
          <span className="label">Why Al Awaans</span>
          <h2 className="h2" style={{ maxWidth: 480 }}>
            The smarter choice<br />for mobile tech.
          </h2>
        </Reveal>

        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="why-card">
                <div className="why-icon">
                  <f.icon size={20} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
