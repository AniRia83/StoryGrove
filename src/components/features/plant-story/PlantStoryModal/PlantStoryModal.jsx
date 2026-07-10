import { useState } from "react";

import "./PlantStoryModal.css";
import Modal from "../../../ui/Modal";
import MediaTypeSelector from "../MediaTypeSelector";
import PlantStoryForm from "../PlantStoryForm";

export default function PlantStoryModal({
  isOpen,
  onClose,
  onPlant,
}) {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setSelectedType(null);
        onClose();
      }}
      title="🌱 Plant a Story"
    >
      {!selectedType ? (
        <>
          <p>
            What would you like to plant today?
          </p>

          <MediaTypeSelector
            onSelect={setSelectedType}
          />
        </>
      ) : (
        <PlantStoryForm
          mediaType={selectedType}
          onPlant={(story) => {
            onPlant(story);
            onClose();
            setSelectedType(null);
          }}
        />
      )}
    </Modal>
  );
}