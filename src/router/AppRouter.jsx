import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Library from "../pages/Library";
import Collection from "../pages/Collection";
import CollectionDetails from "../pages/CollectionDetails";
import Profile from "../pages/Profile";
import StoryDetails from "../pages/StoryDetails";
import Settings from "../pages/Settings";
import ProfileSettings from "../pages/ProfileSettings";
import Preferences from "../pages/Preferences";
import ThemeSettings from "../pages/ThemeSettings";
import ImportExport from "../pages/ImportExport";
import AboutStoryGrovePage from "../pages/AboutStoryGrove";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/discover"
          element={<Discover />}
        />

        <Route
          path="/library"
          element={<Library />}
        />

        <Route
          path="/collections"
          element={<Collection />}
        />

        <Route
          path="/collections/:id"
          element={<CollectionDetails />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/story/:id"
          element={<StoryDetails />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/settings/profile"
          element={<ProfileSettings />}
        />

        <Route
          path="/settings/preferences"
          element={<Preferences />}
        />

        <Route
  path="/settings/theme"
  element={<ThemeSettings />}
/>

        <Route
          path="/settings/import-export"
          element={<ImportExport />}
        />

        <Route
  path="/settings/about"
  element={<AboutStoryGrovePage />}
/>

      </Routes>
    </BrowserRouter>
  );
}