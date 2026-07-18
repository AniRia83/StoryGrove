import { useEffect, useState } from "react";

import "./EditStoryModal.css";

import Modal from "../../../ui/Modal/Modal";
import Input from "../../../ui/Input";
import Textarea from "../../../ui/Textarea";
import Button from "../../../ui/Button";

import JourneySelector from "../../../forms/JourneySelector";

import { useCollection } from "../../../../context/CollectionContext";
import { useStory } from "../../../../context/StoryContext";

export default function EditStoryModal({
  isOpen,
  onClose,
  story,
}) {
  const { collections } = useCollection();

  const { updateStory } = useStory();

  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    collectionId: "",
    genre: "",
    origin: "",
    bloom: 0,
    journey: "planning",
    reflections: "",
    firefly: "",
  });

  useEffect(() => {
    if (!story) return;

    setFormData({
      title: story.title || "",
      creator: story.creator || "",
      collectionId: story.collectionId || "",
      genre: story.genre || "",
      origin: story.origin || "",
      bloom: story.bloom || 0,
      journey: story.journey || "planning",
      reflections: story.reflections || "",
      firefly: story.firefly || "",
    });
  }, [story]);

  function handleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    updateStory(story.id, formData);
    onClose();
  }

  if (!story) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="✏️ Edit Story"
    >
      <Input
        label="Title"
        value={formData.title}
        onChange={(e) =>
          handleChange("title", e.target.value)
        }
      />

      <Input
        label="Creator"
        value={formData.creator}
        onChange={(e) =>
          handleChange("creator", e.target.value)
        }
      />

      <div className="form-group">
        <label>Grove</label>

        <select
          value={formData.collectionId}
          onChange={(e) =>
            handleChange(
              "collectionId",
              e.target.value
            )
          }
        >
          <option value="">
            No Grove
          </option>

          {collections.map((collection) => (
            <option
              key={collection.id}
              value={collection.id}
            >
              {collection.icon} {collection.name}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="Genre"
        value={formData.genre}
        onChange={(e) =>
          handleChange("genre", e.target.value)
        }
      />

      <Input
        label="Origin"
        value={formData.origin}
        onChange={(e) =>
          handleChange("origin", e.target.value)
        }
      />

      <div className="form-group">
        <label>Journey</label>

        <JourneySelector
          value={formData.journey}
          onChange={(value) =>
            handleChange("journey", value)
          }
        />
      </div>

      <div className="form-group">
        <label>Bloom</label>

        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={formData.bloom}
          onChange={(e) =>
            handleChange(
              "bloom",
              e.target.value
            )
          }
        />

        <p>{formData.bloom}/10</p>
      </div>

      <Textarea
        label="🍂 Reflections"
        rows={5}
        value={formData.reflections}
        onChange={(e) =>
          handleChange(
            "reflections",
            e.target.value
          )
        }
      />

      <Textarea
        label="✨ Firefly"
        rows={3}
        value={formData.firefly}
        onChange={(e) =>
          handleChange(
            "firefly",
            e.target.value
          )
        }
      />

      <div className="edit-story-actions">
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