import "./ReadingHabits.css";

import Section from "../../../ui/Section";

export default function ReadingHabits({
  stories,
}) {
  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const bloomedStories = stories.filter(
    (story) => story.journey === "bloomed"
  ).length;

  const averageBloom =
    stories.length > 0
      ? (
          stories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / stories.length
        ).toFixed(1)
      : "0.0";

  const averageCompletion =
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

  return (
    <Section
      title="Reading Habits"
      icon="📖"
    >

      <div className="reading-habits__grid">

        <article className="habit-card">
          <span className="habit-card__icon">
            🌱
          </span>

          <h3>{growingStories}</h3>

          <p>Growing</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">
            🌸
          </span>

          <h3>{bloomedStories}</h3>

          <p>Bloomed</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">
            ✨
          </span>

          <h3>{averageBloom}</h3>

          <p>Average Bloom</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">
            📈
          </span>

          <h3>{averageCompletion}%</h3>

          <p>Average Progress</p>
        </article>

      </div>

    </Section>
  );
}