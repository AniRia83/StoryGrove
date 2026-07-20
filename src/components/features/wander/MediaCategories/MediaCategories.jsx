import "./MediaCategories.css";

const categories = [
  {
    icon: "📚",
    title: "Book",
    description: "Novels & literature",
  },
  {
    icon: "🎬",
    title: "Movie",
    description: "Films",
  },
  {
    icon: "📺",
    title: "Anime",
    description: "Animated series",
  },
  {
    icon: "📖",
    title: "Manga",
    description: "Graphic stories",
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
  icon: "📺",
  title: "TV Series",
  description: "Shows & Series",
},
{
  icon: "🎙️",
  title: "Podcast",
  description: "Episodes & Audio",
},

];

export default function MediaCategories({
  selectedMediaType,
  onSelectMediaType,
}) {
  return (
    <section className="media-categories">

      <h2 className="media-categories__title">
        Browse by Media
      </h2>

      <div className="media-categories__grid">

        <button
          className={
            !selectedMediaType
              ? "media-category-card active"
              : "media-category-card"
          }
          onClick={() => onSelectMediaType("")}
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
              selectedMediaType === category.title
                ? "media-category-card active"
                : "media-category-card"
            }
            onClick={() =>
              onSelectMediaType(category.title)
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