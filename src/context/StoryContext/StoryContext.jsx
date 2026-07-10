import { createContext, useContext, useState } from "react";

const StoryContext = createContext();

export function StoryProvider({ children }) {
  const [stories, setStories] = useState([]);

  const plantStory = (story) => {
    setStories((prevStories) => [
      story,
      ...prevStories,
    ]);
  };

  return (
    <StoryContext.Provider
      value={{
        stories,
        plantStory,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  return useContext(StoryContext);
}