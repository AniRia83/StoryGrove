import "./AboutStoryGrove.css";

export default function AboutStoryGrove() {
  return (
    <section className="about-storygrove">

      <div className="about-card">

        <div className="about-logo">
          🌳
        </div>

        <h2>StoryGrove</h2>

        <p className="version">
          Version 1.0.0
        </p>

        <p className="description">
          StoryGrove is your personal reading sanctuary —
          a peaceful place where every story becomes a living
          memory. Organize books, manga, anime, fanfiction,
          films, games, podcasts, music, and more inside
          your own magical Grove.
        </p>

        <div className="about-divider" />

        <div className="about-section">

          <h3>✨ Features</h3>

          <ul>
            <li>📚 Track every story you enjoy</li>
            <li>🌳 Organize beautiful custom Groves</li>
            <li>🌸 Bloom Rating System</li>
            <li>🔥 Firefly Memories</li>
            <li>📈 Reading Insights & Statistics</li>
            <li>🌙 Light & Dark Themes</li>
            <li>☁️ Cloud Sync (coming soon)</li>
          </ul>

        </div>

        <div className="about-divider" />

        <div className="about-section">

          <h3>🍃 Cultivated by</h3>

          <p>
            <strong>BerryByte Studio</strong>
          </p>

        </div>

        <div className="about-divider" />

        <div className="about-footer">

          <p>
            © 2026 BerryByte Studio
            All rights reserved.
          </p>

          <p>
            Made with ❤️ for readers who believe every story
            deserves a place to grow.
          </p>

        </div>

      </div>

    </section>
  );
}