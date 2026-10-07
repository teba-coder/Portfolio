import { Download, MapPin, GraduationCap } from 'lucide-react'
import Section from './Section'
import { about, profile } from '../data/portfolio'
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="max-w-prose space-y-4 text-muted">{about.map((p) => <p key={p}>{p}</p>)}</div>
        <ul className="space-y-3 rounded-xl border border-line bg-panel p-5 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} className="text-accent" />{profile.location}</li>
          <li className="flex items-center gap-2"><GraduationCap size={16} className="text-accent" />B.Sc. in Software Engineering</li>
          <li><a href={profile.resume} className="btn btn-ghost mt-2"><Download size={16} />Download resume</a></li>
        </ul>
      </div>
    </Section>
  )
}
