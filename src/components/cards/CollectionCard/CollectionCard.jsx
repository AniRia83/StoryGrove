import "./CollectionCard.css";

import { useNavigate } from "react-router-dom";

import { useStory } from "../../../context/StoryContext";

import { getCollectionStats } from "../../../utils/collectionUtils";

const themeColors = {
  evergreen: "var(--color-evergreen)",
  blossom: "var(--color-primary)",
  moonlight: "var(--color-secondary)",
  autumn: "var(--color-accent)",
  sunshine: "var(--color-highlight)",
};

export default function CollectionCard({
  collection,
}) {
  const navigate = useNavigate();

  const { stories } = useStory();

  const stats = getCollectionStats(
    collection,
    stories
  );

  return (
    <article
      className="collection-card"
      onClick={() =>
        navigate(`/collections/${collection.id}`)
      }
    >
      <div
        className="collection-card__icon"
        style={{
          color:
            themeColors[collection.color] ||
            "var(--color-evergreen)",
        }}
      >
        {collection.icon}
      </div>

      <h3 className="collection-card__title">
        {collection.name}

        {collection.isFavorite && (
          <span className="collection-card__favorite">
            ⭐
          </span>
        )}
      </h3>

      <p className="collection-card__description">
        {collection.description ||
          "No description yet."}
      </p>

      <div className="collection-card__stats">

        <div>
          <strong>
            {stats.totalStories}
          </strong>
          <span>Stories</span>
        </div>

        <div>
          <strong>
            {stats.averageBloom}
          </strong>
          <span>Bloom</span>
        </div>

      </div>

      <div className="collection-card__progress">

        <div className="collection-card__progress-top">

          <span>Reading Progress</span>

          <span>
            {stats.progressPercent}%
          </span>

        </div>

        <div className="collection-card__progress-bar">

          <div
            className="collection-card__progress-fill"
            style={{
              width: `${stats.progressPercent}%`,
            }}
          />

        </div>

      </div>

      <div className="collection-card__journeys">

        <span>
          🌱{" "}
          {
            stories.filter(
              (story) =>
                story.collectionId ===
                  collection.id &&
                story.journey === "growing"
            ).length
          }
        </span>

        <span>
          🌳{" "}
          {stats.completedStories}
        </span>

      </div>

      <div className="collection-card__footer">
        <span>Enter Grove →</span>
      </div>
    </article>
  );
}