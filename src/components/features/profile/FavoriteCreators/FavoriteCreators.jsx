import "./FavoriteCreators.css";

export default function FavoriteCreators({ stories }) {
  const creatorMap = {};

  stories.forEach((story) => {
    if (!story.creator) return;

    creatorMap[story.creator] =
      (creatorMap[story.creator] || 0) + 1;
  });

  const favoriteCreators = Object.entries(creatorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <section className="favorite-creators">

      <h2>✍️ Favorite Creators</h2>

      {favoriteCreators.length === 0 ? (

        <div className="favorite-creators__empty">
          Plant more stories to discover your favorite creators.
        </div>

      ) : (

        <div className="favorite-creators__list">

          {favoriteCreators.map(([creator, count]) => (

            <div
              key={creator}
              className="creator-chip"
            >
              <span>{creator}</span>

              <span className="creator-chip__count">
                {count}
              </span>
            </div>

          ))}

        </div>

      )}

    </section>
  );
}