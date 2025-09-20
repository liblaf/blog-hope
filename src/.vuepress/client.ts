import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

// ref: <https://theme-hope.vuejs.press/guide/customize/presets.html>
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/hr-driving-car.scss";

export default defineClientConfig({
  layouts: {
    Blog,
  },
});
