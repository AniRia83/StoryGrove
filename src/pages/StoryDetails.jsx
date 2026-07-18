import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import {
  StoryHero,
  StoryInfoGrid,
  ReflectionCard,
  FireflyCard,
  StoryTimeline,
} from "../components/features/story";

import Button from "../components/ui/Button";

import EditStoryModal from "../components/features/story/EditStoryModal/EditStoryModal";

import { useStory } from "../context/StoryContext";

export default function StoryDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getStoryById,
    deleteStory,
  } = useStory();

  const story = getStoryById(id);

  const [showEditModal, setShowEditModal] =
    useState(false);

  if (!story) {
    return (
      <AppLayout
        title="Story not found"
        subtitle="This story doesn't seem to exist."
      />
    );
  }

  function handleDelete() {
    const confirmed = window.confirm(
      "🌱 Uproot this story?\n\nThis action cannot be undone."
    );

    if (!confirmed) return;

    deleteStory(story.id);

    navigate("/library");
  }

  return (
    <AppLayout>
      <StoryHero story={story} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <Button
          variant="secondary"
          onClick={() =>
            setShowEditModal(true)
          }
        >
          ✏️ Edit Story
        </Button>

        <Button
          variant="outline"
          onClick={handleDelete}
        >
          🗑 Delete Story
        </Button>
      </div>

      <StoryInfoGrid story={story} />

      <ReflectionCard story={story} />

      <FireflyCard story={story} />

      <StoryTimeline story={story} />

      <EditStoryModal
        isOpen={showEditModal}
        onClose={() =>
          setShowEditModal(false)
        }
        story={story}
      />
    </AppLayout>
  );
}