import "./Section.css";

export default function Section({
  title,
  children,
}) {
  return (
    <section className="sg-section">
      <div className="sg-section__header">
        <h2>{title}</h2>
      </div>

      <div className="sg-section__content">
        {children}
      </div>
    </section>
  );
}