import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const SHOP = 'https://store.leens.online'

const NAV = [
  { name: 'About',    href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Why Us',   href: '#why' },
  { name: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function handleNavClick(e, href) {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span>Leens</span>
        </a>

        <nav>
          <ul className="navbar__nav">
            {NAV.map(l => (
              <li key={l.name}>
                <a href={l.href}>{l.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={SHOP}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold btn-sm"
          >
            Shop Now
          </a>
          <button
            className="navbar__burger"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            {NAV.map(l => (
              <a key={l.name} href={l.href} onClick={e => handleNavClick(e, l.href)}>
                {l.name}
              </a>
            ))}
            <a
              href={SHOP}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
              style={{ alignSelf: 'flex-start', marginTop: 4 }}
              onClick={() => setOpen(false)}
            >
              Shop Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
