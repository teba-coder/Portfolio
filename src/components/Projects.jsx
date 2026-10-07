import { useState } from 'react'
import { ExternalLink, Github, Lock } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/portfolio'
export default function Projects() {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  const [cat, setCat] = useState('All')
  const shown = projects.filter((p) => cat === 'All' || p.category === cat)
  return (
    <Section id="projects" title="Projects">
      {cats.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`btn ${cat === c ? 'btn-primary' : 'btn-ghost'}`}>{c}</button>)}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.name} className="overflow-hidden rounded-xl border border-line bg-panel transition-transform hover:-translate-y-1">
            {p.image
              ? <img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" className="aspect-video w-full object-cover" />
              : <div role="img" aria-label="Screenshot placeholder" className="grid aspect-video place-items-center bg-ink text-sm text-muted">Screenshot coming soon</div>}
            <div className="p-5">
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded bg-ink px-2 py-1 text-xs text-accent">{t}</li>)}</ul>
              <div className="mt-5 flex flex-wrap gap-3">
                {p.github ? <a href={p.github} className="btn btn-ghost"><Github size={16} />GitHub</a>
                  : <span className="btn border border-line text-muted"><Lock size={16} />Private repository</span>}
                {p.live && <a href={p.live} className="btn btn-primary"><ExternalLink size={16} />Live demo</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
