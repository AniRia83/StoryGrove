import "./MediaTypeSelector.css";
import mediaTypes from "../../../../data/mediaTypes";

export default function MediaTypeSelector({
  value,
  onSelect,
}) {
  return (
    <div className="media-type-selector">

      {mediaTypes.map((media) => (

        <button
          key={media.id}
          type="button"
          onClick={() => onSelect(media.name)}
          className={`media-type-card ${
            value === media.name
              ? "media-type-card--selected"
              : ""
          }`}
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