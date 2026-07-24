import "./AchievementGarden.css";

import Section from "../../../ui/Section";

export default function AchievementGarden({
  stories,
}) {
  const averageBloom =
    stories.length > 0
      ? stories.reduce(
          (sum, story) =>
            sum + Number(story.bloom || 0),
          0
        ) / stories.length
      : 0;

  const reflections = stories.filter(
    (story) =>
      story.reflections &&
      story.reflections.trim() !== ""
  ).length;

  const fireflies = stories.filter(
    (story) =>
      story.firefly &&
      story.firefly.trim() !== ""
  ).length;

  const bloomedStories = stories.filter(
    (story) =>
      story.journey === "bloomed"
  ).length;

  const mediaTypes =
    new Set(
      stories.map(
        (story) => story.mediaType
      )
    ).size;

  const achievements = [

    {
      icon: "🌱",
      title: "First Seed",
      description:
        "Plant your first story.",
      unlocked:
        stories.length >= 1,
    },

    {
      icon: "🌿",
      title: "Growing Grove",
      description:
        "Plant 10 stories.",
      unlocked:
        stories.length >= 10,
    },

    {
      icon: "🌳",
      title: "Forest Keeper",
      description:
        "Plant 50 stories.",
      unlocked:
        stories.length >= 50,
    },

    {
      icon: "🌸",
      title: "Bloom Master",
      description:
        "Bloom 10 stories.",
      unlocked:
        bloomedStories >= 10,
    },

    {
      icon: "✨",
      title: "Golden Bloom",
      description:
        "Average Bloom above 8.",
      unlocked:
        averageBloom >= 8,
    },

    {
      icon: "📚",
      title: "Collector",
      description:
        "Plant every media type.",
      unlocked:
        mediaTypes >= 10,
    },

    {
      icon: "🍂",
      title: "Reflection Keeper",
      description:
        "Write 20 reflections.",
      unlocked:
        reflections >= 20,
    },

    {
      icon: "🧚",
      title: "Firefly Whisperer",
      description:
        "Save 50 Fireflies.",
      unlocked:
        fireflies >= 50,
    },

  ];

  return (
    <Section
      title="Garden Milestones"
      icon="🏆"
    >

      <div className="achievement-garden__grid">

        {achievements.map(
          (achievement) => (

            <article
              key={achievement.title}
              className={`achievement-card ${
                achievement.unlocked
                  ? "achievement-card--unlocked"
                  : "achievement-card--locked"
              }`}
            >

              <span className="achievement-card__icon">
                {achievement.icon}
              </span>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.description}
              </p>

              <div className="achievement-card__status">

                {achievement.unlocked
                  ? "Unlocked ✓"
                  : "Locked"}

              </div>

            </article>

          )
        )}

      </div>

    </Section>
  );
}