import "./FeaturedStories.css";

import { useNavigate } from "react-router-dom";

import MediaGrid from "../../../layout/MediaGrid";
import MediaCard from "../../../cards/MediaCard";

import EmptyState from "../../../ui/EmptyState";

import { useCollection } from "../../../../context/CollectionContext";

export default function FeaturedStories({
  stories,
}) {
  const navigate = useNavigate();

  const { getCollectionById } =
    useCollection();

  if (!stories.length) {
    return (
      <EmptyState
        icon="📚"
        title="No stories to discover."
        description="Plant a few stories into your grove and they'll appear here."
      />
    );
  }

  return (
    <section className="featured-stories">
      <h2 className="featured-stories__title">
        ✨ Featured Stories
      </h2>

      <p className="featured-stories__subtitle">
        Rediscover stories from your own grove.
      </p>

      <MediaGrid>
        {stories
          .slice(0, 6)
          .map((story) => (
            <MediaCard
              key={story.id}
              story={story}
              collection={
                story.collectionId
                  ? getCollectionById(
                      story.collectionId
                    )?.name
                  : null
              }
              onClick={() =>
                navigate(
                  `/story/${story.id}`
                )
              }
            />
          ))}
      </MediaGrid>
    </section>
  );
}