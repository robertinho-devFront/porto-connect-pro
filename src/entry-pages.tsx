// Point d'entrée du build statique (GitHub Pages) : rendu 100 % navigateur, sans serveur.
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();
const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
