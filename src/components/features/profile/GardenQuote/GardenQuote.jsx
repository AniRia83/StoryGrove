import "./GardenQuote.css";

export default function GardenQuote({
  stories,
}) {
  let quote = "";

  if (stories.length === 0) {
    quote =
      "Every great forest begins with a single seed.";
  } else {
    const bloomed = stories.filter(
      (story) => story.journey === "bloomed"
    ).length;

    const growing = stories.filter(
      (story) => story.journey === "growing"
    ).length;

    const averageBloom =
      stories.reduce(
        (sum, story) =>
          sum + Number(story.bloom || 0),
        0
      ) / stories.length;

    if (stories.length >= 50) {
      quote =
        "Your grove has become a forest of unforgettable stories.";
    }

    else if (bloomed >= 10) {
      quote =
        "Your grove is blooming beautifully. Every finished story has become another flower.";
    }

    else if (averageBloom >= 8) {
      quote =
        "You don't just finish stories—you cherish them.";
    }

    else if (growing >= 5) {
      quote =
        "Some stories are still reaching toward the sunlight.";
    }

    else {
      quote =
        "Every page turned grows another branch in your grove.";
    }
  }

  return (
    <section className="garden-quote">

      <div className="garden-quote__card">

        <span className="garden-quote__icon">
          🌿
        </span>

        <p className="garden-quote__text">
          "{quote}"
        </p>

        <span className="garden-quote__brand">
          — StoryGrove
        </span>

      </div>

    </section>
  );
}