import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { redirectPlugin } from "vuepress-plugin-redirect";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en-us/": {
      lang: "en-US",
      title: "Lit Spec",
      description: "Formal Specifications for Lit",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "Lit 语言规范",
      description: "Lit语言正式的规范说明",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    redirectPlugin({
      autoLocale: true,
    }),
  ],

});
