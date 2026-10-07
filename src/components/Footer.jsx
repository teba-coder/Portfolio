import { nav, profile } from '../data/portfolio'
import Socials from './Socials'
export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
        <div><p className="font-display font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">&copy; {new Date().getFullYear()} All rights reserved.</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-4 text-sm text-muted">
          {nav.map((n) => <li key={n}><a className="hover:text-accent" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
        <Socials />
      </div>
    </footer>
  )
}
