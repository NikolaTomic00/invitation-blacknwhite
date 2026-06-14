import { assetPath } from "../lib/assetPath";

export default function HeroSection({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="hero-inner">
        <p className="hero-names">MATEA & DANILO</p>

        <div className="hero-love-row">
          <p className="hero-vertical-text">Love governs the world</p>
          <img
            className="hero-love-image"
            src={assetPath("love-profile-cropped.png")}
            alt="Love"
          />
        </div>
      </div>
    </section>
  );
}
