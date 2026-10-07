import Section from './Section'
import { services } from '../data/portfolio'
export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-line p-5">
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
