import { useState } from "react";

import "./PlantStoryForm.css";
import JourneySelector from "../../../forms/JourneySelector";

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

      <div className="form-group">
        <label>Title *</label>

        <input
          type="text"
          placeholder="The Magic Faraway Tree"
          required
        />
      </div>

      <div className="form-group">
        <label>Creator</label>

        <input
          type="text"
          placeholder="Enid Blyton"
        />
      </div>

      <div className="form-group">
        <label>Journey</label>

        <JourneySelector
          value={journey}
          onChange={setJourney}
        />
      </div>

      <div className="form-group">
        <label>Grove</label>

        <input
          type="text"
          placeholder="Fantasy Reads"
        />
      </div>

      <div className="form-group">
        <label>Genre</label>

        <input
          type="text"
          placeholder="Fantasy"
        />
      </div>

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

      <div className="form-group">
        <label>Origin</label>

        <input
          type="text"
          placeholder="Where did this story find you?"
        />
      </div>

      <div className="form-group">
        <label>Cover</label>

        <input type="file" />
      </div>

      <div className="form-group">
        <label>🍂 Reflections</label>

        <textarea
          rows="4"
          placeholder="Thoughts, favourite moments, quotes..."
        />
      </div>

      <div className="form-group">
        <label>✨ Firefly</label>

        <textarea
          rows="2"
          placeholder="What still glows after this story?"
        />
      </div>

      <Button type="submit">
        🌱 Plant Story
      </Button>

    </form>
  );
}