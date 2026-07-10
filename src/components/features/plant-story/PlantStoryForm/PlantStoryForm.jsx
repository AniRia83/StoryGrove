import { useState } from "react";

import "./PlantStoryForm.css";

import JourneySelector from "../../../forms/JourneySelector";

import Input from "../../../ui/Input";
import Textarea from "../../../ui/Textarea";
import Button from "../../../ui/Button";
import CoverUpload from "../../../ui/CoverUpload";

export default function PlantStoryForm({
  mediaType,
}) {
 const [formData, setFormData] = useState({
  title: "",
  creator: "",
  grove: "",
  genre: "",
  origin: "",
  reflections: "",
  firefly: "",
  bloom: 8.5,
  journey: "planning",
  cover: null,
  });

  //update func
  const handleChange = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  return (
    <form className="plant-story-form">

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

        <Input
          label="Grove"
          value={formData.grove}
          onChange={(e) =>
            handleChange("grove", e.target.value)
          }
          placeholder="Fantasy Reads"
        />

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
  );
}