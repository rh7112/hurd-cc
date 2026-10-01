import { useState } from 'react'
import './App.css'
import './Contact.css'
import ContactDetails from './ContactDetails.jsx'
import { phoneDisplay, phoneHref, contactApiUrl } from './siteInfo.js'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
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
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="page">
      <header className="contact-hero">
        <p className="eyebrow">
          <a href="/">Hurd Craft Co. LLC</a>
        </p>
        <h1>Get in touch</h1>
        <p className="lede">
          Send a message and I'll get back to you -- or call/text{' '}
          <a href={phoneHref}>{phoneDisplay}</a> if it's urgent.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" required value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button type="submit" className="cta-button" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'sent' && <p className="form-status form-status-success">Thanks -- your message is on its way.</p>}
        {status === 'error' && <p className="form-status form-status-error">{errorMessage}</p>}
      </form>

      <ContactDetails />
      <hurd-footer tagline="Hurd Craft Co. LLC"></hurd-footer>
    </main>
  )
}

export default Contact
