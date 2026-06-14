export default function InvitationTextSection({ id }) {
  return (
    <section
      id={id}
      className="details-section"
      aria-label="Invitation details"
    >
      <div className="details-shell">
        <div className="details-card">
          <span className="details-ring" aria-hidden="true" />

          <p className="details-guests">DRAGI GOSTI</p>

          <p className="details-intro">
            Sa radošću vas pozivamo da svojim prisustvom uveličate naše
            vjenčanje.
          </p>

          <p className="details-date">06.09.2026.</p>

          <div className="details-times">
            <p>Hotel “Podgorica”</p>
            <p>Prijem gostiju od 17h do 17:45h</p>
            <p>Svečana ceremonija u 18h</p>
          </div>

          <p className="details-closing">Radosno vas očekujemo,</p>

          <p className="details-families">Porodice Kapičić i Petričević.</p>

          <span className="details-divider" aria-hidden="true" />

          <p className="details-rsvp">
            Molimo vas da dolazak potvrdite do 15. avgusta 2026. godine.
          </p>
        </div>
      </div>
    </section>
  );
}
