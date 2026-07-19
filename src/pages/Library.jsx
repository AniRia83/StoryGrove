import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Library.css";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import MediaGrid from "../components/layout/MediaGrid";
import MediaCard from "../components/cards/MediaCard";

import LibraryToolbar from "../components/features/library/LibraryToolbar/LibraryToolbar";

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

  const [bloom, setBloom] = useState("");

  const [sort, setSort] = useState("newest"); 

  const totalStories = stories.length;

  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const averageBloom =
    totalStories > 0
      ? (
          stories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / totalStories
        ).toFixed(1)
      : 0;

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
      collection?.name?.toLowerCase().includes(query);

    const matchesGrove =
      !grove ||
      story.collectionId === grove;

    const matchesJourney =
      !journey ||
      story.journey === journey;

    const matchesBloom =
      !bloom ||
      Number(story.bloom) >= Number(bloom);

    return (
      matchesSearch &&
      matchesGrove &&
      matchesJourney &&
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
    <AppLayout
      title="🌳 My Grove"
      subtitle="Every story you've planted lives here."
    >
      {totalStories > 0 && (
        <section className="grove-summary">

          <div className="grove-stat">
            <span>{totalStories}</span>
            <p>Stories Planted</p>
          </div>

          <div className="grove-stat">
            <span>{growingStories}</span>
            <p>Growing</p>
          </div>

          <div className="grove-stat">
            <span>{averageBloom}</span>
            <p>Average Bloom ✨</p>
          </div>

        </section>
      )}

      <LibraryToolbar
  search={search}
  setSearch={setSearch}

  grove={grove}
  setGrove={setGrove}

  journey={journey}
  setJourney={setJourney}

  bloom={bloom}
  setBloom={setBloom}

  sort={sort}
  setSort={setSort}

  collections={collections}
/>

      {totalStories === 0 ? (
        <section className="grove-empty">

          <div className="grove-empty__icon">
            🌳
          </div>

          <h2>Your grove is waiting.</h2>

          <p>
            Every story you plant becomes another tree in your forest.
          </p>

        </section>
      ) : (
        <MediaGrid>

          {filteredStories.length > 0 ? (
            filteredStories.map((story) => (
              <MediaCard
                key={story.id}
                title={story.title}
                creator={story.creator}
                mediaType={story.mediaType}
                progress={0}
                onClick={() =>
                  navigate(`/story/${story.id}`)
                }
              />
            ))
          ) : (
            <section className="grove-empty">

              <div className="grove-empty__icon">
                🔍
              </div>

              <h2>No stories found.</h2>

              <p>
                Try changing your search or Grove filter.
              </p>

            </section>
          )}

        </MediaGrid>
      )}
    </AppLayout>
  );
}