import { useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import Hero from "../components/features/grove/Hero";
import ContinueReading from "../components/features/grove/ContinueReading";
import RecentlyPlanted from "../components/features/grove/RecentlyPlanted";
import PlantStoryModal from "../components/features/plant-story/PlantStoryModal";

import { useStory } from "../context/StoryContext";

export default function Home() {
  const [isPlantModalOpen, setIsPlantModalOpen] = useState(false);

  const { stories, plantStory } = useStory();

  const handlePlantStory = (story) => {
    plantStory(story);

    console.log("🌱 Story planted!");

    console.log(story);
  };

  return (
    <AppLayout>
      <Hero
        onPlantStoryClick={() => setIsPlantModalOpen(true)}
      />

      <ContinueReading />

      <RecentlyPlanted
        stories={stories}
      />

      <PlantStoryModal
        isOpen={isPlantModalOpen}
        onClose={() => setIsPlantModalOpen(false)}
        onPlant={handlePlantStory}
      />
    </AppLayout>
  );
}