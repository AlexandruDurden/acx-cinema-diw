import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Descomenta la siguiente línea cuando tengas creado formulario.html en la raíz:
        // formulario: resolve(__dirname, "formulario.html"),
      },
    },
  },
});