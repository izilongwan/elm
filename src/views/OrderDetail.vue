<template>
  <!-- 订单详情页面 -->
  <div class="container" v-if="detailInfo">
    <div class="scroll-wrap scroll">
      <!-- 头部 -->
      <CommonHeader title="订单详情" />

      <!-- 小提醒 -->
      <OrderDetailTip />

      <!-- 订单商品详情 -->
      <OrderDetailShopInfo :shopInfo="detailInfo.shopping" />

      <!-- 订单地址详情 -->
      <OrderDetailAddressInfo
        :address="detailInfo.address"
        :date="detailInfo.date"
        :orderLeadTime="detailInfo.shopping.rst.order_lead_time"
      />

      <!-- 订单备注信息 -->
      <OrderDetailOrderInfo
        :id="detailInfo.id"
        :date="detailInfo.date"
        :remark="detailInfo.remark"
      />
    </div>
  </div>
</template>

<script>
import CommonHeader from 'components/header/common';
import OrderDetailTip from 'components/orderDetail/tip';
import OrderDetailShopInfo from 'components/sub/shopInfo';
import OrderDetailAddressInfo from 'components/orderDetail/address'
import OrderDetailOrderInfo from 'components/orderDetail/order'

export default {
  name: 'OrderDetail',

  props: {
    detailInfo: Object
  },

  mounted () {
    const { $router, detailInfo } = this;

    !detailInfo && $router.go(-1);
  },

  components: {
    CommonHeader,
    OrderDetailTip,
    OrderDetailShopInfo,
    OrderDetailAddressInfo,
    OrderDetailOrderInfo
  }
}
</script>

<style scoped>
.container {
  overflow-y: scroll;
}
</style>
