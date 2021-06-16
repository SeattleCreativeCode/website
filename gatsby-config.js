module.exports = {
  siteMetadata: {
    title: "Seattle Creative Code",
    description:
      "A cross-disciplinary group of artists and technologists who collaborate and hang out",
    titleTemplate: "%s × Seattle Creativ Code",
    siteUrl: "https://seattlecreativecode.com",
    plausibleId: "livecodeseattle.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.tsx"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: "./src/members/",
      },
      __key: "members",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "events",
    //     path: "./src/data/events/",
    //   },
    //   __key: "events",
    // },
  ],
};
