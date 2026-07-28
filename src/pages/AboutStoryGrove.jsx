import AppLayout from "../components/layout/AppLayout/AppLayout";
import PageBanner from "../components/ui/PageBanner";

import AboutStoryGrove from "../components/features/settings/AboutStoryGrove/AboutStoryGrove";

export default function AboutStoryGrovePage() {
  return (
    <AppLayout>
      <PageBanner
        icon="🌳"
        title="About StoryGrove"
        subtitle="A peaceful home for every story you love."
      />

      <AboutStoryGrove />
    </AppLayout>
  );
}