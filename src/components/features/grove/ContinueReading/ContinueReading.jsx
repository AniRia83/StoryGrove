import "./ContinueReading.css";

export default function ContinueReading() {
  return (
    <section className="continue-reading">
      <h2 className="continue-reading__title">
        Continue Reading
      </h2>

      <div className="continue-reading__card">
        <p className="book-title">
          The Hobbit
        </p>

        <p className="book-author">
          J.R.R. Tolkien
        </p>

        <p className="book-progress">
          82% complete
        </p>
      </div>
    </section>
  );
}