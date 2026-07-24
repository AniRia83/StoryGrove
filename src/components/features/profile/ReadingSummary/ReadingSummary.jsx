import "./ReadingSummary.css";

import { useCollection } from "../../../../context/CollectionContext";

export default function ReadingSummary({
  stories,
}) {
  const { collections } = useCollection();

  const totalStories = stories.length;

  const totalGroves = collections.length;

  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const bloomedStories = stories.filter(
    (story) => story.journey === "bloomed"
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
      : "0.0";

  const stats = [
    {
      icon: "📚",
      label: "Stories",
      value: totalStories,
    },
    {
      icon: "🌳",
      label: "Groves",
      value: totalGroves,
    },
    {
      icon: "🌱",
      label: "Growing",
      value: growingStories,
    },
    {
      icon: "🌸",
      label: "Bloomed",
      value: bloomedStories,
    },
    {
      icon: "✨",
      label: "Avg. Bloom",
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