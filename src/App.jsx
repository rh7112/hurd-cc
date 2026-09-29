import './App.css'

const works = [
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
  {
    name: "Ramona's portfolio",
    href: 'https://ramona.bauch.cc',
    description: "Ryan's mother -- PA-C.",
  },
  {
    name: "Braden's portfolio",
    href: 'https://braden.tucker.bid',
    description: "Ryan's step-son -- Bourbon Street Pizza.",
  },
  {
    name: 'BBSystems.US',
    href: 'https://bbsystems.us',
    description: 'IT consulting, PC repair, and custom computers -- built for Cruz Gregory.',
  },
]

const services = [
  {
    name: 'Lawn Care & Landscaping',
    description:
      "Mowing and landscaping upkeep for a home in the Barrington Addition, a gated community in Warsaw, IN -- mowed every 3-7 days to keep it looking sharp.",
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
        <p className="lede">
          A software engineer's shop -- web apps and internal tools, with lawn care and
          landscaping on the side.
        </p>
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

      <section className="block" aria-label="Services">
        <div className="block-heading">
          <h2>Services</h2>
          <p>Outside of software, a few other things Hurd Craft Co. offers.</p>
        </div>
        <div className="services">
          {services.map((service) => (
            <article key={service.name} className="service-card">
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
              <div className="service-card-body">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a
                  className="visit"
                  href={`mailto:ryan@hurd.cc?subject=${encodeURIComponent(service.name)}%20Inquiry`}
                >
                  Get in touch &rarr;
                </a>
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
