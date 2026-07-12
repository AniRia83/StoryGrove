import { createContext, useContext, useEffect, useState } from "react";

const StoryContext = createContext();

export function StoryProvider({ children }) {
  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem("storygrove-stories");

    return savedStories ? JSON.parse(savedStories) : [];
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
    };

    setStories((prevStories) => [
      newStory,
      ...prevStories,
    ]);
  };

  return (
    <StoryContext.Provider
      value={{
        stories,
        plantStory,

        getStoryById: (id) =>
          stories.find((story) => story.id === id),
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  return useContext(StoryContext);
}