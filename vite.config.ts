
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), "VITE_");

export default defineConfig({
  base: env.VITE_PRERENDER ? "/Web-Osu-Mania/" : "/",
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: env.VITE_PRERENDER === "true",
        crawlLinks: false,
      },
    }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
