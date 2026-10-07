import { Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
const items = [['GitHub', Github, 'github'], ['LinkedIn', Linkedin, 'linkedin'], ['Telegram', Send, 'telegram']]
export default function Socials() {
  return (
    <ul className="flex gap-3">
      {items.map(([label, Icon, key]) => (
        <li key={key}><a href={profile.links[key]} target="_blank" rel="noreferrer" aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Icon size={18} /></a></li>
      ))}
    </ul>
  )
}
