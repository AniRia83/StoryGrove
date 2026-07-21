import "./GardenQuote.css";

const quotes = [
  "Every story leaves another leaf on your tree.",
  "Bloom slowly. Every story has its season.",
  "Some stories stay on shelves. Others become forests.",
  "A grove grows one story at a time.",
  "Every page turned grows another branch.",
];

export default function GardenQuote() {
  const quote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="garden-quote">

      <div className="garden-quote__card">

        <span className="garden-quote__icon">
          🌿
        </span>

        <p className="garden-quote__text">
          "{quote}"
        </p>

        <span className="garden-quote__brand">
          — StoryGrove
        </span>

      </div>

    </section>
  );
}