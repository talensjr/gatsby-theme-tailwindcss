module.exports = options => {
  const pCssPlugins =
    options && options.postCssPlugins && Array.isArray(options.postCssPlugins)
      ? options.postCssPlugins
      : []
  const cLoaderOptions =
    options && options.cssLoaderOptions ? options.cssLoaderOptions : {}
  const emotionOptions =
    options && options.emotionOptions ? options.emotionOptions : {}
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require("tailwindcss"), ...pCssPlugins],
          cssLoaderOptions: cLoaderOptions,
        },
      },
      {
        resolve: `gatsby-plugin-emotion`,
        options: emotionOptions,
      },
    ],
  }
}
