import "./ContinueReading.css";
import Section from "../../../ui/Section";

export default function ContinueReading() {
  return (
  <Section title="Continue Reading">
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
  </Section>
  );
}