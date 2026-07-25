import "./StoryHeroActions.css";

import Button from "../../../ui/Button";

export default function StoryHeroActions({
  onEdit,
  onProgress,
  onFavourite,
}) {
  return (
    <div className="story-hero-actions">

      <Button
        variant="secondary"
        onClick={onEdit}
      >
        ✏️ Edit Story
      </Button>

      <Button
        onClick={onProgress}
      >
        📖 Update Progress
      </Button>

      <Button
        variant="outline"
        onClick={onFavourite}
      >
        ❤️ Favourite
      </Button>

    </div>
  );
}