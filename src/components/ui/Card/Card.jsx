import "./Card.css";

export default function Card({ children }) {
  return (
    <div className="card hover-lift">
      {children}
    </div>
  );
}