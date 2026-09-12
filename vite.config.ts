import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// must match the repository name. Override with VITE_BASE_PATH if the repo
// is renamed or the site moves to a custom domain (use "/" for a custom domain).
const base = process.env.VITE_BASE_PATH ?? "/corte-del-baffa/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: "es2020",
    sourcemap: false,
  },
});
