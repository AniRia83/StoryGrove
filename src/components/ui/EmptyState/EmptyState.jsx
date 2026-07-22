import "./EmptyState.css";

export default function EmptyState({
  icon = "🌱",
  title,
  description,
  children,
}) {
  return (
    <section className="empty-state">

      <div className="empty-state__icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      {children && (
        <div className="empty-state__actions">
          {children}
        </div>
      )}

    </section>
  );
}