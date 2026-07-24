import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getJourney } from "../../utils/storyUtils";

const StoryContext = createContext();

export function StoryProvider({ children }) {
  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem(
      "storygrove-stories"
    );

    return savedStories
      ? JSON.parse(savedStories)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "storygrove-stories",
      JSON.stringify(stories)
    );
  }, [stories]);

  function plantStory(story) {
    const currentProgress = Number(
      story.currentProgress || 0
    );

    const totalProgress = Number(
      story.totalProgress || 0
    );

    const newStory = {
      ...story,

      id: crypto.randomUUID(),

      plantedAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),

      collectionId:
        story.collectionId || null,

      currentProgress,

      totalProgress,
    };

    newStory.journey =
      getJourney(newStory);

    setStories((prev) => [
      newStory,
      ...prev,
    ]);
  }

  function updateStory(id, updates) {
    setStories((prevStories) =>
      prevStories.map((story) => {
        if (story.id !== id) return story;

        const updatedStory = {
          ...story,
          ...updates,

          currentProgress: Number(
            updates.currentProgress ??
              story.currentProgress ??
              0
          ),

          totalProgress: Number(
            updates.totalProgress ??
              story.totalProgress ??
              0
          ),

          updatedAt:
            new Date().toISOString(),
        };

        updatedStory.journey =
          getJourney(updatedStory);

        return updatedStory;
      })
    );
  }

  function deleteStory(id) {
    setStories((prevStories) =>
      prevStories.filter(
        (story) => story.id !== id
      )
    );
  }

  function removeCollectionFromStories(
    collectionId
  ) {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.collectionId === collectionId
          ? {
              ...story,
              collectionId: null,
            }
          : story
      )
    );
  }

  function getStoryById(id) {
    return stories.find(
      (story) => story.id === id
    );
  }

  function getStoriesByCollection(
    collectionId
  ) {
    return stories.filter(
      (story) =>
        story.collectionId === collectionId
    );
  }

  return (
    <StoryContext.Provider
      value={{
        stories,
        plantStory,
        updateStory,
        deleteStory,
        removeCollectionFromStories,
        getStoryById,
        getStoriesByCollection,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  return useContext(StoryContext);
}