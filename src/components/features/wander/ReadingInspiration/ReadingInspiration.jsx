import "./ReadingInspiration.css";

const quotes = [
  {
    quote:
      "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R. R. Martin",
  },
  {
    quote:
      "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
];

export default function ReadingInspiration() {
  const featured = quotes[0];

  return (
    <section className="reading-inspiration">

      <span className="reading-inspiration__eyebrow">
        ✨ Reading Inspiration
      </span>

      <blockquote>

        “{featured.quote}”

      </blockquote>

      <p className="reading-inspiration__author">
        — {featured.author}
      </p>

    </section>
  );
}