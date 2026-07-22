import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout/AppLayout";

import CollectionBanner from "../components/features/collections/CollectionBanner";
import CollectionStats from "../components/features/collections/CollectionStats";
import CollectionStoryGrid from "../components/features/collections/CollectionStoryGrid";
import EditCollectionModal from "../components/features/collections/EditCollectionModal";
import DeleteCollectionModal from "../components/features/collections/DeleteCollectionModal";

import EmptyState from "../components/ui/EmptyState";

import { useCollection } from "../context/CollectionContext";
import { useStory } from "../context/StoryContext";

export default function CollectionDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const {
    getCollectionById,
    toggleFavourite,
    deleteCollection,
  } = useCollection();

  const {
  stories,
  removeCollectionFromStories,
} = useStory();

  const collection = getCollectionById(id);

  if (!collection) {
    return (
      <AppLayout>
        <h2>🌳 Grove not found</h2>

        <p>This Grove doesn't exist.</p>
      </AppLayout>
    );
  }

  const collectionStories = stories.filter(
    (story) =>
      story.collectionId === collection.id
  );

  const averageBloom =
    collectionStories.length > 0
      ? (
          collectionStories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / collectionStories.length
        ).toFixed(1)
      : "0.0";

  const growingCount = collectionStories.filter(
    (story) =>
      story.journey === "growing" ||
      story.journey === "started"
  ).length;

  const finishedCount = collectionStories.filter(
    (story) =>
      story.journey === "finished"
  ).length;

  function handleDeleteCollection() {
    removeCollectionFromStories(
      collection.id
    );

    deleteCollection(collection.id);

    navigate("/collections");
  }

  return (
    <AppLayout>
      <CollectionBanner
        collection={collection}
        storyCount={collectionStories.length}
        averageBloom={averageBloom}
        onEdit={() =>
          setShowEditModal(true)
        }
        onFavourite={() =>
          toggleFavourite(collection.id)
        }
        onDelete={() =>
          setShowDeleteModal(true)
        }
      />

      <CollectionStats
        totalStories={collectionStories.length}
        averageBloom={averageBloom}
        growingCount={growingCount}
        finishedCount={finishedCount}
      />

      {collectionStories.length === 0 ? (
        <EmptyState
          icon="🌱"
          title="This Grove is waiting."
          description="Plant stories into this Grove to watch it grow."
        />
      ) : (
        <CollectionStoryGrid
          stories={collectionStories}
        />
      )}

      <EditCollectionModal
        isOpen={showEditModal}
        onClose={() =>
          setShowEditModal(false)
        }
        collection={collection}
      />

      <DeleteCollectionModal
        isOpen={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onConfirm={handleDeleteCollection}
        collection={collection}
      />
    </AppLayout>
  );
}