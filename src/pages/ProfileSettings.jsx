import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import ProfileSettingsForm from "../components/features/settings/ProfileSettingsForm/ProfileSettingsForm";

export default function ProfileSettings() {
  return (
    <AppLayout>
      <PageBanner
        icon="👤"
        title="Profile Settings"
        subtitle="Personalize your StoryGrove profile."
      />

      <ProfileSettingsForm />
    </AppLayout>
  );
}