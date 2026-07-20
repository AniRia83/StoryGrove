import "./StoryHero.css";

import JourneySelector from "../../../forms/JourneySelector";
import BloomEditor from "../BloomEditor/BloomEditor";

export default function StoryHero({
  story,
  onJourneyChange,
}) {
  return (
    <section className="story-hero">

      <div className="story-hero__cover-container">

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

      </div>

      <div className="story-hero__content">

        <span className="story-hero__type">
          {story.mediaType}
        </span>

        <h1 className="story-hero__title">
          {story.title}
        </h1>

        <p className="story-hero__creator">
          {story.creator || "Unknown Creator"}
        </p>

        <div className="story-hero__divider"></div>

        <div className="story-hero__section">

          <h3>Journey</h3>

          <JourneySelector
            value={story.journey}
            onChange={onJourneyChange}
          />

        </div>

        <div className="story-hero__section">

          <h3>Bloom</h3>

          <BloomEditor story={story} />

        </div>

      </div>

    </section>
  );
}