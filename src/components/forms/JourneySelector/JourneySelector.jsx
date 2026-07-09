import "./JourneySelector.css";

const journeys = [
  {
    id: "planning",
    icon: "🌰",
    label: "Planning",
  },
  {
    id: "started",
    icon: "🌱",
    label: "Started",
  },
  {
    id: "growing",
    icon: "🌿",
    label: "Growing",
  },
  {
    id: "bloomed",
    icon: "🌸",
    label: "Bloomed",
  },
  {
    id: "archived",
    icon: "🍂",
    label: "Archived",
  },
];

export default function JourneySelector({
  value,
  onChange,
}) {
  return (
    <div className="journey-selector">
      {journeys.map((journey) => (
        <button
          key={journey.id}
          type="button"
          className={`journey-chip ${
            value === journey.id
              ? "journey-chip--active"
              : ""
          }`}
          onClick={() => onChange(journey.id)}
        >
          <span>{journey.icon}</span>

          <span>{journey.label}</span>
        </button>
      ))}
    </div>
  );
}