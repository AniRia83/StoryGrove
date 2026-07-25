import "./MediaCategories.css";
import mediaTypes from "../../../../data/mediaTypes";

export default function MediaCategories({
  selectedMediaType,
  onSelectMediaType,
}) {
  return (
    <section className="media-categories">

      <div className="media-categories__header">

        <h2 className="media-categories__title">
          📚 Browse Media
        </h2>

        {selectedMediaType && (
          <button
            className="media-categories__clear"
            onClick={() => onSelectMediaType("")}
          >
            Clear
          </button>
        )}

      </div>

      <div className="media-categories__grid">

        <button
          className={
            !selectedMediaType
              ? "media-category-card active"
              : "media-category-card"
          }
          onClick={() => onSelectMediaType("")}
        >
          <span className="media-category-card__icon">
            🌿
          </span>

          <h3>All</h3>

          <p>Everything in your grove</p>
        </button>

        {mediaTypes.map((media) => (

          <button
            key={media.id}
            className={
              selectedMediaType === media.name
                ? "media-category-card active"
                : "media-category-card"
            }
            onClick={() =>
              onSelectMediaType(media.name)
            }
          >

            <span className="media-category-card__icon">
              {media.icon}
            </span>

            <h3>{media.name}</h3>

          </button>

        ))}

      </div>

    </section>
  );
}