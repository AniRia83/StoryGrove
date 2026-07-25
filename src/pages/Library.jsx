import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Library.css";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import MediaGrid from "../components/layout/MediaGrid";
import MediaCard from "../components/cards/MediaCard";

import LibraryHeader from "../components/features/library/LibraryHeader";
import LibraryToolbar from "../components/features/library/LibraryToolbar";

import EmptyState from "../components/ui/EmptyState";

import { useStory } from "../context/StoryContext";
import { useCollection } from "../context/CollectionContext";

export default function Library() {
  const navigate = useNavigate();

  const { stories } = useStory();

  const {
    collections,
    getCollectionById,
  } = useCollection();

  const [search, setSearch] = useState("");
  const [grove, setGrove] = useState("");
  const [journey, setJourney] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [bloom, setBloom] = useState("");
  const [sort, setSort] = useState("newest");

  const totalStories = stories.length;

  const filteredStories = stories
    .filter((story) => {
      const query = search.toLowerCase();

      const collection = story.collectionId
        ? getCollectionById(story.collectionId)
        : null;

      const matchesSearch =
        story.title?.toLowerCase().includes(query) ||
        story.creator?.toLowerCase().includes(query) ||
        story.genre?.toLowerCase().includes(query) ||
        story.mediaType?.toLowerCase().includes(query) ||
        collection?.name?.toLowerCase().includes(query);

      const matchesGrove =
        !grove ||
        story.collectionId === grove;

      const matchesJourney =
        !journey ||
        story.journey === journey;

      const matchesMediaType =
        !mediaType ||
        story.mediaType === mediaType;

      const matchesBloom =
        !bloom ||
        Number(story.bloom) >= Number(bloom);

      return (
        matchesSearch &&
        matchesGrove &&
        matchesJourney &&
        matchesMediaType &&
        matchesBloom
      );
    })
    .sort((a, b) => {
      switch (sort) {
        case "oldest":
          return (
            new Date(a.plantedAt) -
            new Date(b.plantedAt)
          );

        case "title-asc":
          return a.title.localeCompare(b.title);

        case "title-desc":
          return b.title.localeCompare(a.title);

        case "bloom-desc":
          return Number(b.bloom) - Number(a.bloom);

        case "bloom-asc":
          return Number(a.bloom) - Number(b.bloom);

        default:
          return (
            new Date(b.plantedAt) -
            new Date(a.plantedAt)
          );
      }
    });

  return (
    <AppLayout>

      <LibraryHeader />

      <LibraryToolbar
        search={search}
        setSearch={setSearch}
        grove={grove}
        setGrove={setGrove}
        journey={journey}
        setJourney={setJourney}
        mediaType={mediaType}
        setMediaType={setMediaType}
        bloom={bloom}
        setBloom={setBloom}
        sort={sort}
        setSort={setSort}
        collections={collections}
      />

      <div className="library-results">
        🌿 Showing {filteredStories.length}{" "}
        {filteredStories.length === 1
          ? "story"
          : "stories"}
      </div>

      {totalStories === 0 ? (

        <EmptyState
          icon="🌳"
          title="Your grove is waiting."
          description="Every story you plant becomes another tree in your forest."
        />

      ) : (

        <MediaGrid>

          {filteredStories.length > 0 ? (

            filteredStories.map((story) => (

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

            ))

          ) : (

            <EmptyState
              icon="🍃"
              title="Nothing grows here yet."
              description="Try another search or adjust your Grove filters."
            />

          )}

        </MediaGrid>

      )}

    </AppLayout>
  );
}