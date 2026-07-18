import { useState } from "react";

import "./CreateCollectionModal.css";

import Modal from "../../../ui/Modal/Modal";
import Input from "../../../ui/Input/Input";
import Textarea from "../../../ui/Textarea/Textarea";
import Button from "../../../ui/Button/Button";

import { useCollection } from "../../../../context/CollectionContext";

export default function CreateCollectionModal({
  isOpen,
  onClose,
  onCollectionCreated,
}) {
  const { createCollection } = useCollection();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handlePlant() {
    if (!name.trim()) return;

    const newCollection = createCollection({
      name,
      description,
    });

    setName("");
    setDescription("");

    if (onCollectionCreated) {
      onCollectionCreated(newCollection);
    }

    onClose();
  }

  function handleClose() {
    setName("");
    setDescription("");
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="🌳 Plant a New Grove"
    >
      <Input
        label="Grove Name"
        required
        placeholder="Fantasy Forest..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Textarea
        label="Description"
        placeholder="Describe this grove..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="collection-modal__actions">
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          onClick={handlePlant}
        >
          🌱 Plant Grove
        </Button>
      </div>
    </Modal>
  );
}