module.exports = function override(config, env) {
  // 修改 publicPath
  if (env === 'production') {
    config.output.publicPath = '/build/';
  }
  return config;
};