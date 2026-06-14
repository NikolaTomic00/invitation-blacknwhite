import CalendarSection from "./sections/CalendarSection.jsx";
import CountdownSection from "./sections/CountdownSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import InvitationTextSection from "./sections/InvitationTextSection.jsx";
import LocationDetailsSection from "./sections/LocationDetailsSection.jsx";
import RsvpSection from "./sections/RsvpSection.jsx";

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "invitation-text", Component: InvitationTextSection },
  { id: "calendar", Component: CalendarSection },
  { id: "location-details", Component: LocationDetailsSection },
  { id: "countdown", Component: CountdownSection },
  { id: "rsvp", Component: RsvpSection },
];

export default function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
    </main>
  );
}
