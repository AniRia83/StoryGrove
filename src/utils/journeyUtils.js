export function getJourney(story) {
  const current = Number(story.currentProgress || 0);
  const total = Number(story.totalProgress || 0);

  switch (story.mediaType) {
    case "Movie":
      return current >= 1
        ? "bloomed"
        : "planning";

    case "Game":
      if (current <= 0) return "planning";
      if (current >= 100) return "bloomed";
      return "growing";

    default:
      if (total <= 0) return story.journey;

      if (current <= 0)
        return "planning";

      if (current >= total)
        return "bloomed";

      return "growing";
  }
}