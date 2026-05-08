import { researchItems } from '@/data/research'

export function Research() {
  return (
    <section id="research">
      <div className="container">
        <div className="section-label reveal">04 — Research</div>
        <h2 className="section-title reveal reveal-d1">
          Publications &amp;<br />
          <span style={{ color: 'var(--text-muted)' }}>academic work.</span>
        </h2>
        <p className="section-desc reveal reveal-d2">
          Exploring open problems at the intersection of machine learning, systems, and
          applied AI.
        </p>
        <div className="research-list">
          {researchItems.map((item, i) => (
            <div key={item.id} className={`research-item reveal reveal-d${i + 1}`}>
              <div className="research-year">{item.year}</div>
              <div>
                <div className="research-title">{item.title}</div>
                <div className="research-venue">{item.venue}</div>
                <div className="research-abstract">{item.abstract}</div>
              </div>
              <div className="research-links">
                {item.links.map((link) => (
                  <a key={link.label} className="research-link" href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
