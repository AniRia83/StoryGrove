import "./MediaCard.css";

export default function MediaCard({
  title,
  creator,
  mediaType,
  progress,
  onClick,
}) {
  return (
    <article
      className="media-card"
      onClick={onClick}
    >
      <div className="media-card__cover">

        <span className="media-card__badge">
          {mediaType}
        </span>

      </div>

      <div className="media-card__content">

        <h3 className="media-card__title">
          {title}
        </h3>

        <p className="media-card__creator">
          {creator}
        </p>

        <div className="media-card__progress">

          <div
            className="media-card__progress-fill"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="media-card__progress-text">
          {progress}% complete
        </p>

      </div>

    </article>
  );
}