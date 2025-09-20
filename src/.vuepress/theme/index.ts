import { hopeTheme } from "vuepress-theme-hope";

import navbar from "../navbar.ts";
import sidebar from "../sidebar.ts";
import markdown from "./markdown.ts";
import plugins from "./plugins.ts";

// Theme Config
// ref: <https://theme-hope.vuejs.press/config/theme/>
export default hopeTheme({
  // Theme Basic Options
  hostname: "https://hope.liblaf.me",
  author: {
    name: "liblaf",
    url: "https://github.com/liblaf",
  },
  license: "MIT",
  // favicon: "", // TODO: add favicon

  // Theme Feature Options
  blog: {
    avatar: "/avatar.jpg",
    description: "Life blooms like a flower.",
    medias: {
      // Work
      GitHub: "https://github.com/liblaf",
      // Integrate
      AFDian: "https://afdian.com/a/liblaf",
      Bangumi: "https://bgm.tv/user/liblaf",
      // Video
      BiliBili: "https://space.bilibili.com/225600506",
      Youtube: "https://www.youtube.com/@liblaf",
      // Other
      Steam: "https://steamcommunity.com/id/liblaf/",
    },
    articleInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  },

  // Theme Layout Options
  // Theme Layout Options > Navbar Related
  navbar,
  repo: "liblaf/blog-hope",
  repoLabel: "GitHub",
  docsDir: "src",
  // Theme Layout Options > Sidebar Related
  sidebar,
  // Theme Layout Options > Page Meta
  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  changelog: true,
  // Theme Layout Options > Footer
  displayFooter: true,

  // Theme Appearance Options
  fullscreen: true,

  // Markdown Config
  // ref: <https://theme-hope.vuejs.press/config/markdown/>
  markdown,

  // Plugin Config
  // ref: <https://theme-hope.vuejs.press/config/plugins/>
  plugins,
});
