import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import { StoryProvider } from "./context/StoryContext";
import { CollectionProvider } from "./context/CollectionContext";
import { SettingsProvider } from "./context/SettingsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <SettingsProvider>

      <CollectionProvider>

        <StoryProvider>

          <App />

        </StoryProvider>

      </CollectionProvider>

    </SettingsProvider>

  </StrictMode>
);