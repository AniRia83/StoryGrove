import "./GardenQuote.css";

import { useMemo, useState } from "react";

const quotes = [
  {
    text: "Every page turned grows another branch in your grove.",
    author: "StoryGrove",
  },
  {
    text: "Some stories stay with us long after the final chapter.",
    author: "StoryGrove",
  },
  {
    text: "A quiet evening, a warm drink, and a good story can change everything.",
    author: "StoryGrove",
  },
  {
    text: "Every story you finish becomes another flower in your forest.",
    author: "StoryGrove",
  },
  {
    text: "The most beautiful gardens are grown one seed at a time.",
    author: "StoryGrove",
  },
  {
    text: "Books remember the versions of ourselves that read them.",
    author: "StoryGrove",
  },
  {
    text: "Stories bloom where curiosity is planted.",
    author: "StoryGrove",
  },
  {
    text: "Some journeys begin with a single sentence.",
    author: "StoryGrove",
  },
];

export default function GardenQuote() {

  const randomQuote = useMemo(() => {

    return quotes[
      Math.floor(Math.random() * quotes.length)
    ];

  }, []);

  const [quote, setQuote] = useState(randomQuote);

  function generateQuote() {

    let next = quote;

    while (next === quote) {

      next =
        quotes[
          Math.floor(
            Math.random() * quotes.length
          )
        ];

    }

    setQuote(next);

  }

  return (

    <section className="garden-quote">

      <div className="garden-quote__card">

        <div className="garden-quote__leaf">

          🌿

        </div>

        <blockquote className="garden-quote__text">

          “{quote.text}”

        </blockquote>

        <p className="garden-quote__author">

          — {quote.author}

        </p>

        <button
          className="garden-quote__button"
          onClick={generateQuote}
        >

          🍃 Whisper Again

        </button>

      </div>

    </section>

  );

}