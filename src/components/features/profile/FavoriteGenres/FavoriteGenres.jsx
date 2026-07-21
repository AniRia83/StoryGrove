import "./FavoriteGenres.css";

export default function FavoriteGenres({
  stories,
}) {
  const genreCount = {};

  stories.forEach((story) => {
    if (!story.genre) return;

    genreCount[story.genre] =
      (genreCount[story.genre] || 0) + 1;
  });

  const favorites = Object.entries(genreCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  return (
    <section className="favorite-genres">

      <h2>🌸 Favorite Genres</h2>

      {favorites.length === 0 ? (

        <p className="favorite-genres__empty">
          Plant more stories to discover your reading personality.
        </p>

      ) : (

        <div className="favorite-genres__chips">

          {favorites.map(([genre, count]) => (

            <div
              key={genre}
              className="favorite-genre-chip"
            >
              {genre}

              <span>{count}</span>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}