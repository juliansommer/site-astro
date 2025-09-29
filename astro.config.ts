import react from "@astrojs/react"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests",
      ],
    },
  },
  site: "https://julians.au",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    experimentalStaticHeaders: true,
  }),
  integrations: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
})
