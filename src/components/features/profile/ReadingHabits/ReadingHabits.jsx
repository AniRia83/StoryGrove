import "./ReadingHabits.css";
import Section from "../../../ui/Section";

export default function ReadingHabits({
  stories,
}) {
  const finishedStories = stories.filter(
    (story) => story.status === "completed"
  ).length;

  const growingStories = stories.filter(
    (story) => story.status === "growing"
  ).length;

  const averageBloom =
    stories.length > 0
      ? (
          stories.reduce(
            (sum, story) => sum + Number(story.bloom || 0),
            0
          ) / stories.length
        ).toFixed(1)
      : "0.0";

  return (
    <Section
      title="Reading Habits"
      icon="📖"
    >

      <div className="reading-habits__grid">

        <article className="habit-card">
          <span className="habit-card__icon">🌱</span>
          <h3>{growingStories}</h3>
          <p>Currently Growing</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">🌸</span>
          <h3>{finishedStories}</h3>
          <p>Finished Stories</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">✨</span>
          <h3>{averageBloom}</h3>
          <p>Average Bloom</p>
        </article>

        <article className="habit-card">
          <span className="habit-card__icon">📚</span>
          <h3>{stories.length}</h3>
          <p>Total Library</p>
        </article>

      </div>

    </Section>
  );
}