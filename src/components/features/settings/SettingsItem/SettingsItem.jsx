import "./SettingsItem.css";

export default function SettingsItem({
  icon,
  title,
  description,
  right,
  onClick,
}) {
  return (
    <button
      type="button"
      className="settings-item"
      onClick={onClick}
    >
      <div className="settings-item__left">

        <div className="settings-item__icon">
          {icon}
        </div>

        <div className="settings-item__content">
          <h3>{title}</h3>

          {description && (
            <p>{description}</p>
          )}
        </div>

      </div>

      <div className="settings-item__right">
        {right ?? "›"}
      </div>
    </button>
  );
}