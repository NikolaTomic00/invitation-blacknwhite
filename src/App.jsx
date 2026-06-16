import CalendarSection from "./sections/CalendarSection.jsx";
import CountdownSection from "./sections/CountdownSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import InvitationTextSection from "./sections/InvitationTextSection.jsx";
import LocationDetailsSection from "./sections/LocationDetailsSection.jsx";
import RsvpSection from "./sections/RsvpSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "invitation-text", Component: InvitationTextSection },
  { id: "calendar", Component: CalendarSection },
  { id: "location-details", Component: LocationDetailsSection },
  { id: "countdown", Component: CountdownSection },
  { id: "rsvp", Component: RsvpSection },
  { id: "footer", Component: FooterSection },
];

const APP_DEACTIVATED = true;

export default function App() {
  if (APP_DEACTIVATED) {
    return (
      <main className="deactivated-page">
        <section className="deactivated-panel" aria-label="Unavailable page">
          <h1 className="deactivated-title">Stranica nije dostupna. </h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
    </main>
  );
}
