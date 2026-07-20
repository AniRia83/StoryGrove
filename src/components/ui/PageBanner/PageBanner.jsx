import "./PageBanner.css";

export default function PageBanner({
  icon,
  title,
  subtitle,
}) {
  return (
    <section className="page-banner">

      <div className="page-banner__content">

        <span className="page-banner__icon">
          {icon}
        </span>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </section>
  );
}