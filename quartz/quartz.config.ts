import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dear Lavion's Profile",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "dearlavion.github.io", // root deployment
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Poppins",
        body: "Quicksand",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff9f0",        // page background: very light pastel yellow
          lightgray: "#fff1c9",    // cards/backgrounds: soft yellow
          gray: "#ffd6d6",         // borders, subtle elements: pastel pink
          darkgray: "#ffb3b3",     // headings/subtitles: pink
          dark: "#ff8f91",         // accent color: deeper pink
          secondary: "#fff5b1",    // secondary elements: pastel yellow
          tertiary: "#ffd1dc",     // tertiary elements: soft pink
          highlight: "rgba(255, 223, 186, 0.15)",
          textHighlight: "#ffde9e88",
        },
        darkMode: {                // dummy fallback, not used
          light: "#fff9f0",
          lightgray: "#fff1c9",
          gray: "#ffd6d6",
          darkgray: "#ffb3b3",
          dark: "#ff8f91",
          secondary: "#fff5b1",
          tertiary: "#ffd1dc",
          highlight: "rgba(255, 223, 186, 0.15)",
          textHighlight: "#ffde9e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
