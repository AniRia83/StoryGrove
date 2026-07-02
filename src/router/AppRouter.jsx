import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Library from "../pages/Library";
import Collection from "../pages/Collection";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/library" element={<Library />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}