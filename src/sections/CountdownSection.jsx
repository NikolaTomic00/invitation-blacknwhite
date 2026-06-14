import { Fragment, useEffect, useState } from "react";

const celebrationStart = new Date("2026-09-06T17:00:00+02:00").getTime();

function getCountdownParts() {
  const remaining = Math.max(0, celebrationStart - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function CountdownSection({ id }) {
  const [timeLeft, setTimeLeft] = useState(getCountdownParts);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getCountdownParts());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = [
    { label: "dani", value: timeLeft.days },
    { label: "sati", value: pad(timeLeft.hours) },
    { label: "min", value: pad(timeLeft.minutes) },
    { label: "sek", value: pad(timeLeft.seconds) },
  ];

  return (
    <section id={id} className="countdown-section" aria-label="Odbrojavanje">
      <div className="countdown-inner">
        <h2 className="countdown-title">Brojimo zajedno</h2>

        <div className="countdown-row" aria-live="polite">
          {items.map((item, index) => (
            <Fragment key={item.label}>
              <div className="countdown-item">
                <span className="countdown-value">{item.value}</span>
                <span className="countdown-label">{item.label}</span>
              </div>
              {index < items.length - 1 && (
                <span
                  className="countdown-separator"
                  aria-hidden="true"
                >
                  :
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
