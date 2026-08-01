import "./CollectionBanner.css";

import Popover from "../../../ui/Popover";
import CollectionActions from "../CollectionActions";

const bannerThemes = {
  evergreen: {
    background:
      "linear-gradient(135deg, var(--color-surface), var(--color-cream))",
    accent: "var(--color-evergreen)",
  },

  blossom: {
    background:
      "linear-gradient(135deg, var(--color-surface), color-mix(in srgb, var(--color-primary) 12%, var(--color-surface)))",
    accent: "var(--color-primary)",
  },

  moonlight: {
    background:
      "linear-gradient(135deg, var(--color-surface), color-mix(in srgb, var(--color-secondary) 12%, var(--color-surface)))",
    accent: "var(--color-secondary)",
  },

  autumn: {
    background:
      "linear-gradient(135deg, var(--color-surface), color-mix(in srgb, var(--color-accent) 12%, var(--color-surface)))",
    accent: "var(--color-accent)",
  },

  sunshine: {
    background:
      "linear-gradient(135deg, var(--color-surface), color-mix(in srgb, var(--color-highlight) 10%, var(--color-surface)))",
    accent: "var(--color-highlight)",
  },
};

export default function CollectionBanner({
  collection,
  storyCount,
  averageBloom,
  onEdit,
  onFavourite,
  onDelete,
}) {
  const theme =
    bannerThemes[collection.color] ??
    bannerThemes.evergreen;

  const createdDate = new Date(
    collection.createdAt
  ).toLocaleDateString();

  return (
    <section
      className="collection-banner"
      style={{
        background: theme.background,
      }}
    >
      <div
        className="collection-banner__accent"
        style={{
          background: theme.accent,
        }}
      />

      <Popover
        trigger={
          <span className="collection-banner__menu">
            &#8942;
          </span>
        }
      >
        <CollectionActions
          onEdit={onEdit}
          onFavourite={onFavourite}
          onDelete={onDelete}
          isFavourite={collection.isFavorite}
        />
      </Popover>

      <div
        className="collection-banner__icon"
        style={{
          color: theme.accent,
        }}
      >
        {collection.icon}
      </div>

      <h1>
        {collection.name}

        {collection.isFavorite && (
          <span className="collection-banner__favorite">
            ⭐
          </span>
        )}
      </h1>

      <p className="collection-banner__description">
        {collection.description}
      </p>

      <p className="collection-banner__date">
        Created {createdDate}
      </p>

      <div className="collection-banner__stats">
        <div>
          <strong
            style={{
              color: theme.accent,
            }}
          >
            {storyCount}
          </strong>

          <span>Stories</span>
        </div>

        <div>
          <strong
            style={{
              color: theme.accent,
            }}
          >
            {averageBloom}
          </strong>

          <span>Average Bloom</span>
        </div>
      </div>
    </section>
  );
}