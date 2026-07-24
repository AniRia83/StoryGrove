import { createTimelineEvent }
  from "./timelineUtils";

export function compareStoryChanges(
  oldStory,
  newStory
) {
  const events = [];

  if (
    oldStory.bloom !== newStory.bloom
  ) {
    events.push(
      createTimelineEvent(
        "bloom",
        `Bloom changed from ${oldStory.bloom} → ${newStory.bloom}`
      )
    );
  }

  if (
    oldStory.journey !== newStory.journey
  ) {
    events.push(
      createTimelineEvent(
        "journey",
        `Journey changed to ${newStory.journey}`
      )
    );
  }

  if (
    oldStory.currentProgress !==
    newStory.currentProgress
  ) {
    events.push(
      createTimelineEvent(
        "progress",
        `Progress updated to ${newStory.currentProgress}/${newStory.totalProgress}`
      )
    );
  }

  return events;
}