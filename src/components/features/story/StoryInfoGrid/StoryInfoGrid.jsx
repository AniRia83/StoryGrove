import "./StoryInfoGrid.css";

import { useCollection } from "../../../../context/CollectionContext";

const progressLabels = {
  Book: "Pages",
  Novel: "Pages",
  Manga: "Chapters",
  Comic: "Issues",
  Movie: "Minutes",
  TV: "Episodes",
  Anime: "Episodes",
  Game: "Hours",
  Audiobook: "Hours",
  Podcast: "Episodes",
  Music: "Tracks",
};

export default function StoryInfoGrid({
  story,
}) {
  const { getCollectionById } =
    useCollection();

  const collection =
    story.collectionId
      ? getCollectionById(
          story.collectionId
        )
      : null;

  const progressLabel =
    progressLabels[story.mediaType] ||
    "Progress";

  const progress =
    story.totalProgress > 0
      ? Math.round(
          (story.currentProgress /
            story.totalProgress) *
            100
        )
      : 0;

  return (
    <section className="story-info-grid">

      <div className="story-info-card">
        <span>Media</span>

        <strong>
          {story.mediaType}
        </strong>
      </div>

      <div className="story-info-card">
        <span>Genre</span>

        <strong>
          {story.genre || "—"}
        </strong>
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
        <span>Journey</span>

        <strong>
          {story.journey}
        </strong>
      </div>

      <div className="story-info-card">
        <span>{progressLabel}</span>

        <strong>
          {story.totalProgress
            ? `${story.currentProgress} / ${story.totalProgress}`
            : "—"}
        </strong>
      </div>

      <div className="story-info-card">
        <span>Completed</span>

        <strong>
          {progress}%
        </strong>
      </div>

      <div className="story-info-card">
        <span>Bloom</span>

        <strong>
          {story.bloom}/10
        </strong>
      </div>

      <div className="story-info-card">
        <span>Origin</span>

        <strong>
          {story.origin || "—"}
        </strong>
      </div>

    </section>
  );
}