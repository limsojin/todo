//const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  devServer: {
	  proxy :{
     target: 'http://localhost:8086",   
    }, 
  },
  //transpileDependencies: true,
  indexPath: '../src/main/resources/templates/vue/index.html',
  publicPath: '/vue',
  outputDir: path.resolve(__dirname, '../src/main/resources/static/vue' )
})
