import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
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
    </>
  )
}
