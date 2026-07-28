import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SettingsContext = createContext();

const defaultSettings = {
  profile: {
    displayName: "Ani",
    bio: "",
    yearlyGoal: 50,
    favoriteQuote: "",
    avatar: "🌸",
  },

  preferences: {
    autoplayQuotes: true,
    showAchievements: true,
    showRecommendations: true,
    compactLibrary: false,
    confirmDelete: true,
  },

  appearance: {
    theme: "system",
    animations: true,
  },
};

export function SettingsProvider({
  children,
}) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem(
      "storygrove-settings"
    );

    return saved
      ? JSON.parse(saved)
      : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(
      "storygrove-settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  useEffect(() => {

    let currentTheme =
      settings.appearance.theme;

    if (currentTheme === "system") {

      currentTheme =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";

    }

    document.documentElement.setAttribute(
      "data-theme",
      currentTheme
    );

  }, [settings.appearance.theme]);

  function updateProfile(data) {
    setSettings((prev) => ({
      ...prev,

      profile: {
        ...prev.profile,
        ...data,
      },
    }));
  }

  function updatePreferences(data) {
    setSettings((prev) => ({
      ...prev,

      preferences: {
        ...prev.preferences,
        ...data,
      },
    }));
  }

  function updateAppearance(data) {
    setSettings((prev) => ({
      ...prev,

      appearance: {
        ...prev.appearance,
        ...data,
      },
    }));
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateProfile,
        updatePreferences,
        updateAppearance,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}