const { createProxyMiddleware } = require('http-proxy-middleware')

// 解决跨域
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }),
  )
}

