import "./ProgressFields.css";

export default function ProgressFields({
  mediaType,
  formData,
  handleChange,
}) {
  let currentLabel = "Current";
  let totalLabel = "Total";

  switch (mediaType) {
    case "Book":
      currentLabel = "Current Page";
      totalLabel = "Total Pages";
      break;

    case "Manga":
      currentLabel = "Current Chapter";
      totalLabel = "Total Chapters";
      break;

    case "Comic":
      currentLabel = "Current Issue";
      totalLabel = "Total Issues";
      break;

    case "Fanfiction":
      currentLabel = "Current Chapter";
      totalLabel = "Total Chapters";
      break;

    case "Anime":
      currentLabel = "Current Episode";
      totalLabel = "Total Episodes";
      break;

    case "TV Series":
      currentLabel = "Current Episode";
      totalLabel = "Total Episodes";
      break;

    case "Podcast":
      currentLabel = "Current Episode";
      totalLabel = "Total Episodes";
      break;

    case "Music":
      currentLabel = "Current Track";
      totalLabel = "Total Tracks";
      break;

    case "Movie":
      currentLabel = "Minutes Watched";
      totalLabel = "Total Minutes";
      break;

    case "Game":
      currentLabel = "Current Level";
      totalLabel = "Total Levels";
      break;

    default:
      break;
  }

  return (
    <div className="progress-fields">

      {/* Hours Played only for games */}
      {mediaType === "Game" && (
        <div className="form-group form-group--full">
          <label>Hours Played</label>

          <input
            type="number"
            min="0"
            value={formData.hoursPlayed || ""}
            onChange={(e) =>
              handleChange(
                "hoursPlayed",
                e.target.value
              )
            }
          />
        </div>
      )}

      <div className="form-group">
        <label>{currentLabel}</label>

        <input
          type="number"
          min="0"
          value={formData.currentProgress}
          onChange={(e) =>
            handleChange(
              "currentProgress",
              e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label>{totalLabel}</label>

        <input
          type="number"
          min="0"
          value={formData.totalProgress}
          onChange={(e) =>
            handleChange(
              "totalProgress",
              e.target.value
            )
          }
        />
      </div>

    </div>
  );
}