import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
