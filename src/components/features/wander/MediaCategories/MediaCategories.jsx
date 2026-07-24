import "./MediaCategories.css";

const categories = [
  {
    icon: "📚",
    title: "Book",
    description: "Novels & literature",
  },
  {
    icon: "📖",
    title: "Manga",
    description: "Graphic stories",
  },
  {
    icon: "📺",
    title: "Anime",
    description: "Animated series",
  },
  {
    icon: "🎬",
    title: "Movie",
    description: "Films",
  },
  {
    icon: "📺",
    title: "TV Series",
    description: "Shows & series",
  },
  {
    icon: "🎮",
    title: "Game",
    description: "Interactive adventures",
  },
  {
    icon: "🎵",
    title: "Music",
    description: "Albums & soundtracks",
  },
  {
    icon: "🎙️",
    title: "Podcast",
    description: "Episodes & audio",
  },
];

export default function MediaCategories({
  selectedMediaType,
  onSelectMediaType,
}) {
  return (
    <section className="media-categories">

      <div className="media-categories__header">

        <h2 className="media-categories__title">
          📚 Browse Media
        </h2>

        {selectedMediaType && (
          <button
            className="media-categories__clear"
            onClick={() =>
              onSelectMediaType("")
            }
          >
            Clear
          </button>
        )}

      </div>

      <div className="media-categories__grid">

        <button
          className={
            !selectedMediaType
              ? "media-category-card active"
              : "media-category-card"
          }
          onClick={() =>
            onSelectMediaType("")
          }
        >
          <span className="media-category-card__icon">
            🌿
          </span>

          <h3>All</h3>

          <p>Everything in your grove</p>
        </button>

        {categories.map((category) => (

          <button
            key={category.title}
            className={
              selectedMediaType ===
              category.title
                ? "media-category-card active"
                : "media-category-card"
            }
            onClick={() =>
              onSelectMediaType(
                category.title
              )
            }
          >

            <span className="media-category-card__icon">
              {category.icon}
            </span>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

          </button>

        ))}

      </div>

    </section>
  );
}