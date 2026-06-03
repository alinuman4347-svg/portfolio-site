import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Work from './components/Work'
import Skills from './components/Skills'
import Quotes from './components/Quotes'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useRevealAll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const observe = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 90}ms`
        io.observe(el)
      })
    }

    observe()
    // re-observe after a tick so dynamically rendered elements are caught
    const t = setTimeout(observe, 50)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
}

export default function App() {
  useRevealAll()

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Work />
      <Skills />
      <Quotes />
      <Contact />
      <Footer />
    </>
  )
}
