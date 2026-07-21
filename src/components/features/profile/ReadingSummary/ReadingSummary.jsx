import "./ReadingSummary.css";

export default function ReadingSummary({
  stories,
}) {
  const totalStories = stories.length;

  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const finishedStories = stories.filter(
    (story) => story.journey === "finished"
  ).length;

  const averageBloom =
    totalStories > 0
      ? (
          stories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / totalStories
        ).toFixed(1)
      : 0;

  const stats = [
    {
      icon: "📚",
      label: "Stories Planted",
      value: totalStories,
    },
    {
      icon: "🌱",
      label: "Growing",
      value: growingStories,
    },
    {
      icon: "🌸",
      label: "Finished",
      value: finishedStories,
    },
    {
      icon: "✨",
      label: "Average Bloom",
      value: averageBloom,
    },
  ];

  return (
    <section className="reading-summary">

      {stats.map((stat) => (
        <article
          key={stat.label}
          className="reading-summary__card"
        >

          <span className="reading-summary__icon">
            {stat.icon}
          </span>

          <h2>{stat.value}</h2>

          <p>{stat.label}</p>

        </article>
      ))}

    </section>
  );
}