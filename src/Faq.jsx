import './App.css'
import './Faq.css'
import ContactDetails from './ContactDetails.jsx'
import Logo from './Logo.jsx'

const faqs = [
  {
    q: 'Who will I be working with?',
    a: 'Me, Ryan. Hurd Craft Co. is a one-person business, so you talk directly to the person doing the work -- no account managers and no hand-offs.',
  },
  {
    q: 'What kinds of projects do you take on?',
    a: 'Websites and the backends behind them, Google and local search setup, internal tools and automation, PC builds and light repair, smart home setups, and plain-language IT advice. If your project is something else, ask -- I will tell you honestly whether I am the right fit.',
  },
  {
    q: 'How much will it cost?',
    a: 'It depends on what you need, and I would rather quote the real project than guess from a price list. After we talk through your goal, you get a clear scope and a clear price before any work starts. The budget field on the contact form is optional, but it helps me suggest something that fits.',
  },
  {
    q: "I'm not sure what I need. Is that okay?",
    a: 'Completely. Most people start with a problem, not a specification. Tell me what is not working or what you would like to be easier, and we will figure out a sensible first step together.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'I reply by email, we talk through the goal and what makes sense to do first, and then you get a scope and price before any work starts. Nothing begins until you are comfortable with it.',
  },
  {
    q: 'Do you work with people outside Indiana?',
    a: 'Yes. I am based in Indiana and work with clients anywhere. Most software and website work happens remotely, and I can meet in person around Kosciusko County and the surrounding counties.',
  },
  {
    q: 'How long will my project take?',
    a: 'It varies a lot -- a small fix and a custom tool are very different jobs. Once I understand the work, I will give you an honest estimate as part of the scope rather than a generic promise up front.',
  },
  {
    q: 'What happens after the project is finished?',
    a: 'I build things to be useful and durable, not just launched. I also offer website hosting and ongoing support, so you have someone to call when something needs changing or stops working.',
  },
]

function Faq() {
  return (
    <main className="page">
      <nav className="home-nav" aria-label="Primary">
        <Logo />
        <div className="home-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a className="home-nav-cta" href="/contact">
            Let&rsquo;s talk
          </a>
        </div>
      </nav>

      <header className="faq-hero">
        <p className="home-kicker">FAQ</p>
        <h1>
          Questions people <em>ask first.</em>
        </h1>
        <p className="lede">
          Straight answers about how I work. Don&rsquo;t see yours? Send it over and I&rsquo;ll answer it directly.
        </p>
      </header>

      <section className="home-section" aria-label="Frequently asked questions">
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-cta" aria-label="Contact">
        <p className="home-kicker">Still wondering?</p>
        <h2>
          Ask me <em>anything.</em>
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

export default Faq
