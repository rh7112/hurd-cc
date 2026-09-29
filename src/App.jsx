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

const offeredServices = [
  {
    name: 'Website Development',
    description:
      'Custom websites built with modern frameworks (React, Next.js, Svelte) -- from small business marketing sites to full web apps.',
  },
  {
    name: 'SEO Optimization',
    description: 'Structured data, meta tags, and technical fundamentals to help your site actually get found.',
  },
  {
    name: 'Website Hosting',
    description: "Fast, reliable hosting and deployment, so you don't have to manage it yourself.",
  },
  {
    name: 'IT Consulting',
    description: 'General technology guidance and troubleshooting for small businesses.',
  },
  {
    name: 'PC Building',
    description: 'Custom-built PCs, put together around what you actually need them for.',
  },
  {
    name: 'Light Technology Repair',
    description:
      'Common fixes like controller stick drift (PlayStation, Xbox, Switch). Not board-level micro-soldering or precision repair.',
  },
  {
    name: 'Retool / Internal Tools',
    description: 'Internal dashboards and business tools connected to your data -- built lightweight, not bloated.',
  },
]

const alsoDoes = [
  {
    name: 'Lawn Care & Landscaping',
    description:
      'Mowing and landscaping upkeep for family, like this yard in the Barrington Addition (Warsaw, IN).',
    image: '/images/services/barrington-lawn-care-1.jpg',
    imageAlt: 'A freshly edged sidewalk and driveway in the Barrington Addition, Warsaw, IN',
  },
  {
    name: 'Cooking & Baking',
    description:
      'Home cooking and baking -- not professionally trained, just genuinely good at it. Recipes featured on The Hurd Blog.',
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

      <section className="block" aria-label="Services">
        <div className="block-heading">
          <h2>Services</h2>
          <p>What Hurd Craft Co. offers.</p>
        </div>
        <div className="sites">
          {offeredServices.map((service) => (
            <a
              key={service.name}
              className="site-card"
              href={`mailto:ryan@hurd.cc?subject=${encodeURIComponent(service.name + ' Inquiry')}`}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="visit">Get in touch &rarr;</span>
            </a>
          ))}
        </div>
      </section>

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
          <p>A few things I don't actively offer, but would take on for the right price.</p>
        </div>
        <div className="services">
          {alsoDoes.map((item) => (
            <article key={item.name} className="service-card service-card-muted">
              {item.image && <img src={item.image} alt={item.imageAlt} loading="lazy" />}
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
