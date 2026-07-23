import "./ProgressFields.css";

export default function ProgressFields({
  mediaType,
  formData,
  handleChange,
}) {
  if (mediaType === "Movie") {
    return (
      <div className="form-group form-group--full">
        <label>Watching Status</label>

        <select
          value={formData.journey}
          onChange={(e) =>
            handleChange("journey", e.target.value)
          }
        >
          <option value="planning">
            Planning
          </option>

          <option value="completed">
            Watched
          </option>
        </select>
      </div>
    );
  }

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

    case "Anime":
      currentLabel = "Current Episode";
      totalLabel = "Total Episodes";
      break;

    case "TV Show":
      currentLabel = "Current Episode";
      totalLabel = "Total Episodes";
      break;

    case "Game":
      currentLabel = "Completion";
      totalLabel = "Total";
      break;

    default:
      break;
  }

  return (
    <div className="progress-fields">

      <div className="form-group">

        <label>{currentLabel}</label>

        <input
          type="number"
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