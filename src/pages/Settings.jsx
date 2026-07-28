import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import SettingsSection from "../components/features/settings/SettingsSection/SettingsSection";

import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const accountItems = [
    {
      icon: "👤",
      title: "Profile",
      description: "Edit your display name and avatar",
      onClick: () => navigate("/settings/profile"),
    },
  ];

  const readingItems = [
    {
      icon: "📖",
      title: "Reading Preferences",
      description: "Customize your reading experience",
      onClick: () => navigate("/settings/preferences"),
    },
  ];

  const appearanceItems = [
    {
      icon: "🎨",
      title: "Theme & Appearance",
      description: "Light, dark or follow your device",
      onClick: () => navigate("/settings/theme"),
    },
  ];

  const dataItems = [
    {
      icon: "🌱",
      title: "Import & Export",
      description: "Backup or restore your StoryGrove",
      onClick: () =>
        navigate("/settings/import-export"),
    },
  ];

  const aboutItems = [
  {
    icon: "🌿",
    title: "About StoryGrove",
    description: "Version, credits and the story behind StoryGrove",
    onClick: () =>
      navigate("/settings/about"),
  },
];

  return (
    <AppLayout>
      <PageBanner
        icon="⚙️"
        title="Settings"
        subtitle="Customize your grove exactly the way you like it."
      />

      <SettingsSection
        title="Account"
        items={accountItems}
      />

      <SettingsSection
        title="Reading"
        items={readingItems}
      />

      <SettingsSection
        title="Appearance"
        items={appearanceItems}
      />

      <SettingsSection
        title="Data"
        items={dataItems}
      />

      <SettingsSection
  title="About"
  items={aboutItems}
/>

    </AppLayout>
  );
}