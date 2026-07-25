import "./StoryHero.css";

import BloomEditor from "../BloomEditor/BloomEditor";

const mediaIcons = {
  Book: "📚",
  Comic: "💥",
 Fanfic: "🪶",
  Movie: "🎬",
  "TV Series": "📺",
  Anime: "🌸",
  Game: "🎮",
  Music: "🎵",
  Podcast: "🎙️",
};

const journeyLabels = {
  planning: "🌱 Planning",
  growing: "🌿 Growing",
  completed: "🌸 Bloomed",
  paused: "🍂 Resting",
  abandoned: "🪵 Abandoned",
};

export default function StoryHero({
  story,
  collection,
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

        <div className="story-hero__badges">

          <span className="story-badge">
            {mediaIcons[story.mediaType]} {story.mediaType}
          </span>

          {collection && (
            <span className="story-badge story-badge--grove">
              {collection.icon} {collection.name}
            </span>
          )}

        </div>

        <h1>{story.title}</h1>

        <p className="story-hero__creator">
          {story.creator || "Unknown Creator"}
        </p>

        {story.genre && (
          <p className="story-hero__genre">
            {story.genre}
          </p>
        )}

        {story.totalProgress > 0 && (

          <>

            <div className="story-progress-header">

              <span>Progress</span>

              <strong>
                {story.currentProgress} / {story.totalProgress}
              </strong>

            </div>

            <div className="story-progress">

              <div
                className="story-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="story-progress-percent">
              {progress}% completed
            </div>

          </>

        )}

        <div className="story-meta">

          <div>

            <span>Journey</span>

            <strong>
              {journeyLabels[story.journey]}
            </strong>

          </div>

          <div>

            <span>Bloom</span>

            <BloomEditor story={story} />

          </div>

        </div>

      </div>

    </section>
  );
}