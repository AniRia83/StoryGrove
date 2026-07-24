export function getProgressPercentage(story) {
  const current = Number(story.currentProgress || 0);
  const total = Number(story.totalProgress || 0);

  switch (story.mediaType) {
    case "Movie":
      return current >= 1 ? 100 : 0;

    case "Game":
      return Math.min(Math.round(current), 100);

    default:
      if (total <= 0) return 0;

      return Math.min(
        Math.round((current / total) * 100),
        100
      );
  }
}