import "./AchievementGarden.css";
import Section from "../../../ui/Section";

export default function AchievementGarden({
  stories,
}) {
  const averageBloom =
    stories.length > 0
      ? stories.reduce(
          (sum, story) => sum + Number(story.bloom || 0),
          0
        ) / stories.length
      : 0;

  const milestones = [
    {
      icon: "🌱",
      title: "First Seed",
      description: "Plant your first story.",
      unlocked: stories.length >= 1,
    },
    {
      icon: "🌿",
      title: "Growing Grove",
      description: "Plant 10 stories.",
      unlocked: stories.length >= 10,
    },
    {
      icon: "🌸",
      title: "Bloom Master",
      description: "Average Bloom above 8.",
      unlocked: averageBloom >= 8,
    },
    {
      icon: "📚",
      title: "Collector",
      description: "Plant every media type.",
      unlocked: false,
    },
    {
      icon: "🔥",
      title: "Reflection Keeper",
      description: "Write 20 reflections.",
      unlocked: false,
    },
    {
      icon: "🧚",
      title: "Firefly Whisperer",
      description: "Save 50 Fireflies.",
      unlocked: false,
    },
  ];

  return (
    <Section
      title="Garden Milestones"
      icon="🌿"
    >
      <div className="achievement-garden__grid">

        {milestones.map((milestone) => (

          <article
            key={milestone.title}
            className={`achievement-card ${
              milestone.unlocked
                ? "achievement-card--unlocked"
                : "achievement-card--locked"
            }`}
          >

            <span className="achievement-card__icon">
              {milestone.icon}
            </span>

            <h3>{milestone.title}</h3>

            <p>{milestone.description}</p>

          </article>

        ))}

      </div>
    </Section>
  );
}