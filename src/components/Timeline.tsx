import { timelineEntries } from '@/data/timeline'

export function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <div className="section-label reveal">05 — Journey</div>
        <h2 className="section-title reveal reveal-d1">
          Engineering<br />
          <span style={{ color: 'var(--text-muted)' }}>milestones.</span>
        </h2>
        <div className="timeline-track">
          {timelineEntries.map((entry) => (
            <div key={entry.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{entry.date}</div>
              <div className="timeline-role">{entry.role}</div>
              <div className="timeline-company">{entry.company}</div>
              <div className="timeline-desc">{entry.description}</div>
              <div className="timeline-achievements">
                {entry.achievements.map((tag) => (
                  tag.href ? (
                    <a
                      key={tag.label}
                      href={tag.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-tag"
                    >
                      {tag.label}
                    </a>
                  ) : (
                    <span key={tag.label} className="achievement-tag">
                      {tag.label}
                    </span>
                  )))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
