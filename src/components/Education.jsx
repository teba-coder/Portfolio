import Section from './Section'
import { education } from '../data/portfolio'
export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="rounded-xl border border-line bg-panel p-5">
            <h3 className="font-display text-lg font-bold">{e.title}</h3>
            <p className="mt-1 text-sm text-muted">{e.org}</p>
            {e.period && <p className="text-sm text-muted">{e.period}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
