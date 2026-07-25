import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import PageBanner from "../components/ui/PageBanner";
import EmptyState from "../components/ui/EmptyState";

import DiscoverSection from "../components/features/wander/DiscoverSection/DiscoverSection";

import { useStory } from "../context/StoryContext";

export default function Discover() {
  const { stories } = useStory();

  const navigate = useNavigate();

  const continueGrowing = useMemo(
    () =>
      stories.filter(
        (story) =>
          story.journey === "growing"
      ),
    [stories]
  );

  const highestBloom = useMemo(
    () =>
      [...stories]
        .sort(
          (a, b) =>
            (b.bloom || 0) -
            (a.bloom || 0)
        )
        .slice(0, 8),
    [stories]
  );

  const recentlyPlanted = useMemo(
    () =>
      [...stories]
        .sort(
          (a, b) =>
            new Date(
              b.plantedAt
            ) -
            new Date(a.plantedAt)
        )
        .slice(0, 8),
    [stories]
  );

  function media(mediaType) {
    return stories.filter(
      (story) =>
        story.mediaType === mediaType
    );
  }

  function genre(name) {
    return stories.filter(
      (story) =>
        story.genre === name
    );
  }

  function openStory(story) {
    navigate(`/story/${story.id}`);
  }

  return (
    <AppLayout>

      <PageBanner
        icon="🧭"
        title="Discover"
        subtitle="Rediscover stories already growing inside your Grove."
      />

      {stories.length === 0 ? (
        <EmptyState
          icon="🌱"
          title="Your Grove is empty"
          description="Plant a few stories and Discover will grow automatically."
        />
      ) : (
        <>

          <DiscoverSection
            title="🌿 Continue Growing"
            subtitle="Continue your current adventures."
            stories={continueGrowing}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="⭐ Highest Bloom"
            subtitle="Your favourite stories."
            stories={highestBloom}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🌱 Recently Planted"
            subtitle="Fresh additions to your Grove."
            stories={recentlyPlanted}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="📚 Books"
            stories={media("Book")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="💥 Comics"
            stories={media("Comic")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="📝 Fanfiction"
            stories={media("Fanfiction")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🎬 Movies"
            stories={media("Movie")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="📺 TV Series"
            stories={media("TV Series")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🌸 Anime"
            stories={media("Anime")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🎮 Games"
            stories={media("Game")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🎵 Music"
            stories={media("Music")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="🎙 Podcasts"
            stories={media("Podcast")}
            onStoryClick={openStory}
          />

          <DiscoverSection
            title="✨ Fantasy"
            stories={genre("Fantasy")}
            onStoryClick={openStory}
          />

        </>
      )}

    </AppLayout>
  );
}