import { useEffect } from 'react'

export function useCursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    if (!glow) return

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])
}

export function useNavScroll() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (!navbar) return

    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
