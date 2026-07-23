import "./FeaturedStories.css";

import MediaGrid from "../../../layout/MediaGrid";
import MediaCard from "../../../cards/MediaCard";

import { useNavigate } from "react-router-dom";

import { useCollection } from "../../../../context/CollectionContext";

export default function FeaturedStories({
  stories,
}) {
  const navigate = useNavigate();

  const { getCollectionById } =
    useCollection();

  if (!stories.length) return null;

  return (
    <section className="featured-stories">

      <h2 className="featured-stories__title">
        ✨ Featured Stories
      </h2>

      <p className="featured-stories__subtitle">
        Rediscover stories from your own grove.
      </p>

      <MediaGrid>

        {stories.slice(0, 6).map((story) => (

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
              navigate(`/story/${story.id}`)
            }
          />

        ))}

      </MediaGrid>

    </section>
  );
}