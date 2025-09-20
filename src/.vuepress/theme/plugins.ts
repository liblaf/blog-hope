import path from "node:path";
import type { ThemePluginsOptions } from "vuepress-theme-hope";

const CATALOG_FRONTMATTER: Record<string, Record<string, any>> = {};

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

  // Other Plugin Config
  catalog: {
    frontmatter(path_: string) {
      const basename: string = path.basename(path_);
      if (basename in CATALOG_FRONTMATTER) return CATALOG_FRONTMATTER[basename];
      return {
        title: basename.replace(/_/g, " "),
      };
    },
  },
} as ThemePluginsOptions;
