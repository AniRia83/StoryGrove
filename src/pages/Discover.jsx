import { useState } from "react";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import PageBanner from "../components/ui/PageBanner";
import SearchBar from "../components/ui/SearchBar";

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

  const [selectedMediaType, setSelectedMediaType] =
    useState("");

  const filteredStories = stories.filter((story) => {
    const query = search.toLowerCase();

    const matchesSearch =
      story.title?.toLowerCase().includes(query) ||
      story.creator?.toLowerCase().includes(query) ||
      story.genre?.toLowerCase().includes(query);

    const matchesGenre =
      !selectedGenre ||
      story.genre === selectedGenre;

    const matchesMediaType =
      !selectedMediaType ||
      story.mediaType === selectedMediaType;

    return (
      matchesSearch &&
      matchesGenre &&
      matchesMediaType
    );
  });

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
        placeholder="Search stories, creators, genres..."
      />

      <GenreChips
        stories={stories}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <MediaCategories
        selectedMediaType={selectedMediaType}
        onSelectMediaType={setSelectedMediaType}
      />

      <FeaturedStories
        stories={filteredStories}
      />

      <ReadingInspiration />

      <SurpriseMe
        stories={stories}
      />

    </AppLayout>
  );
}