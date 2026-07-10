import "./Textarea.css";

export default function Textarea({
  label,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={`sg-textarea ${className}`}>
      {label && (
        <label className="sg-textarea__label">
          {label}

          {required && (
            <span className="sg-textarea__required">
              *
            </span>
          )}
        </label>
      )}

      <textarea {...props} />
    </div>
  );
}