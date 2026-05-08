import { useEffect } from 'react'
import { skillGroups } from '@/data/skills'

export function Skills() {
  useEffect(() => {
    const tags = document.querySelectorAll<HTMLElement>('.skill-tag')
    tags.forEach((tag) => {
      const enter = () => (tag.style.transform = 'translateY(-2px)')
      const leave = () => (tag.style.transform = 'translateY(0)')
      tag.addEventListener('mouseenter', enter)
      tag.addEventListener('mouseleave', leave)
      return () => {
        tag.removeEventListener('mouseenter', enter)
        tag.removeEventListener('mouseleave', leave)
      }
    })
  }, [])

  return (
    <section id="skills">
      <div className="container">
        <div className="section-label reveal">02 — Skills</div>
        <h2 className="section-title reveal reveal-d1">
          Technical depth<br />
          <span style={{ color: 'var(--text-muted)' }}>across the stack.</span>
        </h2>
        <p className="section-desc reveal reveal-d2">
          From microservices to model training pipelines — I work at every layer of modern
          software systems.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.name} className={`skill-group reveal reveal-d${i + 1}`}>
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span className="skill-group-name">{group.name}</span>
              </div>
              <div>
                {group.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
