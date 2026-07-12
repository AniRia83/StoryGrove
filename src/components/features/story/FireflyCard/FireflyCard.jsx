import "./FireflyCard.css";

export default function FireflyCard({ firefly }) {
  return (
    <section className="firefly-card">

      <div className="firefly-card__header">

        <span>✨</span>

        <h2>Firefly</h2>

      </div>

      <p className="firefly-card__text">
        {firefly || "No firefly captured yet."}
      </p>

    </section>
  );
}