const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    disableHostCheck: true
  }
}
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
