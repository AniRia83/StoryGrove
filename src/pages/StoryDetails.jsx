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
import { useCollection } from "../context/CollectionContext";

export default function StoryDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getStoryById,
    deleteStory,
    updateStory,
  } = useStory();

  const { getCollectionById } =
    useCollection();

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

  const collection =
    story.collectionId
      ? getCollectionById(
          story.collectionId
        )
      : null;

  function handleJourneyChange(
    newJourney
  ) {
    updateStory(story.id, {
      journey: newJourney,
    });
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

      <StoryHero
        story={story}
        collection={collection}
        onJourneyChange={
          handleJourneyChange
        }
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
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