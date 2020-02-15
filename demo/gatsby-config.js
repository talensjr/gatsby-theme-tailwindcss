module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
  ],
}
