import './App.css'
import './About.css'
import ContactDetails from './ContactDetails.jsx'
import Logo from './Logo.jsx'

const strengths = [
  {
    name: 'Internal tools & workflows',
    description:
      'My day job is building operational tools with Retool and SQL, so I know how to turn a spreadsheet-and-email process into something your team can actually use.',
  },
  {
    name: 'Websites & backends',
    description:
      'Custom sites and the APIs behind them, built with modern tools and kept simple enough to maintain.',
  },
  {
    name: 'Hands-on tech help',
    description:
      'PC builds, light repair, smart home setups, and plain-language IT advice for people who just want it to work.',
  },
]

const principles = [
  'You talk to the person doing the work -- no account managers, no hand-offs.',
  'Clear scope and a clear price before any work starts.',
  'Plain-language explanations, not jargon.',
  'Built to be useful and durable, not just launched.',
]

const skills = ['Retool', 'SQL / PostgreSQL', 'JavaScript', 'React', 'Automation', 'Website hosting']

function About() {
  return (
    <main className="page">
      <nav className="home-nav" aria-label="Primary">
        <Logo />
        <div className="home-nav-links">
          <a href="/">Home</a>
          <a className="home-nav-cta" href="/contact">
            Let&rsquo;s talk
          </a>
        </div>
      </nav>

      <header className="about-hero">
        <p className="home-kicker">About</p>
        <h1>
          Hi, I&rsquo;m Ryan. <em>Hurd Craft Co. is me.</em>
        </h1>
        <p className="lede">
          I&rsquo;m a software engineer based in Indiana. Hurd Craft Co. LLC is my own small business, where I help
          small businesses and individuals, wherever they are, with websites, internal tools, and everyday
          technology.
        </p>
      </header>

      <section className="home-section" aria-label="What I do">
        <div className="home-heading">
          <p className="home-kicker">Background</p>
          <h2>
            Where I&rsquo;m <em>most useful.</em>
          </h2>
        </div>
        <ul className="card-grid card-grid-services">
          {strengths.map((s) => (
            <li key={s.name} className="card">
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
        <ul className="chip-list" aria-label="Tools I work with">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="home-aside">
          Want the full résumé-style picture?{' '}
          <a className="home-link" href="https://ryan.hurd.cc">
            See my portfolio
          </a>
        </p>
      </section>

      <section className="home-section" aria-label="How I work">
        <div className="home-heading">
          <p className="home-kicker">How I work</p>
          <h2>
            Small business, <em>personal service.</em>
          </h2>
        </div>
        <ul className="about-principles">
          {principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="home-cta" aria-label="Contact">
        <p className="home-kicker">Let&rsquo;s talk</p>
        <h2>
          Got something <em>in mind?</em>
        </h2>
        <p className="home-sub">Tell me what you&rsquo;re working on, and I&rsquo;ll get back to you as soon as I can.</p>
        <a className="cta-button" href="/contact">
          Get in touch &rarr;
        </a>
        <ContactDetails />
      </section>

      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default About
