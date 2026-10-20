import './App.css'
import ContactDetails from './ContactDetails.jsx'
import Logo from './Logo.jsx'

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
  {
    name: 'Miretti Quality Construction',
    href: 'https://maps.app.goo.gl/dNW28yciC2kRrxUH6?g_st=ac',
    description: 'Google Business Profile setup for Miretti Quality Construction.',
  },
]

const serviceGroups = [
  {
    name: 'Web & digital foundations',
    description:
      'A useful, durable digital home for your business -- custom sites and the backends behind them, built around what you need them to do.',
    items: ['Website development', 'Backend / API development', 'Website hosting'],
  },
  {
    name: 'Search & business presence',
    description:
      'Make it easier for local customers to find your business and understand what you offer.',
    items: ['SEO optimization', 'Business profile setup'],
  },
  {
    name: 'Connected tools & systems',
    description:
      'Bring your tools together, reduce repetitive work, and make room for better ways to work.',
    items: ['IT consulting', 'Third-party integrations', 'Retool / internal tools', 'AI-assisted tooling'],
  },
  {
    name: 'Devices & smart spaces',
    description:
      'Practical hands-on technology help for the equipment and spaces you rely on every day.',
    items: ['PC building', 'Light technology repair', 'Smart home automation'],
  },
]

const steps = [
  {
    name: "Tell us what's going on",
    description: 'Share the goal, the snag, or the part of your setup you would like to improve.',
  },
  {
    name: 'Find a sensible next step',
    description: "We'll get clear on what matters and shape the work around your needs.",
  },
  {
    name: 'Make it work in real life',
    description: 'Build, connect, configure, or troubleshoot, with practical support along the way.',
  },
]

const orbitChips = [
  { label: 'Websites', className: 'orbit-chip-a' },
  { label: 'Search', className: 'orbit-chip-b' },
  { label: 'Internal tools', className: 'orbit-chip-c' },
  { label: 'Smart home', className: 'orbit-chip-d' },
]

function App() {
  return (
    <main className="page">
      <nav className="home-nav" aria-label="Primary">
        <Logo />
        <div className="home-nav-links">
          <a href="#services">What we do</a>
          <a href="#approach">How we work</a>
          <a href="#works">Works</a>
          <a href="/about">About</a>
          <a className="home-nav-cta" href="/contact">
            Let&rsquo;s talk
          </a>
        </div>
      </nav>

      <header className="home-hero">
        <div className="home-hero-copy">
          <p className="home-pill">
            <span className="home-dot" aria-hidden="true" />
            Software + technology support, made practical
          </p>
          <h1>
            A stronger foundation for <em>what&rsquo;s next.</em>
          </h1>
          <p className="home-lede">
            Websites, backends, and hands-on tech help &mdash; thoughtfully built and shaped around the way you work.
          </p>
          <div className="home-hero-actions">
            <a className="cta-button" href="/contact">
              Tell us what you need &rarr;
            </a>
            <a className="home-link" href="#services">
              Explore services
            </a>
          </div>
          <p className="home-place">Supporting small businesses and individuals anywhere. Based in Indiana.</p>
        </div>

        <div className="home-orbit" aria-hidden="true">
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <div className="orbit-core">
            <span className="orbit-core-brand">Hurd Craft Co.</span>
            <span className="orbit-core-line">Technology, thoughtfully built.</span>
          </div>
          {orbitChips.map((chip) => (
            <span key={chip.label} className={`orbit-chip ${chip.className}`}>
              {chip.label}
            </span>
          ))}
        </div>
      </header>

      <div className="home-strip">
        <p>Good technology should make the everyday easier.</p>
        <p>Clear advice. Useful work. Ongoing support.</p>
      </div>

      <section id="services" className="home-section" aria-label="Services">
        <div className="home-heading">
          <p className="home-kicker">A well-rounded toolkit</p>
          <h2>
            The right help for <em>the work in front of you.</em>
          </h2>
          <p className="home-sub">
            From the first website to the small fixes that keep everything moving, Hurd Craft Co. brings digital and
            everyday technology into one conversation.
          </p>
        </div>
        <ul className="card-grid card-grid-services">
          {serviceGroups.map((group, i) => (
            <li key={group.name} className="card">
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="home-aside">
          Something specific in mind?{' '}
          <a className="home-link" href="/contact">
            Tell us about it
          </a>
        </p>
      </section>

      <section id="approach" className="home-section" aria-label="How we work">
        <div className="home-heading">
          <p className="home-kicker">A straightforward way forward</p>
          <h2>
            Start <em>where you are.</em>
          </h2>
          <p className="home-sub">
            No two setups are quite alike. We&rsquo;ll meet you with practical guidance and focus on what will make a
            difference for you.
          </p>
        </div>
        <ol className="card-grid card-grid-steps">
          {steps.map((step, i) => (
            <li key={step.name} className="card">
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="works" className="home-section" aria-label="Works">
        <div className="home-heading">
          <p className="home-kicker">Selected projects</p>
          <h2>
            Built by <em>Hurd Craft Co.</em>
          </h2>
        </div>
        <ul className="card-grid card-grid-works">
          {works.map((work) =>
            work.href ? (
              <li key={work.name} className="card card-link">
                <a href={work.href}>
                  <h3>{work.name}</h3>
                  <p>{work.description}</p>
                  <span className="visit">Visit &rarr;</span>
                </a>
              </li>
            ) : (
              <li key={work.name} className="card">
                <h3>{work.name}</h3>
                <p>{work.description}</p>
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="home-cta" aria-label="Contact">
        <p className="home-kicker">A good place to begin</p>
        <h2>
          What could work <em>a little better?</em>
        </h2>
        <p className="home-sub">
          Tell us what you&rsquo;re building, what&rsquo;s not working, or what you&rsquo;d like to make simpler.
        </p>
        <a className="cta-button" href="/contact">
          Get in touch &rarr;
        </a>
        <ContactDetails />
      </section>

      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default App
