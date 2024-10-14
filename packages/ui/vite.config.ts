import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: "../../postcss.config.js",
  },
  server: {
    port: 5174,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "@mtt-stack/ui",
      fileName: "@mtt-stack/ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
