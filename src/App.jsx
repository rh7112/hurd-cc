import './App.css'

const sites = [
  {
    name: "Ryan's portfolio",
    href: 'https://ryan.hurd.cc',
    description: 'Software engineer -- Retool, SQL-driven workflows, and internal tools.',
  },
  {
    name: "Alycia's portfolio",
    href: 'https://alycia.hurd.cc',
    description: "Alycia's work and projects.",
  },
  {
    name: 'The blog',
    href: 'https://blog.hurd.cc',
    description: 'Family notes, projects, and the occasional recipe.',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">hurd.cc</p>
        <h1>The Hurd family, online.</h1>
        <p className="lede">A few places to find us.</p>
      </header>

      <section className="sites" aria-label="Family sites">
        {sites.map((site) => (
          <a key={site.href} className="site-card" href={site.href}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            <span className="visit">Visit &rarr;</span>
          </a>
        ))}
      </section>

      <hurd-footer tagline="hurd.cc" link-href="https://ryan.hurd.cc"></hurd-footer>
    </main>
  )
}

export default App
