import "./StoryHero.css";

import BloomEditor from "../BloomEditor/BloomEditor";
import StoryHeroActions from "../StoryHeroActions/StoryHeroActions";

const mediaIcons = {
  Book: "📚",
  Comic: "💥",
  Fanfiction: "🪶",
  Movie: "🎬",
  "TV Series": "📺",
  Anime: "🌸",
  Game: "🎮",
  Music: "🎵",
  Podcast: "🎙️",
};

const journeyLabels = {
  planning: "🌰 Planning",
  started: "🌱 Started",
  growing: "🌿 Growing",
  bloomed: "🌸 Bloomed",
  archived: "🍂 Archived",
};

export default function StoryHero({
  story,
  collection,
  onJourneyChange,
  onEdit,
  onProgress,
  onFavourite,
}) {
  const icon =
    mediaIcons[story.mediaType] || "📚";

  const progress =
    story.totalProgress > 0
      ? Math.round(
          (story.currentProgress /
            story.totalProgress) *
            100
        )
      : 0;

  const remaining =
    story.totalProgress > 0
      ? story.totalProgress -
        story.currentProgress
      : null;

  const plantedDate = new Date(
    story.plantedAt
  ).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const updatedDate = new Date(
    story.updatedAt || story.plantedAt
  ).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
            {icon}
          </div>
        )}

      </div>

      <div className="story-hero__content">

        <div className="story-hero__chips">

          <span className="chip">
            {icon} {story.mediaType}
          </span>

          {story.genre && (
            <span className="chip">
              🏷 {story.genre}
            </span>
          )}

          {collection && (
            <span className="chip chip--grove">
              {collection.icon} {collection.name}
            </span>
          )}

        </div>

        <h1>{story.title}</h1>

        <p className="story-hero__creator">
          {story.creator ||
            "Unknown Creator"}
        </p>

        {story.totalProgress > 0 && (

          <div className="story-progress">

            <div className="story-progress__top">

              <span>
                {story.currentProgress} /
                {" "}
                {story.totalProgress}
              </span>

              <span>
                {progress}%
              </span>

            </div>

            <div className="story-progress__bar">

              <div
                className="story-progress__fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            {remaining > 0 && (
              <p className="story-progress__remaining">
                🌱 {remaining} remaining
              </p>
            )}

          </div>

        )}

        <div className="story-hero__stats">

          <div className="story-stat">

            <span className="story-stat__label">
              Journey
            </span>

            <strong>
              {journeyLabels[
                story.journey
              ] || "—"}
            </strong>

          </div>

          <div className="story-stat">

            <span className="story-stat__label">
              Bloom
            </span>

            <BloomEditor story={story} />

          </div>

          <div className="story-stat">

            <span className="story-stat__label">
              🌱 Planted
            </span>

            <strong>
              {plantedDate}
            </strong>

          </div>

          <div className="story-stat">

            <span className="story-stat__label">
              🪴 Updated
            </span>

            <strong>
              {updatedDate}
            </strong>

          </div>

        </div>

        <StoryHeroActions
  onEdit={onEdit}
  onProgress={onProgress}
  onFavourite={onFavourite}
  isFavourite={story.isFavorite}
/>

      </div>

    </section>
  );
}