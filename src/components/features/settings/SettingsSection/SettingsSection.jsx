import "./SettingsSection.css";

import SettingsItem from "../SettingsItem/SettingsItem";

export default function SettingsSection({
  title,
  items = [],
}) {
  return (
    <section className="settings-section">

      <h2 className="settings-section__title">
        {title}
      </h2>

      <div className="settings-section__list">

        {items.map((item) => (
          <SettingsItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            right={item.right}
            onClick={item.onClick}
          />
        ))}

      </div>

    </section>
  );
}