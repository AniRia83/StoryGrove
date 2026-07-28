import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import PreferencesPanel from "../components/features/settings/PreferencesPanel/PreferencesPanel";

export default function Preferences() {
  return (
    <AppLayout>
      <PageBanner
        icon="🌿"
        title="Preferences"
        subtitle="Customize your StoryGrove experience."
      />

      <PreferencesPanel />
    </AppLayout>
  );
}