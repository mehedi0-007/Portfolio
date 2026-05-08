import { useEffect } from 'react'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const statusMap = {
  live: { className: 'status-live', label: '● Live' },
  research: { className: 'status-research', label: '◈ Research' },
  wip: { className: 'status-wip', label: '◐ WIP' },
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusMap[project.status]

  const cardStyle: React.CSSProperties = {
    ['--accent-color' as string]: project.accentColor,
    ...(project.gridArea ? { gridArea: project.gridArea } : {}),
  }

  const glowStyle: React.CSSProperties = {
    background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
  }

  const layoutClass = project.layout === 'wide' ? 'bento-card wide' : 'bento-card'

  return (
    <a
      className={`${layoutClass} reveal reveal-d${projects.indexOf(project) + 1}`}
      style={cardStyle}
      href={project.link ?? '#'}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card-glow" style={glowStyle} />

      <div className="card-top">
        <span className="card-category">{project.category}</span>
        <span className={`card-status ${status.className}`}>{status.label}</span>
      </div>

      {project.layout === 'wide' && project.metrics ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div className="card-title">{project.title}</div>
            <div className="card-desc">{project.description}</div>
            <div className="card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="card-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <div className="metric-val">{m.value}</div>
                  <div className="metric-key">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="card-title">{project.title}</div>
          <div className="card-desc">{project.description}</div>
          <div className="card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
          {project.metrics && (
            <div
              className="card-metrics"
              style={project.layout === 'tall' ? { flexDirection: 'column', gap: '16px' } : undefined}
            >
              {project.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <div className="metric-val">{m.value}</div>
                  <div className="metric-key">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className="card-arrow">↗</div>
    </a>
  )
}

export function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.bento-card')
    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }
      card.addEventListener('mousemove', handler)
      return () => card.removeEventListener('mousemove', handler)
    })
  }, [])

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label reveal">03 — Projects</div>
        <h2 className="section-title reveal reveal-d1">
          Things I've<br />
          <span style={{ color: 'var(--text-muted)' }}>built.</span>
        </h2>
        <p className="section-desc reveal reveal-d2">
          A selection of projects spanning systems engineering and full-stack
          development.
        </p>
        <div className="bento-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
