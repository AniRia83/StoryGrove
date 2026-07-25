import "./ReflectionCard.css";

export default function ReflectionCard({ story }) {
  if (!story.reflections?.trim()) return null;

  return (
    <section className="story-note-card">
      <div className="story-note-card__icon">
        🍂
      </div>

      <div className="story-note-card__content">
        <h2>Reflections</h2>

        <p>{story.reflections}</p>
      </div>
    </section>
  );
}