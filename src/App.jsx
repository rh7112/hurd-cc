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
  {
    name: 'Backend / API Development',
    description:
      'Custom backend systems and APIs -- database design, multi-tenant architecture, and the infrastructure everything else runs on.',
  },
  {
    name: 'Third-Party Integrations',
    description: 'Connecting your site or tools to payment processors, tax systems, and other third-party APIs.',
  },
  {
    name: 'AI-Assisted Tooling',
    description: 'AI-integrated features and workflows -- built thoughtfully into a real tool, not bolted on as a gimmick.',
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
    image: 'https://blog.hurd.cc/api/recipe-images/recipes/2026-09-26-chicken-caesar-wraps-d5755e94.jpg',
    imageAlt: 'Chicken Caesar wraps, a recipe from The Hurd Blog',
  },
  {
    name: 'Smart Home Setup',
    description: 'Home Assistant setup and smart home automation -- lock automation, presence detection, that kind of thing.',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Hurd Craft Co. LLC</p>
          <h1>Software engineering, plus a few other crafts.</h1>
          <p className="lede">A software engineer's shop -- web apps and internal tools.</p>
        </div>
        <div className="hero-action">
          <p className="hero-action-label">Have something in mind?</p>
          <a className="cta-button" href="mailto:ryan@hurd.cc?subject=Service%20Inquiry">
            Get in touch &rarr;
          </a>
        </div>
      </header>

      <section className="index-block" aria-label="Services">
        <div className="block-heading">
          <h2>Services</h2>
          <p>What Hurd Craft Co. offers.</p>
        </div>
        <ul className="index-list index-list-services">
          {offeredServices.map((service) => (
            <li key={service.name} className="index-row">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="index-block" aria-label="Works">
        <div className="block-heading">
          <h2>Works</h2>
          <p>Sites and tools built by Hurd Craft Co.</p>
        </div>
        <ul className="index-list index-list-works">
          {works.map((work) => (
            <li key={work.href} className="index-row">
              <a href={work.href}>
                <h3>{work.name}</h3>
                <p>{work.description}</p>
                <span className="visit">Visit &rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="block block-also" aria-label="Also does">
        <div className="block-heading">
          <h2>Also</h2>
          <p>A few things I don't actively offer, but would take on for the right price.</p>
        </div>
        <div className="services-strip">
          {alsoDoes.map((item) => (
            <article key={item.name} className="service-card service-card-muted">
              {item.image ? (
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              ) : (
                <div className="service-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 22 24 9l16 13"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 19v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="24" cy="28" r="3.5" stroke="currentColor" strokeWidth="2.5" />
                    <path
                      d="M18.5 22.5a8 8 0 0 1 11 0M15.5 19.5a12.5 12.5 0 0 1 17 0"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
              <div className="service-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default App
