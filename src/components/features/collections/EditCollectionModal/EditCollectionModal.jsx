import { useEffect, useState } from "react";

import "./EditCollectionModal.css";

import Modal from "../../../ui/Modal/Modal";
import Input from "../../../ui/Input/Input";
import Textarea from "../../../ui/Textarea/Textarea";
import Button from "../../../ui/Button/Button";

import CollectionThemePicker from "../CollectionThemePicker";

import { useCollection } from "../../../../context/CollectionContext";

export default function EditCollectionModal({
  isOpen,
  onClose,
  collection,
}) {
  const { updateCollection } = useCollection();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("evergreen");

  useEffect(() => {
    if (!collection) return;

    setName(collection.name);
    setDescription(collection.description || "");
    setTheme(collection.color || "evergreen");
  }, [collection]);

  function handleSave() {
    if (!name.trim()) return;

    updateCollection(collection.id, {
      name,
      description,
      color: theme,
      banner: theme,
    });

    onClose();
  }

  if (!collection) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🌳 Edit Grove"
    >
      <Input
        label="Grove Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Textarea
        label="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <CollectionThemePicker
        value={theme}
        onChange={setTheme}
      />

      <div className="collection-modal__actions">

        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button onClick={handleSave}>
          💾 Save Changes
        </Button>

      </div>
    </Modal>
  );
}