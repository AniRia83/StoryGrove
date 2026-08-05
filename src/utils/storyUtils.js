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

export function getJourney(story) {
  const current = Number(story.currentProgress || 0);
  const total = Number(story.totalProgress || 0);

  switch (story.mediaType) {
    case "Movie":
      if (total <= 0) return "planning";
      return current >= total
        ? "bloomed"
        : current > 0
        ? "growing"
        : "planning";

    case "Game":
      if (current <= 0) return "planning";
      if (current >= 100) return "bloomed";
      return "growing";

    default:
      if (total <= 0) return "planning";

      if (current <= 0) return "planning";

      if (current >= total) return "bloomed";

      return "growing";
  }
}

export function isCompleted(story) {
  return getProgressPercentage(story) >= 100;
}