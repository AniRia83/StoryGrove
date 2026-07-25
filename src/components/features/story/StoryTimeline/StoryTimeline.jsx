import "./StoryTimeline.css";

const icons = {
  plant: "🌱",
  progress: "📖",
  journey: "🌿",
  bloom: "⭐",
  reflection: "🍂",
  firefly: "✨",
  cover: "🖼️",
  grove: "🌳",
  genre: "🏷️",
};

export default function StoryTimeline({
  story,
}) {
  const timeline = [
    ...(story.timeline || []),
  ].reverse();

  return (
    <section className="story-timeline">

      <div className="story-timeline__header">

        <h2>🌲 Story Journey</h2>

        <p>
          Every story leaves footprints through
          your grove.
        </p>

      </div>

      {timeline.length === 0 ? (

        <div className="story-timeline__empty">
          🌱 Nothing has happened yet.
        </div>

      ) : (

        <div className="story-timeline__list">

          {timeline.map((event) => (

            <article
              key={event.id}
              className="story-timeline__item"
            >

              <div
                className={`story-timeline__icon story-timeline__icon--${event.type}`}
              >
                {icons[event.type] || "🌿"}
              </div>

              <div className="story-timeline__content">

                <h3>{event.message}</h3>

                <time>
                  {new Date(
                    event.createdAt
                  ).toLocaleString()}
                </time>

              </div>

            </article>

          ))}

        </div>

      )}

    </section>
  );
}