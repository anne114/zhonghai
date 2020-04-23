module.exports = {
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({   
            resources: ['./src/static/styles/_mixins.scss', './src/static/styles/_uni.scss']
          })
          .end()
      })
    }
  }