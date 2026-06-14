const rsvpUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdmWj9fsw7zgAPd_51eBlPMMvcSGrxClSnLJPzPWzSSJNHqAQ/viewform?usp=dialog";

function CheckIcon() {
  return (
    <svg
      className="rsvp-check-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function RSVPButton({ children, href }) {
  return (
    <a className="rsvp-button" href={href} target="_blank" rel="noreferrer">
      <svg
        className="rsvp-button-border"
        viewBox="0 0 220 58"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="rsvp-button-border-gradient"
            x1="0"
            x2="220"
            y1="0"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#111111" />
            <stop offset="0.5" stopColor="#767676" />
            <stop offset="1" stopColor="#111111" />
          </linearGradient>
        </defs>
        <path
          className="rsvp-button-border-path"
          d="M 29 1 A 28 28 0 0 0 1 29 A 28 28 0 0 0 29 57 L 191 57 A 28 28 0 0 0 219 29 A 28 28 0 0 0 191 1 Z"
          fill="none"
          stroke="url(#rsvp-button-border-gradient)"
          strokeDasharray="370 560"
          strokeDashoffset="370"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>

      <span className="rsvp-button-content">{children}</span>
    </a>
  );
}

export default function RsvpSection({ id }) {
  return (
    <section id={id} className="rsvp-section" aria-label="RSVP">
      <div className="rsvp-inner">
        <p className="rsvp-text">
          Molimo vas da potvrdite dolazak klikom na dugme ispod.
        </p>

        <RSVPButton href={rsvpUrl}>
          <CheckIcon />
          Potvrdi dolazak
        </RSVPButton>
      </div>
    </section>
  );
}
