export function getCollectionStats(
  collection,
  stories
) {
  const groveStories = stories.filter(
    (story) =>
      story.collectionId === collection.id
  );

  const totalStories =
    groveStories.length;

  const completedStories =
    groveStories.filter(
      (story) => story.journey === "completed"
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

  const currentProgress =
    groveStories.reduce(
      (sum, story) =>
        sum +
        Number(story.currentProgress || 0),
      0
    );

  const totalProgress =
    groveStories.reduce(
      (sum, story) =>
        sum +
        Number(story.totalProgress || 0),
      0
    );

  const progressPercent =
    totalProgress > 0
      ? Math.round(
          (currentProgress /
            totalProgress) *
            100
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
    completedStories,
    averageBloom,
    currentProgress,
    totalProgress,
    progressPercent,
    lastUpdated,
  };
}