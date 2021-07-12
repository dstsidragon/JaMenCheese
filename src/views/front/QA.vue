<template>
  <div class="mt_navbar">
    <div class="banner position-relative">
      <div class="d-flex  align-items-center banner-title">
        <h2 class="text-white mb-0 me-2 fz-2 fz-md-4">常見問題</h2>
        <img
          src="https://dstsidragon.github.io/CssOnLineClass_SeventhMisson/assets/images/icon-help.svg"
          alt="title"
        />
      </div>
    </div>
  </div>
  <!-- 商品CARD end -->
  <div class="container text-start">
    <ul class="mt-3 ">
      <li class="fz-2">
        <span> Q1. 門市有現貨嗎？需要事先預訂嗎？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        門市只接訂單現場是沒有備貨的唷!
        因純手工製作需耗費時間，所以建議提前下單預訂、電話預訂或現場耐心等待製作，才能買到最新鮮的產品！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q2. 多少錢免運費？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        目前開幕期間，全館免運費!
      </li><li class="mt-1 fz-1 text-primary">
        免運費活動過後，費用計算如下:
      </li>
      <li class="mt-1 fz-1 text-primary">
         台灣本島凡訂購$2500（含）以內，
        運費$180；訂購$3500（含）以內，運費$150；訂購$4500（含）以內，免運費
      </li>
      <li class="mt-1 fz-1 text-primary">
         離島地區凡訂購$2500（含）以內，運費$280；訂購$3500（含）以內，
        運費$250；訂購$4500（含）以內，免運費
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q3. 可以指定時間送達嗎？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        基本上是配合黑貓宅配服務，黑貓便未提供指定時間送達的服務，
        實際到貨時間還是要依照當區物流司機安排的路線為主唷！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q4. 可以寄便利商店店到店嗎？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        目前已門市取貨及宅配服務為主，尚無法寄送便利商店店到店唷！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q5. 訂購申請宅配，產品最快什麼時候可以到貨呢？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        正常情況是下單付款完當天就會排單製作，隔日就可以收到貨唷！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q6. 買多少有打折優惠呢？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">詳細活動優惠請關注官網最新消息唷！</li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q7. 宅配有貨到付款嗎？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        目前線上訂購的所有產品皆為排單製作生產，故無提供貨到付款服務哦！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span>Q8. 選擇轉帳或匯款．但超過繳費時間怎麼辦？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">繳費代碼如超過繳費時間，請勿進行繳費，重新下單即可唷。</li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span> Q9. 已下單．但臨時想取消訂單？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        產品皆為排單付款生產，如果訂單狀態為【準備訂單中】即無法取消或是退款哦！ 煩請下單前三思！
      </li>
    </ul>
    <ul class="mt-3">
      <li  class="fz-2">
        <span>Q10. 請問素食者可以食用嗎？ </span>
      </li>
      <li class="mt-1 fz-1 text-primary">
        並不是每款產品都可以食用，我們有在產品詳細內容附註說明唷！
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
// body{
//     text-align: left !important;
// }

.banner {
  height: 340px;
  background: center center no-repeat url("https://i.imgur.com/72W2usI.jpg");
  background-size: cover;
  //   background-attachment: fixed;
}
@media (max-width: 776px) {
  .banner {
    height: 170px;
  }
}
.banner-title{
    position: absolute;
    left: 10%;
    bottom: 20%;
}
</style>
