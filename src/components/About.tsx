import type { Interest } from '@/types'

const interests: Interest[] = [
  { icon: '🔐', label: 'API Security & Auth patterns', tag: 'active' },
  { icon: '⚛️', label: 'React & modern frontend', tag: 'building' },
  { icon: '🏗', label: 'System design fundamentals', tag: 'study' },
  { icon: '🧠', label: 'DSA & competitive programming', tag: 'active' },
  { icon: '🐧', label: 'Linux & shell scripting', tag: 'exploring' },
  { icon: '🗄', label: 'Database internals & MongoDB', tag: 'focus' },
]

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label reveal">01 — About</div>
            <h2 className="section-title reveal reveal-d1">
              "I build secure, scalable apps at the intersection of<br />
              <span style={{ color: 'var(--text-muted)' }}>frontend craft and backend architecture.</span>"

            </h2>
            <p className="reveal reveal-d2">
              I'm a <strong>Junior Software Developer</strong> located in Dhaka, Bangladesh,
              focused on building secure REST APIs, React frontends, and full-stack web
              applications that are clean and maintainable.
            </p>
            <p className="reveal reveal-d3">
              My work spans <strong>JWT authentication</strong>, <strong>RBAC middleware</strong>,
              MVC architecture, and translating Figma designs into pixel-accurate UIs. I care
              about API security, clean code separation, and systems that handle edge cases
              gracefully.
            </p>
            <p className="reveal reveal-d4">
              Outside of coding I mentor students in <strong>data structures & algorithms</strong>,
              judge competitive programming contests, and grind problems on Codeforces and LeetCode.
            </p>
          </div>

          <div className="about-card reveal reveal-d2">
            <div className="about-card-title">// currently_interested_in</div>
            <ul className="interest-list">
              {interests.map((item) => (
                <li key={item.label}>
                  <span className="icon">{item.icon}</span>
                  {item.label}
                  <span className="tag">{item.tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
