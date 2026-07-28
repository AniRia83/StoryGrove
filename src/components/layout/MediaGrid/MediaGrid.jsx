import "./MediaGrid.css";

export default function MediaGrid({
  children,
  compact = false,
}) {
  return (
    <div
      className={
        compact
          ? "media-grid compact"
          : "media-grid"
      }
    >
      {children}
    </div>
  );
}