import "./QuickActions.css";

import Section from "../../../ui/Section";
import Button from "../../../ui/Button";

import { useNavigate } from "react-router-dom";

export default function QuickActions({
  onPlantStory,
}) {
  const navigate = useNavigate();

  return (
    <Section
      title="Continue Growing"
      icon="🌿"
    >
      <div className="quick-actions">
        <Button
          onClick={onPlantStory}
        >
          🌱 Plant a Story
        </Button>

        <Button
          variant="secondary"
          onClick={() => navigate("/library")}
        >
          📚 Visit Library
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate("/discover")}
        >
          ✨ Wander
        </Button>
      </div>
    </Section>
  );
}