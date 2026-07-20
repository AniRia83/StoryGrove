import "./SurpriseMe.css";

import { useNavigate } from "react-router-dom";

export default function SurpriseMe({ stories }) {
  const navigate = useNavigate();

  const handleSurprise = () => {
    if (stories.length === 0) return;

    const randomStory =
      stories[Math.floor(Math.random() * stories.length)];

    navigate(`/story/${randomStory.id}`);
  };

  return (
    <section className="surprise-me">

      <div className="surprise-me__content">

        <span className="surprise-me__eyebrow">
          🎲 Feeling Adventurous?
        </span>

        <h2>
          Let StoryGrove choose your next journey.
        </h2>

        <p>
          Can't decide what to read, watch or play?
          Pick a random story from your grove.
        </p>

        <button
          className="surprise-me__button"
          onClick={handleSurprise}
          disabled={stories.length === 0}
        >
          🎲 Surprise Me
        </button>

      </div>

    </section>
  );
}