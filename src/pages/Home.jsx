import { useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import Hero from "../components/features/grove/Hero";
import ContinueReading from "../components/features/grove/ContinueReading";
import RecentlyPlanted from "../components/features/grove/RecentlyPlanted";
import PlantStoryModal from "../components/features/plant-story/PlantStoryModal";

export default function Home() {
  const [isPlantModalOpen, setIsPlantModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClosePlantModal = () => {
    setIsPlantModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <AppLayout>
      <Hero
        onPlantStoryClick={() => setIsPlantModalOpen(true)}
      />

      <ContinueReading />
      <RecentlyPlanted />

      <PlantStoryModal
        isOpen={isPlantModalOpen}
        onClose={handleClosePlantModal}
        selectedMedia={selectedMedia}
        onSelectMedia={setSelectedMedia}
      />
    </AppLayout>
  );
}