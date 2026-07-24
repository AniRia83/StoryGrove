export function createTimelineEvent(
  type,
  message
) {
  return {
    id: crypto.randomUUID(),

    type,

    message,

    createdAt:
      new Date().toISOString(),
  };
}