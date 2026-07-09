import "./MediaTypeSelector.css";
import mediaTypes from "../../../../data/mediaTypes";

export default function MediaTypeSelector({
  onSelect,
}) {
  return (
    <div className="media-type-selector">
      {mediaTypes.map((media) => (
        <button
          key={media.id}
          className="media-type-card"
          type="button"
          onClick={() => onSelect(media.name)}
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