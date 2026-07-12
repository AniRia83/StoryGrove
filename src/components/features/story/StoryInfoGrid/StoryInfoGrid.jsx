import "./StoryInfoGrid.css";

export default function StoryInfoGrid({ story }) {
  return (
    <section className="story-info-grid">

      <div className="story-info-card">
        <span>Genre</span>
        <strong>{story.genre || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>Grove</span>
        <strong>{story.grove || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>Origin</span>
        <strong>{story.origin || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>Journey</span>
        <strong>{story.journey}</strong>
      </div>

    </section>
  );
}