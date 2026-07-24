import "./StoryHero.css";

import JourneySelector from "../../../forms/JourneySelector";
import BloomEditor from "../BloomEditor/BloomEditor";

const mediaIcons = {
  Book: "📖",
  Novel: "📘",
  Manga: "📚",
  Comic: "💥",
  Movie: "🎬",
  TV: "📺",
  Anime: "🌸",
  Game: "🎮",
  Audiobook: "🎧",
  Podcast: "🎙️",
  Music: "🎵",
};

export default function StoryHero({
  story,
  collection,
  onJourneyChange,
}) {
  const progress =
    story.totalProgress > 0
      ? Math.round(
          (story.currentProgress /
            story.totalProgress) *
            100
        )
      : 0;

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

        <div className="story-hero__badges">

          <span className="story-hero__type">
            {mediaIcons[story.mediaType] || "📚"}{" "}
            {story.mediaType}
          </span>

          {collection && (
            <span className="story-hero__collection">
  {collection.icon} {collection.name}
</span>
          )}

        </div>

        <h1 className="story-hero__title">
          {story.title}
        </h1>

        <p className="story-hero__creator">
          {story.creator || "Unknown Creator"}
        </p>

        {story.totalProgress > 0 && (

          <div className="story-hero__progress">

            <div className="story-hero__progress-top">

              <span>
                Progress
              </span>

              <span>
                {story.currentProgress} /{" "}
                {story.totalProgress}
              </span>

            </div>

            <div className="story-hero__progress-bar">

              <div
                className="story-hero__progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <p className="story-hero__progress-text">
              {progress}% Complete
            </p>

          </div>

        )}

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