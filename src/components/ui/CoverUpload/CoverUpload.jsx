import { useState, useEffect } from "react";

import "./CoverUpload.css";

export default function CoverUpload({
  label = "Cover",
  value,
  onChange,
}) {
  const [preview, setPreview] = useState(value || null);

  useEffect(() => {
    setPreview(value || null);
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result);

      onChange?.(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removeCover = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div className="cover-upload">
      <label className="cover-upload__label">
        {label}
      </label>

      <label className="cover-upload__dropzone">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        {preview ? (
          <>
            <img
              src={preview}
              alt="Cover Preview"
              className="cover-upload__preview"
            />

            <button
              type="button"
              className="cover-upload__remove"
              onClick={(e) => {
                e.preventDefault();
                removeCover();
              }}
            >
              Remove Cover
            </button>
          </>
        ) : (
          <>
            <span className="cover-upload__icon">
              📖
            </span>

            <h3>Plant your cover</h3>

            <p>
              Click to browse or drag an image here.
            </p>
          </>
        )}
      </label>
    </div>
  );
}