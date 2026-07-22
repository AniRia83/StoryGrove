import "./CollectionStats.css";

export default function CollectionStats({
  totalStories,
  averageBloom,
  growingCount,
  finishedCount,
}) {
  const stats = [
    {
      icon: "📚",
      value: totalStories,
      label: "Stories",
    },
    {
      icon: "✨",
      value: averageBloom,
      label: "Average Bloom",
    },
    {
      icon: "🌱",
      value: growingCount,
      label: "Growing",
    },
    {
      icon: "🌸",
      value: finishedCount,
      label: "Finished",
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