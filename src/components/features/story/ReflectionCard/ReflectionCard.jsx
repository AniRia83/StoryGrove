import "./ReflectionCard.css";

export default function ReflectionCard({ story }) {
  return (
    <section className="reflection-card">

      <div className="reflection-card__header">

        <span className="reflection-card__icon">
          🍂
        </span>

        <h2>Reflections</h2>

      </div>

      <p className="reflection-card__text">
        {story.reflections || "No reflections planted yet."}
      </p>

    </section>
  );
}