import eslint from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig(
  {
    ignores: [".astro/**", ".vercel/**", "dist/**"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs["jsx-a11y-recommended"],
)
