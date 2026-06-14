const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel%20Podgorica%2C%20Svetlane%20Kane%20Radevi%C4%87%201%2C%20Podgorica";

export default function LocationDetailsSection({ id }) {
  return (
    <section id={id} className="location-section" aria-label="Lokacija">
      <div className="location-inner">
        <h2 className="location-title">Lokacija</h2>

        <div className="location-copy">
          <p className="location-hotel">Hotel “Podgorica”</p>
          <p className="location-address">Svetlane Kane Radević 1, Podgorica</p>
        </div>

        <div className="location-visual-row">
          <img
            className="location-image"
            src="/hotel.png"
            alt="Hotel Podgorica"
          />
          <p className="location-vertical-text">Love governs the world</p>
        </div>

        <a
          className="location-map-button"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Pogledaj na mapi
        </a>
      </div>
    </section>
  );
}
