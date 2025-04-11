module.exports = {
  webpack: function override(config, env) {
    console.log('env', env);
    // 修改 publicPath
    if (env === 'production') {
      config.output.publicPath = '/build';
    }
    return config;
  },
  devServer: function overrideDevServer(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // 配置代理
      config.proxy = {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      };
      return config;
    };
  },
};