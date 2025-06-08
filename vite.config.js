import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Workout-tracker/",
  plugins: [react()],
});
