import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__logo">
          StoryGrove 🌿
        </NavLink>

        <p className="navbar__tagline">
          Every path leads to another story.
        </p>
      </div>

      <nav className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}