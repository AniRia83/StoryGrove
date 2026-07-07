import "./ContinueReadingCard.css";

export default function ContinueReadingCard() {
  return (
    <div className="continue-card">
      <div className="continue-card__cover">
        📖
      </div>

      <div className="continue-card__content">
        <h3>The Hobbit</h3>

        <p>J.R.R. Tolkien</p>

        <div className="continue-card__progress">
          <div
            className="continue-card__progress-fill"
            style={{ width: "82%" }}
          />
        </div>

        <span>82% complete</span>
      </div>
    </div>
  );
}