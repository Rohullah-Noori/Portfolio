import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // for Google Fonts
        myFont: ["MyFont", "sans-serif"], // for local font
      },
    },
  },
};
