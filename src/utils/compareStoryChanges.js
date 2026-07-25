import { createTimelineEvent } from "./timelineUtils";

const journeyLabels = {
  planning: "🌱 Planning",
  growing: "🌿 Growing",
  completed: "🌸 Bloomed",
  paused: "🍂 Resting",
  abandoned: "🪵 Abandoned",
};

export function compareStoryChanges(oldStory, newStory) {
  const events = [];

  // Progress
  if (
    oldStory.currentProgress !==
      newStory.currentProgress ||
    oldStory.totalProgress !==
      newStory.totalProgress
  ) {
    events.push(
      createTimelineEvent(
        "progress",
        `Progress updated (${newStory.currentProgress}/${newStory.totalProgress})`
      )
    );
  }

  // Journey
  if (oldStory.journey !== newStory.journey) {
    events.push(
      createTimelineEvent(
        "journey",
        `Journey changed from ${
          journeyLabels[oldStory.journey] ||
          oldStory.journey
        } to ${
          journeyLabels[newStory.journey] ||
          newStory.journey
        }`
      )
    );
  }

  // Bloom
  if (oldStory.bloom !== newStory.bloom) {
    events.push(
      createTimelineEvent(
        "bloom",
        `Bloom changed from ${oldStory.bloom} → ${newStory.bloom}`
      )
    );
  }

  // Reflection
  if (
    oldStory.reflections !==
    newStory.reflections
  ) {
    events.push(
      createTimelineEvent(
        "reflection",
        "Reflection updated"
      )
    );
  }

  // Firefly
  if (
    oldStory.firefly !==
    newStory.firefly
  ) {
    events.push(
      createTimelineEvent(
        "firefly",
        "Firefly captured ✨"
      )
    );
  }

  // Cover
  if (oldStory.cover !== newStory.cover) {
    events.push(
      createTimelineEvent(
        "cover",
        "Cover artwork changed"
      )
    );
  }

  // Grove
  if (
    oldStory.collectionId !==
    newStory.collectionId
  ) {
    events.push(
      createTimelineEvent(
        "grove",
        "Moved to another Grove"
      )
    );
  }

  // Genre
  if (oldStory.genre !== newStory.genre) {
    events.push(
      createTimelineEvent(
        "genre",
        `Genre updated to ${newStory.genre || "None"}`
      )
    );
  }

  return events;
}