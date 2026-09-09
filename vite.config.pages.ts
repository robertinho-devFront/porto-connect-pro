// Configuration dédiée au build statique pour GitHub Pages.
// Utilisée par `npm run build:pages` — la config par défaut (vite.config.ts) reste inchangée.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Pour un "project site" (https://user.github.io/mon-repo/), définir PAGES_BASE="/mon-repo/".
const base = process.env["PAGES_BASE"] ?? "/";

export default defineConfig({
  vite: { base },
  nitro: { preset: "static" },
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/mentions-legales" }, { path: "/politique-de-confidentialite" }],
  },
});
