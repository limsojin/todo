// const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = {
  devServer: {
	  proxy: {
      '/todo': { // /todo로 들어오면 스프링서버 포트 8081로 보낸다
        target: 'http://localhost:8081',
        changeOrigin: true, // cross origin 허용
      },
    },
  },
  transpileDependencies: true,
  indexPath: '../src/main/resources/templates/vue/index.html',
  publicPath: '/vue',
  outputDir: path.resolve(__dirname, '../src/main/resources/static/vue'), // 빌드 타켓
};

/* module.exports = defineConfig({
  devServer: {
	  proxy :{
     target: 'http://localhost:8086"
    },
  },
  //transpileDependencies: true,
  indexPath: '../src/main/resources/templates/vue/index.html',
  publicPath: '/vue',
  outputDir: path.resolve(__dirname, '../src/main/resources/static/vue' )
}) */
