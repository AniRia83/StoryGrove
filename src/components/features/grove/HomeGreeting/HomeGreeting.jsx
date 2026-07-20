import "./HomeGreeting.css";

import { useStory } from "../../../../context/StoryContext";

export default function HomeGreeting() {
  const { stories } = useStory();

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌿";
  }

  const totalStories = stories.length;

  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const completedStories = stories.filter(
    (story) => story.journey === "completed"
  ).length;

  return (
    <section className="home-greeting">

      <h1>{greeting}</h1>

      <p>
        {totalStories === 0
          ? "Your grove is waiting for its very first story."
          : `Your grove now holds ${totalStories} ${
              totalStories === 1 ? "story" : "stories"
            }.`}
      </p>

      {totalStories > 0 && (
        <div className="home-greeting__stats">

          <div>
            🌱 <strong>{growingStories}</strong> Growing
          </div>

          <div>
            🌸 <strong>{completedStories}</strong> Bloomed
          </div>

        </div>
      )}

    </section>
  );
}