import "./Hero.css";

import { useNavigate } from "react-router-dom";

export default function Hero({
  onPlantStoryClick,
}) {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <p className="hero__eyebrow">
        THE GROVE
      </p>

      <h1 className="hero__title">
        Continue your reading journey.
      </h1>

      <p className="hero__subtitle">
        Every story you plant becomes another tree in your forest.
      </p>

      <div className="hero__actions">

        <button
          className="hero__button hero__button--primary"
          onClick={onPlantStoryClick}
        >
          🌱 Plant a Story
        </button>

        <button
          className="hero__button hero__button--secondary"
          onClick={() => navigate("/library")}
        >
          📚 My Grove
        </button>

      </div>

    </section>
  );
}