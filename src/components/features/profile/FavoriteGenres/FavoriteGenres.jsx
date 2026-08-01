import "./FavoriteGenres.css";

import Section from "../../../ui/Section";

const genreColors = [
  "pink",
  "purple",
  "orange",
  "green",
  "yellow",
  "blue",
];

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

    <Section
      title="Favorite Genres"
      icon="🌸"
    >

      {favorites.length === 0 ? (

        <p className="favorite-genres__empty">

          Plant more stories to discover your reading personality.

        </p>

      ) : (

        <div className="favorite-genres__grid">

          {favorites.map(
            ([genre, count], index) => {

              const percentage = Math.round(
                (count / stories.length) * 100
              );

              return (

                <article
                  key={genre}
                  className={`favorite-genre-card ${genreColors[index % genreColors.length]}`}
                >

                  <div className="favorite-genre-card__top">

                    <h3>{genre}</h3>

                    <span>
                      {count}
                    </span>

                  </div>

                  <div className="favorite-genre-card__progress">

                    <div
                      className="favorite-genre-card__fill"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                  <p>

                    {percentage}% of your library

                  </p>

                </article>

              );

            }
          )}

        </div>

      )}

    </Section>

  );

}