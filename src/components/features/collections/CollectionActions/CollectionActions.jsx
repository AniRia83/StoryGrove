import "./CollectionActions.css";

export default function CollectionActions({
  onEdit,
  onFavourite,
  onDelete,
  isFavourite = false,
}) {
  return (
    <div className="collection-actions">

      <button
        type="button"
        onClick={onEdit}
      >
        ✏️ Edit Grove
      </button>

      <button
        type="button"
        onClick={onFavourite}
      >
        {isFavourite
          ? "💛 Remove Favourite"
          : "⭐ Favourite Grove"}
      </button>

      <button
        type="button"
        className="collection-actions__danger"
        onClick={onDelete}
      >
        🗑 Delete Grove
      </button>

    </div>
  );
}