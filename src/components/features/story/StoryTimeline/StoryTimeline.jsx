import "./StoryTimeline.css";

const icons = {
  plant: "🌱",
  progress: "📖",
  journey: "🌿",
  bloom: "✨",
  reflection: "📝",
  firefly: "🧚",
};

export default function StoryTimeline({
  story,
}) {
  const timeline = [
    ...(story.timeline || []),
  ].reverse();

  return (
    <section className="story-timeline">

      <h2>🌲 Story Timeline</h2>

      {timeline.length === 0 ? (

        <div className="story-timeline__empty">
          This story hasn't grown yet.
        </div>

      ) : (

        <div className="story-timeline__list">

          {timeline.map((event) => (

            <div
              key={event.id}
              className="story-timeline__item"
            >

              <div
                className={`story-timeline__icon story-timeline__icon--${event.type}`}
              >
                {icons[event.type] || "🌿"}
              </div>

              <div className="story-timeline__content">

                <h3>
                  {event.message}
                </h3>

                <p>
                  {new Date(
                    event.createdAt
                  ).toLocaleString()}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}