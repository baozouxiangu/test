module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            viewportWidth: 3840,
            viewportHeight: 2160,
            unitPrecision: 3,
            viewportUnit: "vw",
            minPixelValue: 0.5,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  }
};
