import "./CollectionCard.css";

import { useNavigate } from "react-router-dom";

import { useStory } from "../../../context/StoryContext";

export default function CollectionCard({ collection }) {
  const navigate = useNavigate();

  const { stories } = useStory();

  const storyCount = stories.filter(
    (story) => story.collectionId === collection.id
  ).length;

  return (
    <article
      className="collection-card"
      onClick={() =>
        navigate(`/collections/${collection.id}`)
      }
    >
      <div className="collection-card__header">

        <div className="collection-card__icon">
          {collection.icon}
        </div>

        <div>

          <h3 className="collection-card__title">
            {collection.name}
          </h3>

          <p className="collection-card__count">
            {storyCount}{" "}
            {storyCount === 1
              ? "Story"
              : "Stories"}
          </p>

        </div>

      </div>

      <p className="collection-card__description">
        {collection.description ||
          "No description yet."}
      </p>

      <div className="collection-card__footer">

        <span className="collection-card__color">
          🌿 {collection.color}
        </span>

      </div>

    </article>
  );
}