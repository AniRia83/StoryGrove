import { useMemo, useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import PageBanner from "../components/ui/PageBanner";
import SearchBar from "../components/ui/SearchBar";
import EmptyState from "../components/ui/EmptyState";

import GenreChips from "../components/features/wander/GenreChips";
import MediaCategories from "../components/features/wander/MediaCategories";
import FeaturedStories from "../components/features/wander/FeaturedStories";
import ReadingInspiration from "../components/features/wander/ReadingInspiration";
import SurpriseMe from "../components/features/wander/SurpriseMe";

import { useStory } from "../context/StoryContext";

export default function Discover() {
  const { stories } = useStory();

  const [search, setSearch] = useState("");

  const [selectedGenre, setSelectedGenre] =
    useState("");

  const [
    selectedMediaType,
    setSelectedMediaType,
  ] = useState("");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const query = search.toLowerCase();

      const matchesSearch =
        story.title
          ?.toLowerCase()
          .includes(query) ||
        story.creator
          ?.toLowerCase()
          .includes(query) ||
        story.genre
          ?.toLowerCase()
          .includes(query);

      const matchesGenre =
        !selectedGenre ||
        story.genre === selectedGenre;

      const matchesMediaType =
        !selectedMediaType ||
        story.mediaType ===
          selectedMediaType;

      return (
        matchesSearch &&
        matchesGenre &&
        matchesMediaType
      );
    });
  }, [
    stories,
    search,
    selectedGenre,
    selectedMediaType,
  ]);

  const hasFilters =
    search ||
    selectedGenre ||
    selectedMediaType;

  function clearFilters() {
    setSearch("");
    setSelectedGenre("");
    setSelectedMediaType("");
  }

  return (
    <AppLayout>
      <PageBanner
        icon="🧭"
        title="Discover"
        subtitle="Explore stories waiting to become part of your grove."
      />

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search stories, creators or genres..."
      />

      <GenreChips
        stories={stories}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <MediaCategories
        selectedMediaType={
          selectedMediaType
        }
        onSelectMediaType={
          setSelectedMediaType
        }
      />

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p>
          <strong>
            {filteredStories.length}
          </strong>{" "}
          {filteredStories.length === 1
            ? "story"
            : "stories"}{" "}
          found
        </p>

        {hasFilters && (
          <button
            onClick={clearFilters}
            style={{
              border: "none",
              background:
                "var(--color-evergreen)",
              color: "white",
              padding:
                ".65rem 1.2rem",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Clear Filters
          </button>
        )}
      </div>

      {filteredStories.length === 0 ? (
        <EmptyState
          icon="🌿"
          title="Nothing grew here."
          description="Try another search or clear your filters."
        />
      ) : (
        <>
          <FeaturedStories
            stories={filteredStories}
          />

          <ReadingInspiration />

          <SurpriseMe
            stories={filteredStories}
          />
        </>
      )}
    </AppLayout>
  );
}