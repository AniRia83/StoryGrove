import "./GenreChips.css";

export default function GenreChips({
  stories,
  selectedGenre,
  onSelectGenre,
}) {
  const genres = [
    ...new Set(
      stories
        .map((story) => story.genre)
        .filter(Boolean)
    ),
  ].sort();

  return (
    <section className="genre-chips">
      <div className="genre-chips__header">
        <h2 className="genre-chips__title">
          🌸 Browse Genres
        </h2>

        {selectedGenre && (
          <button
            className="genre-chips__clear"
            onClick={() =>
              onSelectGenre("")
            }
          >
            Clear
          </button>
        )}
      </div>

      <div className="genre-chips__list">
        <button
          className={
            !selectedGenre
              ? "genre-chip active"
              : "genre-chip"
          }
          onClick={() =>
            onSelectGenre("")
          }
        >
          All
        </button>

        {genres.map((genre) => {
          const count = stories.filter(
            (story) =>
              story.genre === genre
          ).length;

          return (
            <button
              key={genre}
              className={
                selectedGenre === genre
                  ? "genre-chip active"
                  : "genre-chip"
              }
              onClick={() =>
                onSelectGenre(genre)
              }
            >
              <span>{genre}</span>

              <span className="genre-chip__count">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}