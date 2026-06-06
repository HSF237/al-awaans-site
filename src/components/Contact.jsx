import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 56 961 3435',
    href: 'tel:+971569613435',
  },
  {
    icon: Phone,
    label: 'Landline',
    value: '(02) 559 1501',
    href: 'tel:+97125591501',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+971 58 989 2367',
    href: 'https://wa.me/971589892367',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Leensshabiya@gmail.com',
    href: 'mailto:Leensshabiya@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Shabiya 11, Musaffah, Abu Dhabi',
    href: 'https://maps.google.com/?q=Shabiya+11+Musaffah+Abu+Dhabi',
  },
]

function handleSubmit(e) {
  e.preventDefault()
  const name  = e.target.querySelector('input[name=name]').value
  const email = e.target.querySelector('input[name=email]').value
  const msg   = e.target.querySelector('textarea[name=message]').value
  window.location.href =
    `mailto:Leensshabiya@gmail.com` +
    `?subject=${encodeURIComponent('Inquiry from ' + name)}` +
    `&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + '\nReply to: ' + email)}`
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__inner">

          {/* ── INFO ── */}
          <div>
            <Reveal>
              <span className="label">Get In Touch</span>
              <h2 className="h2">We'd love to<br />hear from you.</h2>
              <p className="lead" style={{ maxWidth: 380, marginTop: 14 }}>
                Have a question or looking for a specific product?
                Reach out — our team gets back to you fast.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="contact__info-items">
                {INFO.map(item => (
                  <div key={item.label} className="ci">
                    <div className="ci__icon">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="ci__label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="ci__val" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span className="ci__val">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── FORM ── */}
          <Reveal delay={0.1}>
            <form className="cf" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" placeholder="Ahmed Al Rashid" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Product inquiry..." />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us what you're looking for..." />
              </div>
              <div>
                <button type="submit" className="btn btn-gold btn-lg">
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
