import "./MediaCard.css";

import { getProgressPercentage } from "../../../utils/storyUtils";

const mediaIcons = {
  Book: "📚",
  Comic: "📖",
  Manga: "📘",
  Fanfiction: "✍️",
  Movie: "🎬",
  "TV Series": "📺",
  Anime: "🌸",
  Game: "🎮",
  Music: "🎵",
  Podcast: "🎙️",
};

export default function MediaCard({
  story,
  collection,
  onClick,
  compact = false,
}) {
  const icon =
    mediaIcons[story.mediaType] || "📚";

  const progress =
    getProgressPercentage(story);

  return (
    <article
      className={
        compact
          ? "media-card compact"
          : "media-card"
      }
      onClick={onClick}
    >
      <div className="media-card__cover">

        {story.cover ? (
          <img
            src={story.cover}
            alt={story.title}
          />
        ) : (
          <div className="media-card__placeholder">
            📚
          </div>
        )}

        <div className="media-card__type">
          {icon}
        </div>

      </div>

      <div className="media-card__content">

        <h3 className="media-card__title">
          {story.title}
        </h3>

        <div className="media-card__progress">

          <div
            className="media-card__progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {collection && (
          <div className="media-card__collection">
            🌳 {collection}
          </div>
        )}

      </div>

    </article>
  );
}