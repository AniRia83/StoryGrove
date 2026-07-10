import "./CoverUpload.css";

export default function CoverUpload({
  label = "Cover",
}) {
  return (
    <div className="cover-upload">

      <label className="cover-upload__label">
        {label}
      </label>

      <label className="cover-upload__dropzone">

        <input
          type="file"
          accept="image/*"
        />

        <span className="cover-upload__icon">
          📖
        </span>

        <h3>
          Plant your cover
        </h3>

        <p>
          Click to browse or drag an image here.
        </p>

      </label>

    </div>
  );
}