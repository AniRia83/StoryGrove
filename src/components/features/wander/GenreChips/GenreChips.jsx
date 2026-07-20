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

      <button
        className={
          !selectedGenre
            ? "genre-chip active"
            : "genre-chip"
        }
        onClick={() => onSelectGenre("")}
      >
        All
      </button>

      {genres.map((genre) => {
        const count = stories.filter(
          (story) => story.genre === genre
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
            {genre} ({count})
          </button>
        );
      })}

    </section>
  );
}