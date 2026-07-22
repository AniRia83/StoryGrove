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
      "linear-gradient(135deg, #FFF5FB, #FFF8F0)",
    accent: "var(--color-primary)",
  },

  moonlight: {
    background:
      "linear-gradient(135deg, #F7F2FF, #FFFDF9)",
    accent: "var(--color-secondary)",
  },

  autumn: {
    background:
      "linear-gradient(135deg, #FFF7EE, #FFFDF9)",
    accent: "var(--color-accent)",
  },

  sunshine: {
    background:
      "linear-gradient(135deg, #FFFDE8, #FFFDF9)",
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

  return (
    <section
      className="collection-banner"
      style={{
        background: theme.background,
      }}
    >
      <Popover
        trigger={
          <span
            className="collection-banner__menu"
            aria-label="Collection actions"
          >
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

      <h1>{collection.name}</h1>

      <p className="collection-banner__description">
        {collection.description}
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