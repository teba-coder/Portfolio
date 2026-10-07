export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
