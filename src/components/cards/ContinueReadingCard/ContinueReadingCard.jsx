import "./ContinueReadingCard.css";

export default function ContinueReadingCard({
  story,
  onClick,
}) {
  if (!story) return null;

  const progress = Math.round(
    (Number(story.bloom || 0) / 10) * 100
  );

  return (
    <article
      className="continue-card"
      onClick={onClick}
    >
      <div className="continue-card__cover">

        {story.cover ? (
          <img
            src={story.cover}
            alt={story.title}
          />
        ) : (
          <div className="continue-card__placeholder">
            📚
          </div>
        )}

      </div>

      <div className="continue-card__content">

        <span className="continue-card__badge">
          {story.mediaType}
        </span>

        <h2>{story.title}</h2>

        <p className="continue-card__creator">
          {story.creator}
        </p>

        <div className="continue-card__progress">

          <div
            className="continue-card__progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="continue-card__footer">

          <span>
            {progress}% Bloomed
          </span>

          <button
            className="continue-card__button"
          >
            Continue Reading →
          </button>

        </div>

      </div>
    </article>
  );
}