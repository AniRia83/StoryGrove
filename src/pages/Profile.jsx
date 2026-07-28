import { useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import Button from "../components/ui/Button";

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

  const navigate = useNavigate();

  return (
    <AppLayout>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button
          variant="secondary"
          onClick={() =>
            navigate("/settings")
          }
        >
          ⚙️ Settings
        </Button>
      </div>

      <ProfileHeader
        name="Ani"
      />

      <ReadingSummary
        stories={stories}
      />

      <AchievementGarden
        stories={stories}
      />

      <FavoriteGenres
        stories={stories}
      />

      <ReadingHabits
        stories={stories}
      />

      <FavoriteCreators
        stories={stories}
      />

      <GardenQuote
        stories={stories}
      />

    </AppLayout>
  );
}