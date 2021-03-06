module.exports = {
  // 在專案開發中如果呼叫 API 時會 pass 給這個 proxy 網址
  // 這邊就用前面以 Valet 建立的網站網址
  devServer: {
    proxy: 'https://project.test'
  },
  // 建置前端靜態檔案時要擺放的目錄
  // 在 package.json 也要調整 "build" 這個 script
  outputDir: '../public',

  // 開發階段修改 index.html 來讓 js/css 可以作用
  // 上線階段則會修改 Laravel 的樣版
  indexPath: '../resources/views/index.blade.php',

  transpileDependencies: [
    'vuetify'
  ]
}
