import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fromFileUrl } from "@std/path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@scope/lib": fromFileUrl(
        import.meta.resolve("../lib"),
      ),
    },
  },
});
