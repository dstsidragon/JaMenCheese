#呷面起士
GitHub: https://github.com/dstsidragon/JaMenCheese
GitPages: https://dstsidragon.github.io/JaMenCheese/#/
sh deploy.sh
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

前台

#首頁
Vfooter
V訂閱 JS  給優惠碼 
V3D卡片 點擊連接產品
Vaos

#navBar
V購物車小物件
V帳號  
V收藏
移除滾動事件
點LOGO也要改變顏色
登出彈跳視窗出來跟關閉會跳錯

#產品頁

路由 >>麵包屑元件
V最愛收藏
V加入收藏刷新narbar
V商品價格千分號
V熱賣商品  >> 需check取得的資料是all還是單一頁
要撈全部產品的資料

#產品詳細頁
V加入收藏
V加入收藏刷新narbar
V加入購物車
V加入購物車刷新narbar
V你可能會喜歡
V立即購買  >>加入購物車>>前往購物車頁面
第一次進去畫面時會跑版


#幸運輪盤
V畫布元件

#購物車
第一次進去畫面時會沒刷新購物車
結帳進度條  可以加上完成時間
V拆成元件
V購物車清單 
V套用優惠券
V手機板 金額 按鈕置底
VBTN-繼續購物
V更改數量的按鈕
V滿版背景
V沒資料時要提醒沒資料  可以購物

#填寫付款資料
V拆成元件
VBTN-繼續購物
V備註欄位藏值
V拆成元件
新增選取 自取或宅配

#結帳頁面
V拆成元件
VBTN-繼續購物
取貨方式
運費計算
賣場其他商品

#訂單頁面
優化

#Q&A
V手風琴元件

後台

#產品頁面：
新增產品 圖片會保留

#訂單頁面：


#優惠券頁面：



#貼文頁面（加分項目）：

串接取得、新增、刪除、更新貼文 API
啟用公開狀態
Modal 細節欄位
分頁功能
登入 / 登出

小功能
V千分符號


以下這邊是助教針對程式碼的修改建議。

*有 ESLint 警告，下次若沒有修正將會直接退件。
V*請多加注意 HTML 排版。
V*HTML 與 JavaScript 的縮排空格會建議改成 2 格，若是使用 VSCode 可以在右下角看到目前的檔案所使用的縮排形式是空格還是定位點，在此會建議使用空格而不是定位點，在此可以看到這一篇 ESLint 規範文獻唷~
V*a 連結若有綁定事件請補上 .prevent
V*許多 class 後方都有空格，請刪除多餘空格，例如：Login.vue 的第九行或者是第二行 .mt_navbar 與 .d-flex 之間。
V*圖片請不要直接外連到 unsplash，建議改上傳到六角的圖片上傳空間。
V*部分標籤若沒有要注入任何東西，可以直接自閉合，例如：<Login></Login> 改成 <Login/>。
*請不要將 Vue 課程的註冊與忘記密碼 API 放進來，該 API 僅提供註冊 API Path 使用，並不適用於作品中註冊，請移除該功能，僅有 API 文件中的功能是可以使用的。
*a 連結的 href="#" 屬性盡量不要忽略，因此建議補回去。
*建議統一 {{}} 寫法，不可一下子 {{item}} 一下子 {{ item }} (前後空白)，以助教的風格習慣是後者，其主要原因在閱讀上較美觀，因此同學可以自己選擇哪一種 :D，另外這部分同學也可以參考官方文獻的建議寫法唷。
V*沒有用途的 .vue 檔案會建議移除，例如：HelloWorld.vue 等等這類檔案哩。
*部分地方可以使用樣板字面值來組合，例如：Products.vue 的 18 行。
*img 標籤的 alt 屬性如果要作為動態屬性的話，記得補上 v-bind。
*button 標籤建議補上 type="button" 屬性。
*沒有使用的生命週期可以刪除。
*屬性上的單雙引號請統一唷。
*template 、script 與 style 標籤建議統一擺放順序，以官方建議來講 style 標籤永遠在最後。
*請不要使用 eslint-disable-next-line 關閉提示訊息，而是試著解決。
*萬用路由請放到最後。
*請參考課程範例是如何引入 Modal 的寫法，此「import { Modal } from 'bootstrap';」寫法是不太正確的。
*console.log() 會建議移除，例如：main.js 等等地方，在實際開發環境下比較不會遺留 console.log 在程式碼中，許多系統的漏洞問題都是來自於這些，需清楚注意到 console.log() 的使用時機絕大部分都是「開發模式」下使用，也會建議不要使用 babel 來去除，我們無法保證哪一天系統突然發神經不將 console.log 去除，所以請務必將 console.log 刪除，最主要也是要養成一個良好的開發習慣，在正式部署環境時就必須習慣性移除會比較好，在這邊也提供相關文獻給予參考。
非必要註解可以斟酌刪除，否則 code 會顯得特別雜亂，若是屬於想要釐清邏輯的，那麼可以斟酌留下來沒關係，只是會建議盡可能撰寫註解時，也要整理一下唷~
*可多加美化 index.html 中的 meta，另外請多加注意 lang 要調整至相關語系，例如調整成 「zh-Hant-TW」，若是英語系網站則可以保留預設 「en」。
*SCSS 請以縮排兩格為主 ，可參考這一篇建議規範文獻。
*副檔名為 .vue 的檔案會建議首字大寫，可以看到 Vue 官方文獻也都是首字大寫唷。
*圖片建議不要太大張（尺寸不超過顯示區域的 2 倍）。
*原始碼會建議不要與編譯後的檔案放在同一個分支，通常來講編譯後的檔案會放在 gh-pages 分支，但同學似乎已經有使用助教的一鍵部署指令了，所以會建議刪除 dist 資料夾哩。

1. 先給你幾個方向，請不要多重注入 Bootstrap.js
main.js 有一個 元件又有一個，你先整理這區塊或許就解決了
2. toComma 問題，建議你使用課程範例的寫法，研判是正規表達式問題
3.千萬不要有效果用很多就是炫砲、屌這種想法
有時候中規中局還比較穩定可以凸顯自己 因為其實我開你作品非常當