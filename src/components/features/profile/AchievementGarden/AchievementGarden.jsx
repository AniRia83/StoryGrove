import "./AchievementGarden.css";

import Section from "../../../ui/Section";

export default function AchievementGarden({
  stories,
}) {

  const averageBloom =
    stories.length > 0
      ? stories.reduce(
          (sum, story) =>
            sum + Number(story.bloom || 0),
          0
        ) / stories.length
      : 0;

  const reflections = stories.filter(
    (story) =>
      story.reflections &&
      story.reflections.trim() !== ""
  ).length;

  const fireflies = stories.filter(
    (story) =>
      story.firefly &&
      story.firefly.trim() !== ""
  ).length;

  const bloomedStories = stories.filter(
    (story) =>
      story.journey === "bloomed"
  ).length;

  const mediaTypes =
    new Set(
      stories.map(
        (story) => story.mediaType
      )
    ).size;

  const achievements = [

    {
      icon:"🌱",
      title:"First Seed",
      description:"Plant your first story.",
      progress:stories.length,
      target:1,
    },

    {
      icon:"🌿",
      title:"Growing Grove",
      description:"Plant 10 stories.",
      progress:stories.length,
      target:10,
    },

    {
      icon:"🌳",
      title:"Forest Keeper",
      description:"Plant 50 stories.",
      progress:stories.length,
      target:50,
    },

    {
      icon:"🌸",
      title:"Bloom Master",
      description:"Bloom 10 stories.",
      progress:bloomedStories,
      target:10,
    },

    {
      icon:"✨",
      title:"Golden Bloom",
      description:"Reach an average Bloom of 8.",
      progress:averageBloom,
      target:8,
      decimal:true,
    },

    {
      icon:"📚",
      title:"Collector",
      description:"Collect every media type.",
      progress:mediaTypes,
      target:10,
    },

    {
      icon:"🍂",
      title:"Reflection Keeper",
      description:"Write 20 reflections.",
      progress:reflections,
      target:20,
    },

    {
      icon:"🧚",
      title:"Firefly Whisperer",
      description:"Save 50 Fireflies.",
      progress:fireflies,
      target:50,
    },

  ];

  return (

    <Section
      title="Garden Milestones"
      icon="🏆"
    >

      <div className="achievement-garden__grid">

        {achievements.map((achievement)=>{

          const unlocked =
            achievement.progress >= achievement.target;

          const percentage =
            Math.min(
              (achievement.progress /
                achievement.target) * 100,
              100
            );

          return(

            <article
              key={achievement.title}
              className={`achievement-card ${
                unlocked
                  ? "achievement-card--unlocked"
                  : "achievement-card--locked"
              }`}
            >

              <span className="achievement-card__icon">

                {achievement.icon}

              </span>

              <h3>

                {achievement.title}

              </h3>

              <p>

                {achievement.description}

              </p>

              <div className="achievement-progress">

                <div
                  className="achievement-progress__fill"
                  style={{
                    width:`${percentage}%`,
                  }}
                />

              </div>

              <div className="achievement-card__footer">

                <span>

                  {achievement.decimal
                    ? achievement.progress.toFixed(1)
                    : achievement.progress}

                  {" / "}

                  {achievement.target}

                </span>

                <span>

                  {unlocked
                    ? "🌸 Bloomed"
                    : "🌱 Growing"}

                </span>

              </div>

            </article>

          );

        })}

      </div>

    </Section>

  );

}