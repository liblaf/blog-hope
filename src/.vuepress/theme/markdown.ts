import type { ThemeMarkdownOptions } from "vuepress-theme-hope";

// Markdown Config
// ref: <https://theme-hope.vuejs.press/config/markdown/>
export default {
  // Markdown Behavior Config
  gfm: true,
  imgLazyload: true,

  // Markdown Grammar Config
  tabs: true,
  tasklist: true,
  math: {
    type: "mathjax",
  },

  // Markdown Stylize Config
  mark: true,
  sup: true,
  sub: true,

  // Markdown Chart Config
  mermaid: true,

  // ref: <https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html#settings>
  alert: true,
} as ThemeMarkdownOptions;
