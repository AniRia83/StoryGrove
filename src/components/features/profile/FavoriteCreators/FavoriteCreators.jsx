import "./FavoriteCreators.css";
import Section from "../../../ui/Section";

export default function FavoriteCreators({
  stories,
}) {
  const creatorMap = {};

  stories.forEach((story) => {
    if (!story.creator) return;

    creatorMap[story.creator] =
      (creatorMap[story.creator] || 0) + 1;
  });

  const creators = Object.entries(
    creatorMap
  )
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

        <div className="favorite-creators__list">

          {creators.map(
            ([creator, count]) => (

              <div
                key={creator}
                className="creator-chip"
              >

                <span>{creator}</span>

                <span className="creator-chip__count">
                  {count}
                </span>

              </div>

            )
          )}

        </div>

      )}

    </Section>
  );
}