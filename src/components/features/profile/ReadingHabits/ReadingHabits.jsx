import "./ReadingHabits.css";

import Section from "../../../ui/Section";

export default function ReadingHabits({
  stories,
}) {

  const completedStories = stories.filter(
    (story) => story.journey === "bloomed"
  ).length;

  const inProgressStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const completionRate =
    stories.length > 0
      ? Math.round(
          (completedStories / stories.length) * 100
        )
      : 0;

  const averageProgress =
    stories.length > 0
      ? Math.round(
          stories.reduce((sum, story) => {

            if (
              !story.totalProgress ||
              story.totalProgress <= 0
            ) {
              return sum;
            }

            return (
              sum +
              (story.currentProgress /
                story.totalProgress) *
                100
            );

          }, 0) / stories.length
        )
      : 0;

  const stats = [
    {
      icon: "🔥",
      label: "Completed",
      value: completedStories,
      accent: "completed",
    },
    {
      icon: "🌱",
      label: "In Progress",
      value: inProgressStories,
      accent: "progress",
    },
    {
      icon: "🏆",
      label: "Completion Rate",
      value: `${completionRate}%`,
      accent: "rate",
    },
    {
      icon: "📈",
      label: "Average Progress",
      value: `${averageProgress}%`,
      accent: "average",
    },
  ];

  return (

    <Section
      title="Reading Habits"
      icon="📖"
    >

      <div className="reading-habits__grid">

        {stats.map((stat) => (

          <article
            key={stat.label}
            className={`habit-card ${stat.accent}`}
          >

            <div className="habit-card__icon">
              {stat.icon}
            </div>

            <h3>{stat.value}</h3>

            <p>{stat.label}</p>

          </article>

        ))}

      </div>

    </Section>

  );

}