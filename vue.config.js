// let path = require("path");
module.exports = {
  // https://api.blockbcd.top/index/
  lintOnSave: false,//是否在每次保存时使用eslint检查，这个对语法的要求比较严格
  //productionSourceMap: false,//不允许打包时生成项目来源映射文件，在生产环境下可以显著的减少包的体积
  //注 Source map的作用：针对打包后的代码进行的处理，就是一个信息文件，里面储存着位置信息。
  // publicPath: "/",//配置为相对路径，这样打包之后的包才能正常使用
  css: {
    extract: true//是否启用css分离插件，默认是true，
    //如果不启用css样式分离插件，打包出来的css是通过内联样式的方式注入至dom中的，
    //详细了解https://www.cnblogs.com/xiaokebb/p/8274889.html
    //sourceMap: true,//效果同上
   // modules: false,// // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development'?'source-map':'none'
    //development/production
  },
  devServer: { //配置开发服务器
    host: "localhost",
    hot: true,//是否启用热加载，就是每次更新代码，是否需要重新刷新浏览器才能看到新代码效果
    port: "800",//服务启动端口
    open: false,//是否自动打开浏览器默认为false
    proxy:"http://www.stonemei.cn"    //http://192.168.0.106:3553 
    // proxy: {  
    //   "/proxy": { 
    //     target: "http://www.stonemei.cn", 
    //     changeOrigin: true,
    //     ws:true,
    //     pathRewrite: {
    //       "^/proxy": "" 
    //     }
    //   }
    // }
  },
  pluginOptions: {
    'style-resources-loader': {
      //定义一个全局的less文件，把公共样式变量放入其中，这样每次使用的时候就不用重新引用了
      preProcessor: 'less',
      patterns: [
        './src/assets/public.less'
      ]
    }
  }
  // ,chainWebpack(config) {
     //添加一个路径别名 假设有在assets/img/menu/目录下有十张图片，
    //如果全路径require("/assets/img/menu/img1.png")
    //去引入在不同的层级下实在是太不方便了，这时候向下方一样定义一个路劲别名就很实用了
    // config.resolve.alias
      // .set("assets", path.join(__dirname, "/src/assets"))//添加多个别名支持链式调用
      // .set("img", path.join(__dirname, "/src/assets/img/menu"))
      //引入图片时只需require("img/img1.png");即可
  // }
}