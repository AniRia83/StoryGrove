import { useState } from "react";
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
import QuickActions from "../components/features/profile/QuickActions";

import PlantStoryModal from "../components/features/plant-story/PlantStoryModal";

import { useStory } from "../context/StoryContext";
import { useSettings } from "../context/SettingsContext";

export default function Profile() {
  const { stories, plantStory } = useStory();

  const { settings } = useSettings();

  const navigate = useNavigate();

  const [showPlantModal, setShowPlantModal] =
    useState(false);

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
          onClick={() => navigate("/settings")}
        >
          ⚙️ Settings
        </Button>
      </div>

      <ProfileHeader
        name={settings.profile.displayName}
        avatar={settings.profile.avatar}
        bio={settings.profile.bio}
      />

      <ReadingSummary stories={stories} />

      <AchievementGarden stories={stories} />

      <FavoriteGenres stories={stories} />

      <ReadingHabits stories={stories} />

      <FavoriteCreators stories={stories} />

      <GardenQuote stories={stories} />

      <QuickActions
        onPlantStory={() =>
          setShowPlantModal(true)
        }
      />

      <PlantStoryModal
        isOpen={showPlantModal}
        onClose={() =>
          setShowPlantModal(false)
        }
        onPlant={plantStory}
      />
    </AppLayout>
  );
}