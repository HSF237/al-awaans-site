import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SvgDefs } from './components/Illustrations'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <SvgDefs />
      <ScrollProgress />
      <IntroAnimation onDone={() => setReady(true)} />
      <Navbar />
      <main>
        <Hero ready={ready} />
        <About />
        <Categories />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa-float"
        href="https://wa.me/971589892367"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  )
}
