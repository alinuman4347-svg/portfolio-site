import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <div className="wrap navbar">
          <a href="#" className="logo">
            Numan Ashraf<span className="logo-dot">.</span>
          </a>
          <div className="navlinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-glass-btn">
            ✦ Hire Me
          </a>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <a href="#about" onClick={close}><span>01</span>About</a>
        <a href="#services" onClick={close}><span>02</span>Services</a>
        <a href="#work" onClick={close}><span>03</span>Work</a>
        <a href="#skills" onClick={close}><span>04</span>Skills</a>
        <a href="#contact" onClick={close}><span>05</span>Contact</a>
      </div>
    </>
  )
}
