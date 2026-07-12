import { useParams } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import {
  StoryHero,
  StoryInfoGrid,
  ReflectionCard,
  FireflyCard,
  StoryTimeline,
} from "../components/features/story";

import { useStory } from "../context/StoryContext";

export default function StoryDetails() {
  const { id } = useParams();

  const { getStoryById } = useStory();

  const story = getStoryById(id);

  if (!story) {
    return (
      <AppLayout
        title="Story not found"
        subtitle="This story doesn't seem to exist."
      />
    );
  }

  return (
    <AppLayout>

      <StoryHero story={story} />

      <StoryInfoGrid story={story} />

      <ReflectionCard
        reflection={story.reflections}
      />

      <FireflyCard
        firefly={story.firefly}
      />

      <StoryTimeline />

    </AppLayout>
  );
}