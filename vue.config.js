// 該檔案生成的方式可以在 Vue Ui 中的「設定」->「Vue Cli」->「公開路徑」找到。
module.exports = {
  // 預設狀況下，部署到 GitHub Pages 可能會無法顯示畫面
  // 因此需要多設置該屬性
  // 官方文件：https://cli.vuejs.org/zh/config/#publicpath
  publicPath: './',
  transpileDependencies: ['@vue/reactivity'],
  chainWebpack: (config) => {
    config.plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'JaMenCheese|勾起你心中的餓';
        return args;
      });
  },
};
