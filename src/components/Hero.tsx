import type { HeroStat } from '@/types'

const stats: HeroStat[] = [
  { value: '500+', label: 'problems solved' },
  { value: '2+', label: 'projects shipped' },
  { value: '20+', label: 'students mentored' },
]

export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-grid-line" />

          {/* ── LEFT: text content ── */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              Open to Junior Developer roles &amp; internships
            </div>

            <h1 className="hero-title">
              Building Systems<br />
              That <span className="gradient-text">Scale.</span>
            </h1>

            <p className="hero-subtitle">
              Junior Software Developer focused on{' '}
              <span className="highlight">REST API design</span>,{' '}
              <span className="highlight">React frontends</span>, and secure
              full-stack web applications.
            </p>

            <div className="hero-cta-row">
              <a className="btn-primary" href="#projects">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <polyline points="5 3 19 12 5 21 5 3" />
                </svg>
                View Projects
              </a>
              <a className="btn-ghost" href="#contact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Get in touch
              </a>
              <a className="btn-ghost" href="/Resume_Mehedi_Hassan.pdf"
                target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Resume
              </a>
            </div>

            <div className="hero-scroll">
              <span className="scroll-line" />
              scroll to explore
            </div>

            {/* stats sit under the CTA on mobile, hidden on desktop (shown right) */}
            <div className="hero-stats-mobile">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item stat-item--row">
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: photo + stats ── */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrap">
              <div className="hero-photo-glow" />
              <img
                src="/mehedi.jpg"
                alt="Md Mehedi Hassan"
                className="hero-photo"
              />
              {/* decorative corner accent */}
              <div className="hero-photo-accent" />
            </div>

            {/* stats stacked vertically beside photo on desktop */}
            <div className="hero-stats-desktop">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}