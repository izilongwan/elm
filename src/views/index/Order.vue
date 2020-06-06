<template>
  <!-- 订单页面 -->
  <div class="child-container">
    <!-- 订单头部 -->
    <OrderHeader
      style="background-color: #fff; color: #000"
    />

    <!-- 订单滚动区域 -->
    <OrderScrollWrapper
      :orders="orders"
      v-if="orders.length > 0"
    />

    <NoOrderTip v-else />
  </div>
</template>

<script>
import { OrderModel } from "models/order";
import OrderHeader from 'components/header/index';
import OrderScrollWrapper from 'components/scrollWrapper/order';
import NoOrderTip from 'components/order/noOrderTip';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'IndexOrder',

  components: {
    OrderHeader,
    OrderScrollWrapper,
    NoOrderTip
  },

  data () {
    return {
      orders: [],
      t: null
    }
  },

  mounted () {
    this.orderModel = new OrderModel();
    this.busEvent();
    this.getOrder();
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('removeOrder', (data) =>
        this.removeOrder(data)
      );
      $bus.$on('hanldSetOrder', (order) => this.orders = order);
    },

    getOrder () {
      const u_id = localStorage.getItem(LOCAL_TOKEN);

      this.orderModel
        .getOrder({ u_id })
        .then(res => {
          if (res && res.code === 0) {
            this.orders = res.data;
          }
        })
    },

    removeOrder (data) {
      this.orderModel
        .removeOrder(data)
        .then(res => {
          if (res && res.code === 0) {
            this.orders = res.data;
          }
        })
    }
  }
}
</script>
