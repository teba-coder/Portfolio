import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'
const ids = nav.map((n) => n.toLowerCase())
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#home" className="font-display font-bold">{profile.name.split(' ')[0]}</a>
        <ul className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} aria-current={active === n.toLowerCase() ? 'true' : undefined}
              className={`text-sm transition-colors hover:text-accent ${active === n.toLowerCase() ? 'text-accent' : 'text-muted'}`}>{n}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {nav.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`}
              className={`block py-2 ${active === n.toLowerCase() ? 'text-accent' : 'text-muted'}`}>{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
