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
      defaultMode: "lightMode", // <-- force light mode
      typography: {
        header: "Poppins",
        body: "Quicksand",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",       // page background
          lightgray: "#f5f5f5",   // optional cards or subtle containers
          gray: "#000000",         // borders / subtle lines
          darkgray: "#ce5886",     // headers/subtitles
          dark: "#ce5886",         // menu / accent links
          secondary: "#000000",    // main text
          tertiary: "#f5f5f5",     // tertiary elements / overlays
          highlight: "rgba(206, 88, 134, 0.15)", // soft highlight overlay
          textHighlight: "#ce588688",            // optional text highlight
        },
        darkMode: {                 // simple fallback if darkMode is enabled
          light: "#ffffff",       // page background
          lightgray: "#f5f5f5",   // optional cards or subtle containers
          gray: "#000000",         // borders / subtle lines
          darkgray: "#ce5886",     // headers/subtitles
          dark: "#ce5886",         // menu / accent links
          secondary: "#000000",    // main text
          tertiary: "#f5f5f5",     // tertiary elements / overlays
          highlight: "rgba(206, 88, 134, 0.15)", // soft highlight overlay
          textHighlight: "#ce588688",            // optional text highlight
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
