import "./MediaTypeSelector.css";
import mediaTypes from "../../../../data/mediaTypes";

export default function MediaTypeSelector() {
  return (
    <div className="media-type-selector">
      {mediaTypes.map((media) => (
        <button
          key={media.id}
          className="media-type-card"
          type="button"
        >
          <span className="media-type-card__icon">
            {media.icon}
          </span>

          <span className="media-type-card__name">
            {media.name}
          </span>
        </button>
      ))}
    </div>
  );
}