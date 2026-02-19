import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Geofin APP",
        short_name: "Geofin APP",
        description: "Geofin APP",
        theme_color: "#162842",
        background_color: "#162842",
        display: "standalone",
        start_url: "/",

        screenshots: [
          {
            src: "screenshots/desktop.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/mobile.png",
            sizes: "390x844",
            type: "image/png"
          }
        ],

        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ]
});
