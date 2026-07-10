import "./Hero.css";

import { useNavigate } from "react-router-dom";

import Button from "../../../ui/Button";

export default function Hero({
  onPlantStoryClick,
}) {
  
const navigate = useNavigate();

  return (
    <section className="hero">
      <p className="hero__eyebrow">
        The Grove
      </p>

      <h1 className="hero__title">
        Welcome back, Ani 👋
      </h1>

      <div className="hero__actions">
        <Button onClick={onPlantStoryClick}>
  🌱 Plant a Story
        </Button>

        <Button
          variant="secondary"
          onClick={() => navigate("/library")}
        >
          📚 My Grove
        </Button>
      </div>
      
    </section>
  );
}