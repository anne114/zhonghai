module.exports = {
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({   
            // Or array of paths（这个可以删掉）
            resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          })
          .end()
      })
    }
  }