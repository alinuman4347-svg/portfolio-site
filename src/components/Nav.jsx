import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <div className="wrap navbar">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Numan Ashraf" className="logo-img" />
          </a>
          <div className="navlinks">
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#work">My Work</a>
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
        <a href="#about" onClick={close}>About Me</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#work" onClick={close}>My Work</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#contact" onClick={close}>Contact</a>
      </div>
    </>
  )
}
