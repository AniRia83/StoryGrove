import "./SettingsToggle.css";

export default function SettingsToggle({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="settings-toggle">

      <div className="settings-toggle__content">

        <h3>{title}</h3>

        {description && (
          <p>{description}</p>
        )}

      </div>

      <button
        type="button"
        className={
          checked
            ? "toggle-switch active"
            : "toggle-switch"
        }
        onClick={onChange}
      >
        <span />
      </button>

    </div>
  );
}