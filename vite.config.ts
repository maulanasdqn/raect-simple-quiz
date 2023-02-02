import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Unocss from "unocss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      shortcuts: {},
      theme: {
        extend: {
          animation: {
            "gradient-x": "gradient-x 15s ease infinite",
            "gradient-y": "gradient-y 15s ease infinite",
            "gradient-xy": "gradient-xy 15s ease infinite",
          },
          keyframes: {
            "gradient-y": {
              "0%, 100%": {
                "background-size": "400% 400%",
                "background-position": "center top",
              },
              "50%": {
                "background-size": "200% 200%",
                "background-position": "center center",
              },
            },
            "gradient-x": {
              "0%, 100%": {
                "background-size": "200% 200%",
                "background-position": "left center",
              },
              "50%": {
                "background-size": "200% 200%",
                "background-position": "right center",
              },
            },
            "gradient-xy": {
              "0%, 100%": {
                "background-size": "400% 400%",
                "background-position": "left center",
              },
              "50%": {
                "background-size": "200% 200%",
                "background-position": "right center",
              },
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@tests": path.resolve(__dirname, "./src/tests"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@utils": path.resolve(__dirname, "./src/utilities"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
    },
  },
});
