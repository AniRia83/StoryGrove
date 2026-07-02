import "./AppLayout.css";
import Navbar from "../../navigation/Navbar/Navbar";

export default function AppLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="app-layout">
      <div className="app-layout__content">

        <Navbar />

        <main>

          {title && (
            <header className="page-header">
              <h1>{title}</h1>

              {subtitle && (
                <p>{subtitle}</p>
              )}
            </header>
          )}

          {children}

        </main>

      </div>
    </div>
  );
}