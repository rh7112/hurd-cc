import { useState } from 'react'
import './App.css'
import './Contact.css'
import ContactDetails from './ContactDetails.jsx'
import Logo from './Logo.jsx'
import { phoneDisplay, phoneHref, contactEmail, contactEmailHref, contactApiUrl } from './siteInfo.js'

const projectTypes = [
  'A new website',
  'Updating or fixing my website',
  'Google / local search presence',
  'Internal tools or automation',
  'Computer build or repair',
  'Smart home',
  'IT help or advice',
  'Something else',
]

const budgets = ['Not sure yet', 'Under $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000+']

const timings = ['No rush', 'Within a few months', 'Within a month', 'As soon as possible']

// The contact API takes name/email/subject/message only, so the extra
// project details ride along at the top of the message body rather than
// requiring a backend change.
function buildMessage({ projectType, budget, timing, message }) {
  const details = [
    projectType && `Project type: ${projectType}`,
    budget && `Budget: ${budget}`,
    timing && `Timing: ${timing}`,
  ].filter(Boolean)
  return details.length ? `${details.join('\n')}\n\n${message}` : message
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const [timing, setTiming] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: projectType,
          message: buildMessage({ projectType, budget, timing, message }),
        }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setProjectType('')
      setBudget('')
      setTiming('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="page">
      <nav className="home-nav" aria-label="Primary">
        <Logo />
        <div className="home-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </nav>

      <div className="contact-layout">
        <section className="contact-main">
          <header className="contact-hero">
            <p className="home-kicker">Get in touch</p>
            <h1>
              Tell me what <em>you&rsquo;re working on.</em>
            </h1>
            <p className="lede">
              A few details help me give you a useful answer the first time. Not sure about something? Skip it
              &mdash; I&rsquo;ll ask.
            </p>
          </header>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="project-type">What do you need help with?</label>
              <select id="project-type" required value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option value="" disabled>
                  Choose one
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="budget">
                  Budget <span className="form-optional">(optional)</span>
                </label>
                <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option value="">Choose one</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="timing">
                  Timing <span className="form-optional">(optional)</span>
                </label>
                <select id="timing" value={timing} onChange={(e) => setTiming(e.target.value)}>
                  <option value="">Choose one</option>
                  {timings.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">What&rsquo;s going on?</label>
              <textarea id="message" rows="6" required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <button type="submit" className="cta-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="form-status form-status-success" role="status">
                Thanks &mdash; your message is on its way. I&rsquo;ll reply by email within 1 business day.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </section>

        <aside className="contact-aside" aria-label="Other ways to reach me">
          <div className="card">
            <h3>Prefer to talk?</h3>
            <p>
              Call or text <a href={phoneHref}>{phoneDisplay}</a>, or email{' '}
              <a href={contactEmailHref}>{contactEmail}</a>.
            </p>
          </div>
          <div className="card">
            <h3>What happens next</h3>
            <ol className="aside-steps">
              <li>I reply by email within 1 business day.</li>
              <li>We talk through the goal and what makes sense to do first.</li>
              <li>You get a clear scope and price before any work starts.</li>
            </ol>
          </div>
          <div className="card">
            <h3>Where I work</h3>
            <p>
              Based in Indiana, serving small businesses and individuals in Warsaw, Winona Lake, Syracuse, and the
              rest of Kosciusko County &mdash; and remotely anywhere else.{' '}
              <a href="/about">More about me &rarr;</a>
            </p>
          </div>
        </aside>
      </div>

      <ContactDetails />
      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default Contact
