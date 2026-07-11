import AppLayout from "../components/layout/AppLayout/AppLayout";
import MediaCard from "../components/cards/MediaCard";
import MediaGrid from "../components/layout/MediaGrid";

import { useStory } from "../context/StoryContext";

export default function Library() {
  const { stories } = useStory();

  return (
    <AppLayout
      title="My Grove 📚"
      subtitle="Every story you've planted lives here."
    >
      {stories.length === 0 ? (
        <div className="recently-planted__empty">
          <div className="empty-grove">
            🌳
          </div>

          <h3>Your grove is still young.</h3>

          <p>
            Every story you plant will find a home here.
          </p>
        </div>
      ) : (
        <MediaGrid>
          {stories.map((story) => (
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