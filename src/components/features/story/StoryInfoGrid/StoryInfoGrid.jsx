import "./StoryInfoGrid.css";

import { useCollection } from "../../../../context/CollectionContext";

const progressLabels = {
  Book: "Pages",
  Comic: "Issues",
  Fanfiction: "Chapters",
  Movie: "Minutes",
  "TV Series": "Episodes",
  Anime: "Episodes",
  Game: "Hours",
  Music: "Tracks",
  Podcast: "Episodes",
};

const journeyLabels = {
  planning: "🌱 Planning",
  growing: "🌿 Growing",
  completed: "🌸 Bloomed",
  paused: "🍂 Resting",
  abandoned: "🪵 Abandoned",
};

export default function StoryInfoGrid({ story }) {
  const { getCollectionById } = useCollection();

  const collection = story.collectionId
    ? getCollectionById(story.collectionId)
    : null;

  const progressLabel =
    progressLabels[story.mediaType] || "Progress";

  const completion =
    story.totalProgress > 0
      ? Math.round(
          (story.currentProgress /
            story.totalProgress) *
            100
        )
      : 0;

  const planted = story.plantedAt
    ? new Date(story.plantedAt).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  const updated =
    story.updatedAt &&
    story.updatedAt !== story.plantedAt
      ? new Date(story.updatedAt).toLocaleDateString(
          undefined,
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )
      : null;

  return (
    <section className="story-info-grid">

      <div className="story-info-card">
        <span>🎭 Genre</span>
        <strong>{story.genre || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>🌳 Grove</span>
        <strong>
          {collection
            ? `${collection.icon} ${collection.name}`
            : "No Grove"}
        </strong>
      </div>

      <div className="story-info-card">
        <span>🌿 Journey</span>
        <strong>
          {journeyLabels[story.journey] || "—"}
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
        <span>📈 Completion</span>
        <strong>{completion}%</strong>
      </div>

      <div className="story-info-card">
        <span>⭐ Bloom</span>
        <strong>{story.bloom}/10</strong>
      </div>

      <div className="story-info-card">
        <span>🧭 Origin</span>
        <strong>{story.origin || "—"}</strong>
      </div>

      <div className="story-info-card">
        <span>🌱 Planted</span>
        <strong>{planted}</strong>
      </div>

      {updated && (
        <div className="story-info-card">
          <span>🪴 Last Updated</span>
          <strong>{updated}</strong>
        </div>
      )}

    </section>
  );
}