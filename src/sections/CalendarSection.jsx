const weekdays = ["PO", "UT", "SR", "ČE", "PE", "SU", "NE"];

const calendarDays = [
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

export default function CalendarSection({ id }) {
  return (
    <section id={id} className="calendar-section" aria-label="Kalendar">
      <div className="calendar-inner">
        <h2 className="calendar-month">Septembar</h2>
        <span className="calendar-rule" aria-hidden="true" />

        <div className="calendar-weekdays" aria-hidden="true">
          {weekdays.map((weekday) => (
            <span key={weekday}>{weekday}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((day, index) => {
            const isCelebrationDate = day === "6";

            return (
              <span
                key={`${day || "empty"}-${index}`}
                className={isCelebrationDate ? "calendar-day is-marked" : "calendar-day"}
                aria-label={isCelebrationDate ? "6. septembar 2026." : undefined}
              >
                {isCelebrationDate && <span className="calendar-heart" aria-hidden="true">♡</span>}
                {day}
              </span>
            );
          })}
        </div>

        <p className="calendar-year">2026</p>
      </div>
    </section>
  );
}
