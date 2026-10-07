import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolio'
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value })
  async function submit(ev) {
    ev.preventDefault()
    const found = validate(v)
    setErrors(found)
    if (Object.keys(found).length) return
    if (!FORM_ID) { window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Message from ' + v.name)}&body=${encodeURIComponent(v.message)}`; return }
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      setStatus('sent'); setV({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }
  const field = 'mt-1 w-full rounded-md border border-line bg-panel px-3 py-2 text-fg'
  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-400">{errors[k]}</p>
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-4 text-muted">
          <li><a className="flex items-center gap-3 hover:text-accent" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a></li>
          <li><a className="flex items-center gap-3 hover:text-accent" href={`tel:${profile.phone}`}><Phone size={18} />{profile.phone}</a></li>
          <li><a className="flex items-center gap-3 hover:text-accent" href={profile.links.telegram}><Send size={18} />@tebibu_so</a></li>
        </ul>
        <form onSubmit={submit} noValidate className="space-y-4">
          {[['name', 'Name', 'text'], ['email', 'Email', 'email']].map(([k, label, type]) => (
            <div key={k}><label htmlFor={k}>{label}</label>
              <input id={k} type={type} value={v[k]} onChange={set(k)} className={field} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} />{err(k)}</div>
          ))}
          <div><label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={v.message} onChange={set('message')} className={field} aria-invalid={!!errors.message} aria-describedby="message-err" />{err('message')}</div>
          <button className="btn btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</button>
          <p role="status" className="text-sm">
            {status === 'sent' && <span className="text-accent">Message sent. I will reply by email.</span>}
            {status === 'error' && <span className="text-red-400">Could not send. Email me directly at {profile.email}.</span>}
          </p>
        </form>
      </div>
    </Section>
  )
}
