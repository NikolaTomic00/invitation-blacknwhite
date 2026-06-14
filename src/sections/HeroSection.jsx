export default function HeroSection({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="hero-inner">
        <p className="hero-names">Martin &amp; Alena</p>

        <div className="hero-love-row">
          <p className="hero-vertical-text">sacuvajte dan za nas</p>
          <img className="hero-love-image" src="/love-profile-cropped.png" alt="Love" />
        </div>
      </div>
    </section>
  );
}
