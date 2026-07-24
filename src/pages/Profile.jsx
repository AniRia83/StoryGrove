import AppLayout from "../components/layout/AppLayout/AppLayout";

import ProfileHeader from "../components/features/profile/ProfileHeader";
import ReadingSummary from "../components/features/profile/ReadingSummary";
import AchievementGarden from "../components/features/profile/AchievementGarden";
import FavoriteGenres from "../components/features/profile/FavoriteGenres";
import ReadingHabits from "../components/features/profile/ReadingHabits";
import FavoriteCreators from "../components/features/profile/FavoriteCreators";
import GardenQuote from "../components/features/profile/GardenQuote";

import { useStory } from "../context/StoryContext";

export default function Profile() {

  const { stories } = useStory();

  return (
    <AppLayout>

      <ProfileHeader
        name="Ani"
      />

      <ReadingSummary
        stories={stories}
      />

      <AchievementGarden stories={stories} />

      <FavoriteGenres stories={stories} />

      <ReadingHabits stories={stories} />

      <FavoriteCreators stories={stories} />

      <GardenQuote stories={stories} />

    </AppLayout>
  );
}