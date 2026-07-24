import "./CollectionStats.css";

export default function CollectionStats({
  stories,
}) {

  const totalStories = stories.length;

  const averageBloom =
    totalStories > 0
      ? (
          stories.reduce(
            (sum, story) =>
              sum +
              Number(story.bloom || 0),
            0
          ) / totalStories
        ).toFixed(1)
      : "0.0";

  const growing =
    stories.filter(
      (story) =>
        story.journey === "started" ||
        story.journey === "growing"
    ).length;

  const bloomed =
    stories.filter(
      (story) =>
        story.journey === "bloomed"
    ).length;

  const averageProgress =
    totalStories > 0
      ? Math.round(
          stories.reduce((sum, story) => {

            if (
              !story.totalProgress
            )
              return sum;

            return (
              sum +
              (story.currentProgress /
                story.totalProgress) *
                100
            );

          }, 0) / totalStories
        )
      : 0;

  const lastUpdated =
    stories.length > 0
      ? new Date(
          [...stories].sort(
            (a, b) =>
              new Date(b.updatedAt) -
              new Date(a.updatedAt)
          )[0].updatedAt
        ).toLocaleDateString()
      : "—";

  const stats = [

    {
      icon: "📚",
      value: totalStories,
      label: "Stories",
    },

    {
      icon: "🌱",
      value: growing,
      label: "Growing",
    },

    {
      icon: "🌸",
      value: bloomed,
      label: "Bloomed",
    },

    {
      icon: "📖",
      value: `${averageProgress}%`,
      label: "Avg Progress",
    },

    {
      icon: "✨",
      value: averageBloom,
      label: "Avg Bloom",
    },

    {
      icon: "🕒",
      value: lastUpdated,
      label: "Last Updated",
    },

  ];

  return (

    <section className="collection-stats">

      {stats.map((stat) => (

        <article
          key={stat.label}
          className="collection-stat"
        >

          <div className="collection-stat__icon">
            {stat.icon}
          </div>

          <strong>
            {stat.value}
          </strong>

          <span>
            {stat.label}
          </span>

        </article>

      ))}

    </section>

  );
}