import { defineConfig } from "oxfmt"

export default defineConfig({
  printWidth: 80,
  semi: false,
  astro: true,
  sortPackageJson: false,
  sortImports: {
    newlinesBetween: true,
  },
  sortTailwindcss: {
    stylesheet: "./src/styles/globals.css",
  },
  ignorePatterns: ["dist/**", ".astro/**"],
})
