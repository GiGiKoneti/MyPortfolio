import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research.html"),
        projects: resolve(__dirname, "projects.html"),
        blog: resolve(__dirname, "blog.html"),
        blogPost: resolve(__dirname, "blog/agentic-ai.html"),
        podcast: resolve(__dirname, "podcast.html"),
        openSource: resolve(__dirname, "open-source.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
