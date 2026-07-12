import { useState } from "react";

import "./Library.css";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import MediaCard from "../components/cards/MediaCard";
import MediaGrid from "../components/layout/MediaGrid";
import SearchBar from "../components/ui/SearchBar";

import { useNavigate } from "react-router-dom";
import { useStory } from "../context/StoryContext";

export default function Library() {
  const { stories } = useStory();

  const [search, setSearch] = useState("");

  const totalStories = stories.length;

  const growingStories = stories.filter(
    (story) => story.journey === "growing"
  ).length;

  const averageBloom =
    totalStories > 0
      ? (
          stories.reduce(
            (sum, story) => sum + Number(story.bloom || 0),
            0
          ) / totalStories
        ).toFixed(1)
      : 0;

      const navigate = useNavigate();

  const filteredStories = stories.filter((story) => {
    const query = search.toLowerCase();

    return (
      story.title?.toLowerCase().includes(query) ||
      story.creator?.toLowerCase().includes(query) ||
      story.genre?.toLowerCase().includes(query) ||
      story.grove?.toLowerCase().includes(query)
    );
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

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Find a story..."
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
                onClick={() => navigate(`/story/${story.id}`)}
              />
            ))
          ) : (
            <div className="grove-empty">
              <div className="grove-empty__icon">🔍</div>

              <h2>No stories found.</h2>

              <p>
                Try searching by title, creator, genre, or grove.
              </p>
            </div>
          )}

        </MediaGrid>
      )}
    </AppLayout>
  );
}