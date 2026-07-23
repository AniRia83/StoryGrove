import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

  const plantStory = (story) => {
    const newStory = {
      ...story,
      id: crypto.randomUUID(),
      plantedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      collectionId: story.collectionId || null,
    };

    setStories((prevStories) => [
      newStory,
      ...prevStories,
    ]);
  };

  const updateStory = (id, updates) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id
          ? {
              ...story,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : story
      )
    );
  };

  const deleteStory = (id) => {
    setStories((prevStories) =>
      prevStories.filter(
        (story) => story.id !== id
      )
    );
  };

  const removeCollectionFromStories = (
  collectionId
) => {
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
};

  const getStoryById = (id) =>
    stories.find((story) => story.id === id);

  const getStoriesByCollection = (
    collectionId
  ) =>
    stories.filter(
      (story) =>
        story.collectionId === collectionId
    );

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