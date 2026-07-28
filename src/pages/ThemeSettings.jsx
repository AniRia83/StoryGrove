import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import ThemeSettingsPanel from "../components/features/settings/ThemeSettingsPanel/ThemeSettingsPanel";

export default function ThemeSettings() {
  return (
    <AppLayout>
      <PageBanner
        icon="🎨"
        title="Appearance"
        subtitle="Choose how StoryGrove looks."
      />

      <ThemeSettingsPanel />
    </AppLayout>
  );
}