// Configuration dédiée au build statique pour GitHub Pages (SPA, sans serveur).
// Utilisée par `npm run build:pages`. La config par défaut (vite.config.ts) reste inchangée.
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Pour un "project site" (https://user.github.io/mon-repo/), définir PAGES_BASE="/mon-repo/".
const base = process.env["PAGES_BASE"] ?? "/";

export default defineConfig({
  base,
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
});
