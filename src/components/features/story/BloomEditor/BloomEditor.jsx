import "./BloomEditor.css";

import { useStory } from "../../../../context/StoryContext";

export default function BloomEditor({ story }) {
  const { updateStory } = useStory();

  const handleChange = (e) => {
    updateStory(story.id, {
      bloom: Number(e.target.value),
    });
  };

  return (
    <div className="bloom-editor">

      <div className="bloom-editor__header">

        <span>Bloom</span>

        <strong>
          {story.bloom} / 10
        </strong>

      </div>

      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={story.bloom}
        onChange={handleChange}
      />

    </div>
  );
}