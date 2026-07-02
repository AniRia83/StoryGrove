import "./DesignSystem.css";

import AppLayout from "../components/layout/AppLayout/AppLayout";
import Button from "../components/ui/Button/Button";
import Card from "../components/ui/Card/Card";

export default function DesignSystem() {
  return (
    <AppLayout>
      <main className="design-system">
        <h1>StoryGrove Design System 🌿</h1>

        <p className="design-system__description">
          Every reusable component begins here.
        </p>

        {/* Buttons Section */}
        <section className="design-system__section">
          <h2>Buttons</h2>

          <div className="design-system__button-group">
            <Button>Add Story</Button>

            <Button variant="secondary">
              Your Shelves
            </Button>

            <Button variant="outline">
              Discover
            </Button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="design-system__section">
          <h2>Cards</h2>

          <Card>
            <h3>The Hobbit</h3>

            <p>J.R.R. Tolkien</p>

            <p>Fantasy • Adventure</p>
          </Card>
        </section>
      </main>
    </AppLayout>
  );
}