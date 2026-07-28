import "./PreferencesPanel.css";

import { useState } from "react";

import Button from "../../../ui/Button/Button";

import SettingsToggle from "../SettingsToggle/SettingsToggle";

import { useSettings } from "../../../../context/SettingsContext";

export default function PreferencesPanel() {

  const {
    settings,
    updatePreferences,
  } = useSettings();

  const [preferences, setPreferences] =
    useState(settings.preferences);

  const [saved, setSaved] =
    useState(false);

  function toggle(setting) {
    setPreferences((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  }

  function savePreferences() {

    updatePreferences(preferences);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  return (
    <section className="preferences-panel">

      <SettingsToggle
        title="Daily Garden Quotes"
        description="Show inspirational quotes on Home."
        checked={preferences.autoplayQuotes}
        onChange={() =>
          toggle("autoplayQuotes")
        }
      />

      <SettingsToggle
        title="Achievement Celebrations"
        description="Celebrate milestones with animations."
        checked={preferences.showAchievements}
        onChange={() =>
          toggle("showAchievements")
        }
      />

      <SettingsToggle
        title="Story Recommendations"
        description="Show recommendations throughout the app."
        checked={preferences.showRecommendations}
        onChange={() =>
          toggle("showRecommendations")
        }
      />

      <SettingsToggle
        title="Compact Library"
        description="Display smaller story cards."
        checked={preferences.compactLibrary}
        onChange={() =>
          toggle("compactLibrary")
        }
      />

      <SettingsToggle
        title="Delete Confirmation"
        description="Ask before deleting stories."
        checked={preferences.confirmDelete}
        onChange={() =>
          toggle("confirmDelete")
        }
      />

      <Button
        size="lg"
        onClick={savePreferences}
      >
        {saved
          ? "✓ Saved"
          : "💾 Save Preferences"}
      </Button>

    </section>
  );
}