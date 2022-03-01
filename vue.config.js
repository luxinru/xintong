const Version = new Date().getTime();
module.exports = {
// webpack配置 
  chainWebpack: () => { },
  configureWebpack:  {  
    output: {
      filename: `js/[name].js?t=${Version}`,
      chunkFilename:`js/[name].${Version}.js`
    }
  
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: { 
    filename:`css/[name].css?t=${Version}`,
    chunkFilename:`css/[name].${Version}.css`
    },
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './'
}
