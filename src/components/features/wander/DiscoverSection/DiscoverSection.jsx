import "./DiscoverSection.css";

import MediaCard from "../../../cards/MediaCard";

export default function DiscoverSection({
  title,
  subtitle,
  stories,
  onStoryClick,
}) {
  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <section className="discover-section">

      <div className="discover-section__header">

        <div>

          <h2>{title}</h2>

          {subtitle && (
            <p>{subtitle}</p>
          )}

        </div>

      </div>

      <div className="discover-section__stories">

        {stories.map((story) => (

          <MediaCard
            key={story.id}
            story={story}
            onClick={() => onStoryClick(story)}
          />

        ))}

      </div>

    </section>
  );
}