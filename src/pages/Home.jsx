import { useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import Hero from "../components/features/grove/Hero";
import ContinueReading from "../components/features/grove/ContinueReading";
import RecentlyPlanted from "../components/features/grove/RecentlyPlanted";
import PlantStoryModal from "../components/features/plant-story/PlantStoryModal";

export default function Home() {
  const [isPlantModalOpen, setIsPlantModalOpen] = useState(false);
  const [stories, setStories] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClosePlantModal = () => {
    setIsPlantModalOpen(false);
    setSelectedMedia(null);
  };

  const handlePlantStory = (story) => {
  setStories((prevStories) => [
    story,
    ...prevStories,
  ]);

  console.log("🌱 Story planted!");

  console.log(story);

  console.log("All stories:");

  console.log([story, ...stories]);
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