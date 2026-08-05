import { getProgressPercentage } from "./storyUtils";

export function getCollectionStats(
  collection,
  stories
) {
  const groveStories = stories.filter(
    (story) =>
      story.collectionId === collection.id
  );

  const totalStories = groveStories.length;

  const growingStories = groveStories.filter(
    (story) => story.journey === "growing"
  ).length;

  const completedStories = groveStories.filter(
    (story) => story.journey === "bloomed"
  ).length;

  const averageBloom =
    totalStories > 0
      ? (
          groveStories.reduce(
            (sum, story) =>
              sum + Number(story.bloom || 0),
            0
          ) / totalStories
        ).toFixed(1)
      : 0;

  const progressPercent =
    totalStories > 0
      ? Math.round(
          groveStories.reduce(
            (sum, story) =>
              sum + getProgressPercentage(story),
            0
          ) / totalStories
        )
      : 0;

  const lastUpdated =
    groveStories.length > 0
      ? groveStories
          .slice()
          .sort(
            (a, b) =>
              new Date(b.updatedAt) -
              new Date(a.updatedAt)
          )[0].updatedAt
      : collection.updatedAt;

  return {
    totalStories,
    growingStories,
    completedStories,
    averageBloom,
    progressPercent,
    lastUpdated,
  };
}