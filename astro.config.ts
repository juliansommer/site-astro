import preact from "@astrojs/preact"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  adapter: vercel({
    experimentalStaticHeaders: true,
  }),
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
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [tailwindcss()],
  },
})
