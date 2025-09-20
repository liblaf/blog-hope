import type { ThemePluginsOptions } from "vuepress-theme-hope";

// Plugin Config
// ref: <https://theme-hope.vuejs.press/config/plugins/>
export default {
  // Icon Plugin Config
  icon: {
    assets: "iconify",
  },

  // Search Plugin Config
  slimsearch: true,

  // Blog Plugin Config
  blog: true,
} as ThemePluginsOptions;
