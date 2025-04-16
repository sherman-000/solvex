import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";
import '@fontsource/geist-sans';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
