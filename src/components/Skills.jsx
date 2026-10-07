import Section from './Section'
import { skills } from '../data/portfolio'
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="rounded-xl border border-line bg-panel p-5">
            <h3 className="font-display text-lg font-bold">{group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {list.map((s) => <li key={s} className="rounded-md border border-line px-3 py-1 text-sm text-muted">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
