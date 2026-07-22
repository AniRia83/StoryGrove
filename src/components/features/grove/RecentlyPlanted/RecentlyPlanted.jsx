import { useNavigate } from "react-router-dom";

import "./RecentlyPlanted.css";

import Section from "../../../ui/Section";
import MediaCard from "../../../cards/MediaCard";
import MediaGrid from "../../../layout/MediaGrid";
import EmptyState from "../../../ui/EmptyState";

export default function RecentlyPlanted({
  stories,
}) {
  const navigate = useNavigate();

  return (
    <Section
      title="Recently Planted"
      icon="🌱"
      action={
        <button
          className="recently-planted__seeall"
          onClick={() => navigate("/library")}
        >
          See All →
        </button>
      }
    >

      {stories.length === 0 ? (

        <EmptyState
  icon="🌱"
  title="Your grove is waiting."
  description="Plant your first story and watch your little forest begin to grow."
/>

      ) : (

        <MediaGrid>

          {stories.slice(0, 3).map((story) => (

            <MediaCard
              key={story.id}
              title={story.title}
              creator={story.creator}
              mediaType={story.mediaType}
              progress={story.progress || 0}
              cover={story.cover}
              onClick={() =>
                navigate(`/story/${story.id}`)
              }
            />

          ))}

        </MediaGrid>

      )}

    </Section>
  );
}