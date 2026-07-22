import { useNavigate } from "react-router-dom";

import "./CollectionStoryGrid.css";

import MediaGrid from "../../../layout/MediaGrid";
import MediaCard from "../../../cards/MediaCard";

export default function CollectionStoryGrid({
  stories,
}) {
  const navigate = useNavigate();

  return (
    <MediaGrid>

      {stories.map((story) => (

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
  );
}