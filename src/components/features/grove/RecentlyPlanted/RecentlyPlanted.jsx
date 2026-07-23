import { useNavigate } from "react-router-dom";

import "./RecentlyPlanted.css";

import Section from "../../../ui/Section";
import MediaCard from "../../../cards/MediaCard";
import MediaGrid from "../../../layout/MediaGrid";
import EmptyState from "../../../ui/EmptyState";

import { useCollection } from "../../../../context/CollectionContext";

export default function RecentlyPlanted({
  stories,
}) {
  const navigate = useNavigate();

  const { getCollectionById } =
    useCollection();

  return (
    <Section
      title="Recently Planted"
      icon="🌱"
      action={
        <button
          className="recently-planted__seeall"
          onClick={() =>
            navigate("/library")
          }
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
              story={story}
              collection={
                story.collectionId
                  ? getCollectionById(
                      story.collectionId
                    )?.name
                  : null
              }
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