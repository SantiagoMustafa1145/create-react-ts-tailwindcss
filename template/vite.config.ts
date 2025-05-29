import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "components(*)": "./src/components/*",
      "src(*)": "./src/*",
      "hooks(*)": "./src/hooks/*",
      "utils(*)": "./src/utils/*",
      "lib(*)": "./src/lib/*",
      "views(*)": "./src/views/*",
      "assets(*)": "./src/assets/*",
    },
  },
});
