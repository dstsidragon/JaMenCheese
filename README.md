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
footer

#navBar
購物車小物件
帳號  
收藏
點LOGO也要改變顏色

#產品頁

路由
最愛收藏
加入收藏刷新narbar
商品價格千分號
V熱賣商品  >> 需check取得的資料是all還是單一頁

#產品詳細頁
V加入收藏
加入收藏刷新narbar
V加入購物車
加入購物車刷新narbar
V你可能會喜歡
V立即購買  >>加入購物車>>前往購物車頁面


#購物車
結帳進度條  可以加上完成時間
拆成元件
V購物車清單 
V套用優惠券
V手機板 金額 按鈕置底
BTN-繼續購物
更改數量的按鈕
滿版背景

#填寫付款資料
拆成元件
BTN-繼續購物
V備註欄位藏值
V拆成元件
V運費計算

#結帳頁面
V拆成元件
BTN-繼續購物

後台

#產品頁面：


#訂單頁面：


#優惠券頁面：



#貼文頁面（加分項目）：

串接取得、新增、刪除、更新貼文 API
啟用公開狀態
Modal 細節欄位
分頁功能
登入 / 登出

小功能
千分符號




前台

結帳付款
[API]: /api/:api_path/pay/:order_id
[方法]: post
[參數]:
	@api_path: 'thisismycourse2'
	@order_id: 訂單編號
[成功回傳]:
	{
    "success": true,
    "message": "付款完成"
  }

  
        "payment_method": "credit_card",




///////////////////

<!-- Alert元件 start -->
<Alert class="alert-position"  v-if="alertMessage" :message="alertMessage"
:status="alertStatus" />
<!-- Alert元件 end -->


// Alert元件
import Alert from '@/components/Alert.vue';


    // Alert元件
    Alert,

      // alert元件參數
      alertMessage: '',
      alertStatus: false,



          // alert 元件顯示
          this.alertMessage = res.data.message;
          this.alertStatus = true;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );

//////////


////////// 刪除單一元件

  <!-- 刪除單一Modal start-->
  <Delete ref="deleteModal"  @send="delOneData" />
  <!-- 刪除單一Modal end-->


// 刪除單一Modal
import Delete from '@/components/Delete.vue';

    // 刪除單一Modal
    Delete,

    
                @click='this.$refs.deleteModal.openModal(item)'
//////////

/////////刪除全部

  <!-- 刪除全部Modal start-->
  <DeleteAll ref="deleteAllModal"  @send="deleteAll" />
  <!-- 刪除全部Modal end-->

    // 刪除全部 Modal
    DeleteAll,

// 刪除全部 Modal
import DeleteAll from '@/components/DeleteAll.vue';

                @click='this.$refs.deleteAllModal.openModal();'

//////////


data 
          payment_method: '',
          
        <!-- 付款方式 -->
        <div class="col-md-6">
          <label for="pay" class="form-label">付款方式:</label>
          <Field
            id="pay"
            ref="pay"
            name="付款方式"
            as="select"
            class="form-control"
            :class="{ 'is-invalid': errors['付款方式'] }"
            rules="required"
            v-model="userData.user.payment_method"
          >
            <option value="" disabled>點擊選取分類</option>
            <option>WebATM</option>
            <option>ATM</option>
            <option>Credit</option>
            <option>ApplePay</option>
            <option>GooglePay</option>
          </Field>
          <error-message name="付款方式" class="invalid-feedback"></error-message>
        </div>