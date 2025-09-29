import eslintPluginAstro from "eslint-plugin-astro"
import { defineConfig } from "eslint/config"

export default defineConfig(
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
)
