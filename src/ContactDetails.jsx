import { phoneDisplay, phoneHref, contactEmail, contactEmailHref } from './siteInfo.js'

// Sits directly above <hurd-footer> on every page -- quick, no-click-
// through contact info, separate from the footer component itself
// (which has no contact-info slot of its own).
function ContactDetails() {
  return (
    <div className="contact-details">
      <a href={phoneHref}>{phoneDisplay}</a>
      <span className="contact-details-sep" aria-hidden="true">
        &middot;
      </span>
      <a href={contactEmailHref}>{contactEmail}</a>
    </div>
  )
}

export default ContactDetails
