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
        blogPost2: resolve(__dirname, "blog/unified-latents.html"),
        blogPost3: resolve(__dirname, "blog/probabilistic-forecasting.html"),
        blogPost4: resolve(__dirname, "blog/rethinking-attention.html"),
        blogPost5: resolve(__dirname, "blog/evaluating-llms.html"),
        podcast: resolve(__dirname, "podcast.html"),
        openSource: resolve(__dirname, "open-source.html"),
        contact: resolve(__dirname, "contact.html"),
        courses: resolve(__dirname, "courses.html"),
      },
    },
  },
});
