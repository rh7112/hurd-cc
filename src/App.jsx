import './App.css'

const works = [
  {
    name: 'BBSystems.US',
    href: 'https://bbsystems.us',
    description: 'IT consulting, PC repair, and custom computers -- built for Cruz Gregory.',
  },
  {
    name: "Ryan Hurd's portfolio",
    href: 'https://ryan.hurd.cc',
    description: 'Software engineer -- Retool, SQL-driven workflows, and internal tools.',
  },
  {
    name: 'The Hurd Blog',
    href: 'https://blog.hurd.cc',
    description: 'Family notes, projects, and the occasional recipe.',
  },
  {
    name: "Ramona Bauch's portfolio",
    href: 'https://ramona.bauch.cc',
    description: 'Portfolio for Ramona Bauch, PA-C -- a Physician Assistant serving Northeastern Indiana.',
  },
  {
    name: "Braden Tucker's portfolio",
    href: 'https://braden.tucker.bid',
    description: 'Portfolio for Braden Tucker -- Bourbon Street Pizza, Bourbon, IN.',
  },
]

const alsoDoes = [
  {
    name: 'Lawn Care & Landscaping',
    description:
      "Mowing and landscaping upkeep for family, like this yard in the Barrington Addition (Warsaw, IN). Not something actively offered -- software engineering is the focus.",
    image: '/images/services/barrington-lawn-care-1.jpg',
    imageAlt: 'A freshly edged sidewalk and driveway in the Barrington Addition, Warsaw, IN',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Hurd Craft Co. LLC</p>
        <h1>Software engineering, plus a few other crafts.</h1>
        <p className="lede">A software engineer's shop -- web apps and internal tools.</p>
      </header>

      <section className="block" aria-label="Works">
        <div className="block-heading">
          <h2>Works</h2>
          <p>Sites and tools built by Hurd Craft Co.</p>
        </div>
        <div className="sites">
          {works.map((work) => (
            <a key={work.href} className="site-card" href={work.href}>
              <h3>{work.name}</h3>
              <p>{work.description}</p>
              <span className="visit">Visit &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      <section className="block block-also" aria-label="Also does">
        <div className="block-heading">
          <h2>Also</h2>
          <p>Not a service offering -- just something that comes up now and then.</p>
        </div>
        <div className="services">
          {alsoDoes.map((item) => (
            <article key={item.name} className="service-card service-card-muted">
              <img src={item.image} alt={item.imageAlt} loading="lazy" />
              <div className="service-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hurd-footer tagline="Hurd Craft Co. LLC" link-href="https://ryan.hurd.cc"></hurd-footer>
    </main>
  )
}

export default App
