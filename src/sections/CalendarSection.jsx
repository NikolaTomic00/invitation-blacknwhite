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
        <p className="calendar-year">2026</p>
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
                className={
                  isCelebrationDate ? "calendar-day is-marked" : "calendar-day"
                }
                aria-label={
                  isCelebrationDate ? "6. septembar 2026." : undefined
                }
              >
                {isCelebrationDate ? (
                  <>
                    <svg
                      className="calendar-heart"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20.8,4.6c-2.1-2.1-5.5-2.1-7.6,0L12,5.8l-1.2-1.2c-2.1-2.1-5.5-2.1-7.6,0s-2.1,5.5,0,7.6l1.2,1.2L12,21l7.6-7.6l1.2-1.2C22.9,10.1,22.9,6.7,20.8,4.6z" />
                    </svg>
                    <span className="calendar-current-day">{day}</span>
                  </>
                ) : (
                  day
                )}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
