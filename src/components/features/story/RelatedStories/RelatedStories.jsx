import "./RelatedStories.css";

import { useNavigate } from "react-router-dom";

import MediaCard from "../../../cards/MediaCard/MediaCard";

import { useStory } from "../../../../context/StoryContext";
import { useCollection } from "../../../../context/CollectionContext";

export default function RelatedStories({ story }) {
  const navigate = useNavigate();

  const { stories } = useStory();

  const { getCollectionById } = useCollection();

  let related = stories.filter(
    (s) =>
      s.id !== story.id &&
      s.collectionId &&
      s.collectionId === story.collectionId
  );

  if (related.length < 4) {
    const sameMedia = stories.filter(
      (s) =>
        s.id !== story.id &&
        s.mediaType === story.mediaType &&
        !related.some((r) => r.id === s.id)
    );

    related = [...related, ...sameMedia];
  }

  related = related.slice(0, 4);

  if (!related.length) return null;

  return (
    <section className="related-stories">

      <div className="related-stories__header">

        <h2>🌿 You may also enjoy</h2>

        <p>
          More stories growing in your grove.
        </p>

      </div>

      <div className="related-stories__grid">

        {related.map((item) => (

          <MediaCard
            key={item.id}
            story={item}
            collection={
              item.collectionId
                ? getCollectionById(item.collectionId)?.name
                : null
            }
            onClick={() =>
              navigate(`/story/${item.id}`)
            }
          />

        ))}

      </div>

    </section>
  );
}