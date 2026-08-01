import "./FavoriteCreators.css";

import Section from "../../../ui/Section";

const creatorColors = [
  "pink",
  "purple",
  "orange",
  "green",
  "yellow",
];

export default function FavoriteCreators({
  stories,
}) {

  const creatorMap = {};

  stories.forEach((story) => {

    if (!story.creator) return;

    creatorMap[story.creator] =
      (creatorMap[story.creator] || 0) + 1;

  });

  const creators = Object.entries(creatorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (

    <Section
      title="Favorite Creators"
      icon="✍️"
    >

      {creators.length === 0 ? (

        <div className="favorite-creators__empty">

          Plant more stories to discover your favourite creators.

        </div>

      ) : (

        <div className="favorite-creators__grid">

          {creators.map(
            ([creator, count], index) => {

              const percentage = Math.round(
                (count / stories.length) * 100
              );

              return (

                <article
                  key={creator}
                  className={`creator-card ${creatorColors[index % creatorColors.length]}`}
                >

                  <div className="creator-card__avatar">

                    ✍️

                  </div>

                  <h3>{creator}</h3>

                  <div className="creator-card__progress">

                    <div
                      className="creator-card__fill"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                  <p>

                    {count} stories • {percentage}% of library

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