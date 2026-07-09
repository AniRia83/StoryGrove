import "./Input.css";

export default function Input({
  label,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={`sg-input ${className}`}>
      {label && (
        <label className="sg-input__label">
          {label}

          {required && (
            <span className="sg-input__required">*</span>
          )}
        </label>
      )}

      <input {...props} />
    </div>
  );
}