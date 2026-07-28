import "./ThemeSettingsPanel.css";

import { useState } from "react";

import Button from "../../../ui/Button/Button";

import SettingsToggle from "../SettingsToggle/SettingsToggle";

import { useSettings } from "../../../../context/SettingsContext";

export default function ThemeSettingsPanel() {

  const {
    settings,
    updateAppearance,
  } = useSettings();

  const [appearance, setAppearance] =
    useState(settings.appearance);

  const [saved, setSaved] =
    useState(false);

  const options = [
    {
      id: "light",
      icon: "☀️",
      title: "Light",
      description:
        "Always use the light garden.",
    },
    {
      id: "dark",
      icon: "🌙",
      title: "Dark",
      description:
        "Always use the night garden.",
    },
    {
      id: "system",
      icon: "📱",
      title: "Follow Device",
      description:
        "Match your device appearance.",
    },
  ];

  function saveAppearance() {

    updateAppearance(appearance);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  return (
    <section className="theme-panel">

      <h2>Theme</h2>

      <div className="theme-options">

        {options.map((option) => (

          <button
            key={option.id}
            className={
              appearance.theme === option.id
                ? "theme-card active"
                : "theme-card"
            }
            onClick={() =>
              setAppearance((prev) => ({
                ...prev,
                theme: option.id,
              }))
            }
          >

            <div className="theme-icon">
              {option.icon}
            </div>

            <h3>{option.title}</h3>

            <p>{option.description}</p>

          </button>

        ))}

      </div>

      <SettingsToggle
        title="Animations"
        description="Enable floating leaves and smooth transitions."
        checked={appearance.animations}
        onChange={() =>
          setAppearance((prev) => ({
            ...prev,
            animations: !prev.animations,
          }))
        }
      />

      <Button
        size="lg"
        onClick={saveAppearance}
      >
        {saved
          ? "✓ Saved"
          : "💾 Save Appearance"}
      </Button>

    </section>
  );
}