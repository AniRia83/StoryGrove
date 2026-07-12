import "./StoryTimeline.css";

export default function StoryTimeline() {
  const timeline = [
    {
      icon: "🌱",
      title: "Story planted",
      date: "12 Jul 2026",
    },
    {
      icon: "🌿",
      title: "Journey changed to Started",
      date: "13 Jul 2026",
    },
    {
      icon: "🌳",
      title: "Journey changed to Growing",
      date: "18 Jul 2026",
    },
  ];

  return (
    <section className="story-timeline">

      <h2>🌲 Story Timeline</h2>

      <div className="story-timeline__list">

        {timeline.map((event, index) => (

          <div
            key={index}
            className="story-timeline__item"
          >

            <div className="story-timeline__icon">
              {event.icon}
            </div>

            <div>

              <h3>{event.title}</h3>

              <p>{event.date}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}