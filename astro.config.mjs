import { defineConfig } from "astro/config";

const site = process.env.SITE || "https://pazuzzu.github.io";
const base = process.env.BASE || "/";

export default defineConfig({
  site,
  base,
  output: "static"
});
