import "./StoryInfoGrid.css";

import { useCollection } from "../../../../context/CollectionContext";

export default function StoryInfoGrid({ story }) {
  const { getCollectionById } = useCollection();

  const collection = story.collectionId
    ? getCollectionById(story.collectionId)
    : null;

  return (
    <section className="story-info-grid">

      <div className="story-info-card">
        <span>Genre</span>
        <strong>{story.genre || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>Grove</span>
        <strong>
          {collection
            ? `${collection.icon} ${collection.name}`
            : "No Grove"}
        </strong>
      </div>

      <div className="story-info-card">
        <span>Origin</span>
        <strong>{story.origin || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>Journey</span>
        <strong>{story.journey}</strong>
      </div>

    </section>
  );
}