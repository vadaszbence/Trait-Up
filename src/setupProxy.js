const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Trait-Up-Backend',
    createProxyMiddleware({
      target: 'http://localhost',
      changeOrigin: true,
    })
  );
};

