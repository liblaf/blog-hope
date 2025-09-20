import { defineUserConfig } from "vuepress";

import theme from "./theme/index.ts";

export default defineUserConfig({
  // ref: <https://vuejs.press/reference/config.html>
  title: "liblaf",
  description: "Life blooms like a flower.",

  theme,

  markdown: {
    // ref: <https://github.com/markdown-it/markdown-it#init-with-presets-and-options>
    typographer: true,
  },
});
