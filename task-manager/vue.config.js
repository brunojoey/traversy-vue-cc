module.exports = {
  devServer: {
    proxy: {
      // wants to set /api/ = localhost only when in development
      '^/api': {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
      },
    }
  }
}