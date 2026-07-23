import "./StoryTimeline.css";

export default function StoryTimeline({
  story,
}) {
  const plantedDate = story.plantedAt
    ? new Date(
        story.plantedAt
      ).toLocaleDateString()
    : null;

  const updatedDate = story.updatedAt
    ? new Date(
        story.updatedAt
      ).toLocaleDateString()
    : null;

  const completed =
    story.journey === "completed" ||
    story.journey === "finished";

  const progress =
    story.totalProgress > 0
      ? Math.round(
          (story.currentProgress /
            story.totalProgress) *
            100
        )
      : 0;

  const timeline = [
    {
      icon: "🌱",
      title: "Story planted",
      value:
        plantedDate || "Unknown",
    },

    {
      icon: "📖",
      title: "Current journey",
      value: story.journey,
    },

    {
      icon: "📈",
      title: "Reading progress",
      value:
        story.totalProgress > 0
          ? `${progress}%`
          : "Not started",
    },

    {
      icon: "✨",
      title: "Current Bloom",
      value: `${story.bloom}/10`,
    },
  ];

  if (updatedDate) {
    timeline.push({
      icon: "🍃",
      title: "Last updated",
      value: updatedDate,
    });
  }

  if (completed) {
    timeline.push({
      icon: "🌸",
      title: "Story completed",
      value:
        updatedDate ||
        "Completed",
    });
  }

  return (
    <section className="story-timeline">

      <h2>
        🌲 Story Timeline
      </h2>

      <div className="story-timeline__list">

        {timeline.map(
          (event, index) => (
            <div
              key={index}
              className="story-timeline__item"
            >
              <div className="story-timeline__icon">
                {event.icon}
              </div>

              <div>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.value}
                </p>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}