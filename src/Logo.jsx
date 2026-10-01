// The Hurd Craft Co. wordmark -- "Hurd" (Fraunces) beside "Craft"/"Co."
// stacked (Manrope). Colors come from this site's own --accent-2/--accent
// tokens (already light/dark aware), not hardcoded hex, since this
// renders within hurd-cc itself rather than an external host page.
function Logo({ className }) {
  return (
    <svg
      className={`logo-mark ${className ?? ''}`}
      viewBox="0 0 118 26"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hurd Craft Co. LLC"
    >
      <text x="0" y="20" className="logo-mark-hurd">Hurd</text>
      <text x="64" y="11" className="logo-mark-stack">CRAFT</text>
      <text x="64" y="21" className="logo-mark-stack">CO.</text>
    </svg>
  )
}

export default Logo
