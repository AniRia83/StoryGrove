import "./Hero.css";
import Button from "../../../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">
        The Grove
      </p>

      <h1 className="hero__title">
        Welcome back, Ani 👋
      </h1>

      <div className="hero__actions">
        <Button>🌱 Plant a Story</Button>

        <Button variant="secondary">
          📚 My Grove
        </Button>
      </div>
    </section>
  );
}