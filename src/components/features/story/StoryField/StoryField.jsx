import { useState, useEffect } from "react";

import "./StoryField.css";

import { useStory } from "../../../../context/StoryContext";

export default function StoryField({
  story,
  field,
  label,
  placeholder,
}) {
  const { updateStory } = useStory();

  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState(story[field] || "");

  useEffect(() => {
    setValue(story[field] || "");
  }, [story, field]);

  function save() {
    updateStory(story.id, {
      [field]: value,
    });

    setEditing(false);
  }

  return (
    <div className="story-field">

      <label>{label}</label>

      {editing ? (
        <>
          <input
            value={value}
            placeholder={placeholder}
            onChange={(e) =>
              setValue(e.target.value)
            }
          />

          <button onClick={save}>
            Save
          </button>
        </>
      ) : (
        <>
          <p>
            {value || "—"}
          </p>

          <button
            onClick={() =>
              setEditing(true)
            }
          >
            Edit
          </button>
        </>
      )}

    </div>
  );
}