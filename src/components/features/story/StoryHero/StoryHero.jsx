import "./StoryHero.css";

import JourneySelector from "../../../forms/JourneySelector";
import BloomEditor from "../BloomEditor/BloomEditor";

export default function StoryHero({
  story,
  onJourneyChange,
})  {
  return (
    <section className="story-hero">

      <div className="story-hero__cover">

        {story.cover ? (
          <img
            src={story.cover}
            alt={story.title}
          />
        ) : (
          <div className="story-hero__placeholder">
            📚
          </div>
        )}

      </div>

      <div className="story-hero__content">

        <span className="story-hero__type">
          {story.mediaType}
        </span>

        <h1>{story.title}</h1>

        <p className="story-hero__creator">
          {story.creator}
        </p>

        <div className="story-hero__journey">

          <JourneySelector
  value={story.journey}
  onChange={onJourneyChange}
/>

        </div>

        <BloomEditor story={story} />

      </div>

    </section>
  );
}