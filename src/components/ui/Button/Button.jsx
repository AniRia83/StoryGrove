import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
}) {
  return (
    <button
      className={`sg-button ${variant} ${size} hover-lift`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}