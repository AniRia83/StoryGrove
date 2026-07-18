import { useParams } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import MediaGrid from "../components/layout/MediaGrid";

import MediaCard from "../components/cards/MediaCard";

import { useCollection } from "../context/CollectionContext";
import { useStory } from "../context/StoryContext";

export default function CollectionDetails() {
  const { id } = useParams();

  const { getCollectionById } = useCollection();

  const { stories } = useStory();

  const collection = getCollectionById(id);

  if (!collection) {
    return (
      <AppLayout
        title="Grove not found"
        subtitle="This Grove doesn't exist."
      />
    );
  }

  const collectionStories = stories.filter(
    (story) => story.collectionId === collection.id
  );

  return (
    <AppLayout
      title={`${collection.icon} ${collection.name}`}
      subtitle={collection.description}
    >
      <p>
        📚 {collectionStories.length}{" "}
        {collectionStories.length === 1
          ? "Story"
          : "Stories"}
      </p>

      {collectionStories.length === 0 ? (
        <section className="grove-empty">

          <h2>This Grove is empty.</h2>

          <p>
            Plant stories and assign them to this Grove.
          </p>

        </section>
      ) : (
        <MediaGrid>

          {collectionStories.map((story) => (
            <MediaCard
              key={story.id}
              title={story.title}
              creator={story.creator}
              mediaType={story.mediaType}
              progress={0}
            />
          ))}

        </MediaGrid>
      )}
    </AppLayout>
  );
}