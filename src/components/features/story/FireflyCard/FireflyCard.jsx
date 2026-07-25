import "./FireflyCard.css";

export default function FireflyCard({
  story,
}) {
  if (!story.firefly?.trim()) return null;

  return (
    <section className="firefly-card">

      <div className="firefly-card__glow">
        ✨
      </div>

      <h2>
        Firefly
      </h2>

      <p className="firefly-card__subtitle">
        The one thing that still glows after
        finishing this story.
      </p>

      <blockquote className="firefly-card__quote">
        “{story.firefly}”
      </blockquote>

    </section>
  );
}