import { useEffect } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, rootMargin])
}

export function useTimelineReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.timeline-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
