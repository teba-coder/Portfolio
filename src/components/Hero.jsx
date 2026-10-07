import { profile } from '../data/portfolio'
import Socials from './Socials'
export default function Hero() {
  const initials = profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <section id="home" className="flex min-h-screen items-center pt-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr]">
        <div className="rise">
          <p className="text-accent">{profile.title}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-5 max-w-md text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </div>
          <div className="mt-8"><Socials /></div>
        </div>
        {<img src="/me.jpg" alt="Portrait of Tebibu Solomon Mulugeta" /> }

      </div>
    </section>
  )
}
