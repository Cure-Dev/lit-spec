import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en-us/": [
    "",
    {
      text: "1. Carrier Specifications",
      prefix: "carrier-specifications",
      link: "carrier-specifications",
      collapsible: true,
      children: [
        {
          text: "File System",
          prefix: "file-system",
          link: "file-system",
          collapsible: true,
          children: [
            "single-file.md"
          ]
        },
      ],
    },
  ],
});
