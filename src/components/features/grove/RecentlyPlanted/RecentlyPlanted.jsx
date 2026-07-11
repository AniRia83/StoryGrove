import "./RecentlyPlanted.css";
import MediaCard from "../../../cards/MediaCard";
import MediaGrid from "../../../layout/MediaGrid";

export default function RecentlyPlanted({
  stories,
}) {
  return (
    <section className="recently-planted">

      <h2>Recently Planted</h2>

      {stories.length === 0 ? (
        <div className="recently-planted__empty">

          <div className="empty-grove">
            🌱
          </div>

          <h3>Your grove is waiting.</h3>

          <p>
            Plant your first story and watch your little forest begin to grow.
          </p>

        </div>
      ) : (

        <MediaGrid>

          {stories.slice(0, 6).map((story) => (

            <MediaCard
              key={story.id}
              title={story.title}
              creator={story.creator}
              mediaType={story.mediaType}
              progress={0}
            />

          ))}

        </MediaGrid>

      )}

    </section>
  );
}