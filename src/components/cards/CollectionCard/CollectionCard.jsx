import "./CollectionCard.css";

import { useNavigate } from "react-router-dom";

import { useStory } from "../../../context/StoryContext";

const themeColors = {
  evergreen: "var(--color-evergreen)",
  blossom: "var(--color-primary)",
  moonlight: "var(--color-secondary)",
  autumn: "var(--color-accent)",
  sunshine: "var(--color-highlight)",
};

export default function CollectionCard({ collection }) {
  const navigate = useNavigate();

  const { stories } = useStory();

  const collectionStories = stories.filter(
    (story) => story.collectionId === collection.id
  );

  const storyCount = collectionStories.length;

  const averageBloom =
    storyCount > 0
      ? (
          collectionStories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / storyCount
        ).toFixed(1)
      : "0.0";

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
          <strong>{storyCount}</strong>
          <span>Stories</span>
        </div>

        <div>
          <strong>{averageBloom}</strong>
          <span>Bloom</span>
        </div>
      </div>

      <div className="collection-card__footer">
        <span>Enter Grove →</span>
      </div>
    </article>
  );
}