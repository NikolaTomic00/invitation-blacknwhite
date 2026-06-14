export default function InvitationTextSection({ id }) {
  return (
    <section id={id} className="details-section" aria-label="Invitation details">
      <div className="details-shell">
        <div className="details-card">
          <span className="details-ring" aria-hidden="true" />

          <p className="details-intro">
            Sacuvajte dan za nas i budite deo nasih najlepsih uspomena.
          </p>

          <p className="details-date">26. SEPTEMBAR 2026.</p>

          <div className="details-times">
            <p>13.00 h - crkveno vencanje</p>
            <p>16.30 h - svecana proslava</p>
            <p>17.30 h - gradjansko vencanje</p>
          </div>

          <p className="details-location">Svecana sala "Kristal", Pecinci</p>

          <p className="details-closing">Radosno vas ocekujemo,</p>

          <p className="details-families">Martin i Alena</p>

          <span className="details-divider" aria-hidden="true" />

          <p className="details-rsvp">
            Molimo vas da svoje prisustvo potvrdite do 15. septembra.
          </p>
        </div>
      </div>
    </section>
  );
}
