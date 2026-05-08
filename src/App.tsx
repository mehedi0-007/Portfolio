import { useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Timeline } from '@/components/Timeline'
import { Terminal } from '@/components/Terminal'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useScrollReveal, useTimelineReveal } from '@/hooks/useScrollReveal'
import { useCursorGlow, useNavScroll } from '@/hooks/useCursorGlow'

function GlassDivider() {
  return <div className="glass-divider" />
}

export default function App() {
  // Global interaction hooks
  useCursorGlow()
  useNavScroll()
  useScrollReveal()
  useTimelineReveal()

  // Bento card hover glow effect (mouse position CSS vars)
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.bento-card')
    const handlers: Array<() => void> = []
    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }
      card.addEventListener('mousemove', handler)
      handlers.push(() => card.removeEventListener('mousemove', handler))
    })
    return () => handlers.forEach((cleanup) => cleanup())
  }, [])

  return (
    <>
      {/* Background effects */}
      <div id="cursor-glow" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <GlassDivider />
        <About />
        <GlassDivider />
        <Skills />
        <GlassDivider />
        <Projects />
        <GlassDivider />
        <Timeline />
        <GlassDivider />
        <Terminal />
        <GlassDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
