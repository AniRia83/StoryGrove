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
      value: totalStories,
      label: "Stories",
      accent: "stories",
    },
    {
      icon: "🌳",
      value: totalGroves,
      label: "Groves",
      accent: "groves",
    },
    {
      icon: "🌱",
      value: growingStories,
      label: "Growing",
      accent: "growing",
    },
    {
      icon: "🌸",
      value: bloomedStories,
      label: "Bloomed",
      accent: "bloomed",
    },
    {
      icon: "✨",
      value: averageBloom,
      label: "Average Bloom",
      accent: "bloom",
    },
  ];

  return (
    <section className="reading-summary">

      {stats.map((stat) => (

        <article
          key={stat.label}
          className={`reading-summary__card ${stat.accent}`}
        >

          <div className="reading-summary__icon">
            {stat.icon}
          </div>

          <h2>{stat.value}</h2>

          <p>{stat.label}</p>

        </article>

      ))}

    </section>
  );
}