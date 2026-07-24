import { useEffect, useState } from "react";

import "./EditStoryModal.css";

import { ProgressFields } from "..";
import { getJourney } from "../../../../utils/storyUtils";

import Modal from "../../../ui/Modal/Modal";
import Input from "../../../ui/Input";
import Textarea from "../../../ui/Textarea";
import Button from "../../../ui/Button";
import CoverUpload from "../../../ui/CoverUpload";

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
    bloom: 8.5,
    journey: "",
    reflections: "",
    firefly: "",
    cover: null,

    currentProgress: 0,
    totalProgress: "",
  });

  useEffect(() => {
    if (!story) return;

    setFormData({
      title: story.title || "",
      creator: story.creator || "",
      collectionId: story.collectionId || "",
      genre: story.genre || "",
      origin: story.origin || "",
      bloom: story.bloom || 8.5,
      journey: story.journey || "",
      reflections: story.reflections || "",
      firefly: story.firefly || "",
      cover: story.cover || null,

      currentProgress:
        story.currentProgress || 0,

      totalProgress:
        story.totalProgress || "",
    });
  }, [story]);

  function handleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    const updatedStory = {
      ...formData,

      currentProgress: Number(
        formData.currentProgress
      ),

      totalProgress: Number(
        formData.totalProgress
      ),
    };

    updatedStory.journey = getJourney({
      ...story,
      ...updatedStory,
    });

    updateStory(
      story.id,
      updatedStory
    );

    onClose();
  }

  if (!story) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="✏️ Edit Story"
    >
      <CoverUpload
        value={formData.cover}
        onChange={(cover) =>
          handleChange("cover", cover)
        }
      />

      <Input
        label="Title"
        value={formData.title}
        onChange={(e) =>
          handleChange(
            "title",
            e.target.value
          )
        }
      />

      <Input
        label="Creator"
        value={formData.creator}
        onChange={(e) =>
          handleChange(
            "creator",
            e.target.value
          )
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
          handleChange(
            "genre",
            e.target.value
          )
        }
      />

      <Input
        label="Origin"
        value={formData.origin}
        onChange={(e) =>
          handleChange(
            "origin",
            e.target.value
          )
        }
      />

      <ProgressFields
        mediaType={story.mediaType}
        formData={formData}
        handleChange={handleChange}
      />

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