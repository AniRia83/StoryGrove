import "./StoryTimeline.css";

export default function StoryTimeline({
  story,
}) {

  const timeline = [];

  if (story.plantedAt) {
    timeline.push({
      icon: "🌱",
      title: "Story planted",
      date: story.plantedAt,
    });
  }

  if (
    story.currentProgress > 0 &&
    story.totalProgress > 0
  ) {
    timeline.push({
      icon: "📖",
      title: `Reading progress: ${story.currentProgress}/${story.totalProgress}`,
      date: story.plantedAt,
    });
  }

  timeline.push({
    icon: "🌿",
    title: `Journey: ${story.journey}`,
    date: story.plantedAt,
  });

  timeline.push({
    icon: "✨",
    title: `Bloom ${story.bloom}/10`,
    date: story.plantedAt,
  });

  return (
    <section className="story-timeline">

      <h2>🌲 Story Timeline</h2>

      <div className="story-timeline__list">

        {timeline.map((event, index) => (

          <div
            key={index}
            className="story-timeline__item"
          >

            <div className="story-timeline__icon">
              {event.icon}
            </div>

            <div>

              <h3>{event.title}</h3>

              <p>
                {new Date(
                  event.date
                ).toLocaleDateString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}