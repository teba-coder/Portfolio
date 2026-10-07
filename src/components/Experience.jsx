import Section from './Section'
import { experience } from '../data/portfolio'
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">{e.role}, {e.org}</h3>
            <p className="text-sm text-muted">{e.period}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
