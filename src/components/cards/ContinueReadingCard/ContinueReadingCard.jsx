import "./ContinueReadingCard.css";

export default function ContinueReadingCard({
  story,
  onClick,
}) {
  if (!story) return null;

  let progress = 0;

  if (story.mediaType === "Movie") {
    progress =
      story.journey === "completed"
        ? 100
        : story.journey === "planning"
        ? 0
        : 0;
  } else if (
    Number(story.totalProgress) > 0
  ) {
    progress = Math.round(
      (Number(story.currentProgress) /
        Number(story.totalProgress)) *
        100
    );
  }

  progress = Math.max(
    0,
    Math.min(progress, 100)
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
            {progress}% Complete
          </span>

          <button
            className="continue-card__button"
            type="button"
          >
            Continue Reading →
          </button>
        </div>
      </div>
    </article>
  );
}