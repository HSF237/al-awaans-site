import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const SHOP = 'https://store.leens.online'

const LINKS = [
  { name: 'About',        href: '#about' },
  { name: 'Products',     href: '#products' },
  { name: 'Why Us',       href: '#why' },
  { name: 'Contact',      href: '#contact' },
  { name: 'Online Store', href: SHOP, external: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span>Al Awaans</span>
            </a>
            <p>Premium mobile accessories, smartphones, smartwatches and tablets in the UAE.</p>
          </div>

          <ul className="footer__links">
            {LINKS.map(l => (
              <li key={l.name}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noreferrer' : undefined}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer__contact">
            <li><Phone size={14} /><a href="tel:+971569613435">+971 56 961 3435</a></li>
            <li><MessageCircle size={14} /><a href="https://wa.me/971589892367" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><Mail size={14} /><a href="mailto:info@leens.online">info@leens.online</a></li>
            <li><MapPin size={14} /><span>UAE</span></li>
          </ul>
        </div>

        <div className="footer__word" aria-hidden="true">AL AWAANS</div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Al Awaans Online Shop · UAE
        </p>
      </div>
    </footer>
  )
}
