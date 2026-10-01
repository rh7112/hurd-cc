import './App.css'

const works = [
  {
    name: 'BBSystems.US',
    href: 'https://bbsystems.us',
    description: 'IT consulting, PC repair, and custom computers -- built for Cruz Gregory.',
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
    name: "Ryan Hurd's portfolio",
    href: 'https://ryan.hurd.cc',
    description: 'Software engineer -- Retool, SQL-driven workflows, and internal tools.',
  },
  {
    name: "Alycia Hurd's portfolio",
    // Private/noindexed by design -- no href, so this renders as plain
    // text instead of a link (see the works.map below).
    href: null,
    description: 'Portfolio for Alycia Hurd -- Finance Business Analyst at Network Partners Group.',
  },
  {
    name: "Braden Tucker's portfolio",
    href: 'https://braden.tucker.bid',
    description: "Portfolio for Braden Tucker -- Bourbon Street Pizza, Bourbon, IN. Still a work in progress.",
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
      'Repairs for common consumer electronics issues, like worn joystick drift on game controllers and similar everyday wear-and-tear. Not board-level micro-soldering or precision repair.',
  },
  {
    name: 'Smart Home Automation',
    description: 'Home Assistant setup and smart home automation -- lock automation, presence detection, that kind of thing.',
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
          {works.map((work) =>
            work.href ? (
              <li key={work.name} className="index-row">
                <a href={work.href}>
                  <h3>{work.name}</h3>
                  <p>{work.description}</p>
                  <span className="visit">Visit &rarr;</span>
                </a>
              </li>
            ) : (
              <li key={work.name} className="index-row index-row-static">
                <h3>{work.name}</h3>
                <p>{work.description}</p>
              </li>
            ),
          )}
        </ul>
      </section>

      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default App
