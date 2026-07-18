import { useState } from "react";
import { useCollection } from "../../../../context/CollectionContext";

import "./PlantStoryForm.css";

import JourneySelector from "../../../forms/JourneySelector";

import Input from "../../../ui/Input";
import Textarea from "../../../ui/Textarea";
import Button from "../../../ui/Button";
import CoverUpload from "../../../ui/CoverUpload";

import CreateCollectionModal from "../../collections/CreateCollectionModal/CreateCollectionModal";

export default function PlantStoryForm({
  mediaType,
  onPlant,
}) {
  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    collectionId: "",
    genre: "",
    origin: "",
    reflections: "",
    firefly: "",
    bloom: 8.5,
    journey: "planning",
    cover: null,
  });

  const [showCreateGrove, setShowCreateGrove] =
    useState(false);

  const { collections } = useCollection();

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const story = {
      mediaType,
      ...formData,
    };

    onPlant(story);
  };

  return (
    <>
      <form
        className="plant-story-form"
        onSubmit={handleSubmit}
      >
        <header className="plant-story-form__header">
          <h2>
            📚 Planting a {mediaType}
          </h2>

          <p>
            Every story begins with a single seedling.
          </p>
        </header>

        <div className="plant-story-grid">

          <Input
            label="Title"
            required
            value={formData.title}
            onChange={(e) =>
              handleChange("title", e.target.value)
            }
            placeholder="The Magic Faraway Tree"
          />

          <Input
            label="Creator"
            value={formData.creator}
            onChange={(e) =>
              handleChange("creator", e.target.value)
            }
            placeholder="Enid Blyton"
          />

          <div className="form-group form-group--full">
            <label>Journey</label>

            <JourneySelector
              value={formData.journey}
              onChange={(value) =>
                handleChange("journey", value)
              }
            />
          </div>

          <div className="form-group">
            <label>Grove</label>

            <select
              value={formData.collectionId}
              onChange={(e) => {
                if (e.target.value === "__new__") {
                  setShowCreateGrove(true);
                  return;
                }

                handleChange(
                  "collectionId",
                  e.target.value
                );
              }}
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

              <option value="__new__">
                🌱 Plant New Grove...
              </option>
            </select>
          </div>

          <Input
            label="Genre"
            value={formData.genre}
            onChange={(e) =>
              handleChange("genre", e.target.value)
            }
            placeholder="Fantasy"
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
                handleChange("bloom", e.target.value)
              }
            />

            <p className="bloom-value">
              {formData.bloom} / 10
            </p>
          </div>

          <Input
            label="Origin"
            value={formData.origin}
            onChange={(e) =>
              handleChange("origin", e.target.value)
            }
            placeholder="Where did this story find you?"
          />

          <div className="form-group form-group--full">
            <CoverUpload />
          </div>

        </div>

        <Textarea
          label="🍂 Reflections"
          rows={5}
          value={formData.reflections}
          onChange={(e) =>
            handleChange("reflections", e.target.value)
          }
          placeholder="Thoughts, favourite moments, quotes..."
        />

        <Textarea
          label="✨ Firefly"
          rows={3}
          value={formData.firefly}
          onChange={(e) =>
            handleChange("firefly", e.target.value)
          }
          placeholder="What still glows after this story?"
        />

        <Button type="submit">
          🌱 Plant Story
        </Button>

      </form>

      <CreateCollectionModal
        isOpen={showCreateGrove}
        onClose={() =>
          setShowCreateGrove(false)
        }
        onCollectionCreated={(newCollection) => {
          handleChange(
            "collectionId",
            newCollection.id
          );

          setShowCreateGrove(false);
        }}
      />
    </>
  );
}