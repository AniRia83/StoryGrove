import { useState } from "react";

import "./PlantStoryForm.css";

import JourneySelector from "../../../forms/JourneySelector";

import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

export default function PlantStoryForm({
  mediaType,
}) {
  const [journey, setJourney] = useState("planning");
  const [bloom, setBloom] = useState(8.5);

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
          type="text"
          placeholder="The Magic Faraway Tree"
        />

        <Input
          label="Creator"
          type="text"
          placeholder="Enid Blyton"
        />

        <div className="form-group form-group--full">
          <label>Journey</label>

          <JourneySelector
            value={journey}
            onChange={setJourney}
          />
        </div>

        <Input
          label="Grove"
          type="text"
          placeholder="Fantasy Reads"
        />

        <Input
          label="Genre"
          type="text"
          placeholder="Fantasy"
        />

        <div className="form-group">
          <label>Bloom</label>

          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={bloom}
            onChange={(e) => setBloom(e.target.value)}
          />

          <p className="bloom-value">
            {bloom} / 10
          </p>
        </div>

        <Input
          label="Origin"
          type="text"
          placeholder="Where did this story find you?"
        />

        <div className="form-group form-group--full">
          <label>Cover</label>

          <input type="file" />
        </div>

      </div>

      <div className="form-group">
        <label>🍂 Reflections</label>

        <textarea
          rows="5"
          placeholder="Thoughts, favourite moments, quotes..."
        />
      </div>

      <div className="form-group">
        <label>✨ Firefly</label>

        <textarea
          rows="3"
          placeholder="What still glows after this story?"
        />
      </div>

      <Button type="submit">
        🌱 Plant Story
      </Button>

    </form>
  );
}