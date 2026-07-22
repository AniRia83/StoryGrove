import "./Section.css";

export default function Section({
  title,
  icon,
  action,
  children,
}) {
  return (
    <section className="sg-section">

      <div className="sg-section__header">

        <div className="sg-section__title">

          {icon && (
            <span className="sg-section__icon">
              {icon}
            </span>
          )}

          <h2>{title}</h2>

        </div>

        {action && (
          <div className="sg-section__action">
            {action}
          </div>
        )}

      </div>

      <div className="sg-section__content">
        {children}
      </div>

    </section>
  );
}