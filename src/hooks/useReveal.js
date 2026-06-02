import { useEffect } from 'react'

export function useReveal() {
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

    const els = document.querySelectorAll('.reveal:not(.in)')
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 90}ms`
      io.observe(el)
    })

    return () => io.disconnect()
  })
}
