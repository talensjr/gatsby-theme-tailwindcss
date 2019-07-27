module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
  ],
}
