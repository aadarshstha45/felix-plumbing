import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  publicDir: "public",
  optimizeDeps: {
    include: ["@phosphor-icons/react", "react-datepicker", "@chakra-ui/react"],
  },
  server: {
    port: 9001,
    open: true,
  },
  resolve: {
    alias: {
      "@plumbing": path.resolve(__dirname, "src"),
    },
  },
});
