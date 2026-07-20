import { useNavigate } from "react-router-dom";

import "./ContinueReading.css";

import Section from "../../../ui/Section";
import ContinueReadingCard from "../../../cards/ContinueReadingCard";

import { useStory } from "../../../../context/StoryContext";

export default function ContinueReading() {
  const navigate = useNavigate();

  const { stories } = useStory();

  const story =
    stories.find((s) => s.journey === "growing") ||
    stories.find((s) => s.journey === "started") ||
    stories[0];

  if (!story) return null;

  return (
    <Section title="Continue Reading">
      <ContinueReadingCard
        story={story}
        onClick={() => navigate(`/story/${story.id}`)}
      />
    </Section>
  );
}