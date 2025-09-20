import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "Home", link: "/", icon: "material-symbols:home-rounded" },
  { text: "Tags", link: "/tag/", icon: "material-symbols:tag-rounded" },
  { text: "Timeline", link: "/timeline/", icon: "material-symbols:timeline" },
  {
    text: "Archive",
    icon: "material-symbols:archive-rounded",
    children: [
      "/catalog.html",
      "/2025/",
      "/2024/",
      "/2023/",
      "/2022/",
      "/PhD/",
    ],
  },
]);
