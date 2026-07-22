import "./CollectionThemePicker.css";

const themes = [
  {
    id: "evergreen",
    icon: "🌲",
    name: "Evergreen",
  },
  {
    id: "blossom",
    icon: "🌸",
    name: "Blossom",
  },
  {
    id: "moonlight",
    icon: "🌙",
    name: "Moonlight",
  },
  {
    id: "autumn",
    icon: "🍂",
    name: "Autumn",
  },
  {
    id: "sunshine",
    icon: "🌼",
    name: "Sunshine",
  },
];

export default function CollectionThemePicker({
  value,
  onChange,
}) {
  return (
    <div className="collection-theme-picker">

      <label className="collection-theme-picker__label">
        Grove Theme
      </label>

      <div className="collection-theme-picker__grid">

        {themes.map((theme) => (

          <button
            key={theme.id}
            type="button"
            className={`collection-theme ${
              value === theme.id
                ? "collection-theme--active"
                : ""
            }`}
            onClick={() => onChange(theme.id)}
          >

            <span className="collection-theme__icon">
              {theme.icon}
            </span>

            <span>
              {theme.name}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}