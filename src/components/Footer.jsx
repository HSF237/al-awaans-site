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
        <a href="#" className="footer__logo">
          <span>Leens</span>
        </a>

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

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Leens Computers and Mobiles · Shabiya 11, Musaffah, Abu Dhabi
        </p>
      </div>
    </footer>
  )
}
