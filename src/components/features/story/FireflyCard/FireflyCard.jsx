import "./FireflyCard.css";

export default function FireflyCard({ story }) {
  return (
    <section className="firefly-card">

      <div className="firefly-card__header">

        <span className="firefly-card__icon">
          ✨
        </span>

        <h2>Firefly</h2>

      </div>

      <p className="firefly-card__text">
        {story.firefly || "No fireflies captured yet."}
      </p>

    </section>
  );
}