import { useNavigate } from "react-router-dom";

import "./CollectionStoryGrid.css";

import MediaGrid from "../../../layout/MediaGrid";
import MediaCard from "../../../cards/MediaCard";

import { useCollection } from "../../../../context/CollectionContext";

export default function CollectionStoryGrid({
  stories,
}) {
  const navigate = useNavigate();

  const { getCollectionById } = useCollection();

  return (
    <MediaGrid>

      {stories.map((story) => (

        <MediaCard
  key={story.id}
  story={story}
  collection={null}
  onClick={() =>
    navigate(`/story/${story.id}`)
  }
/>

      ))}

    </MediaGrid>
  );
}