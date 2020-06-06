<template>
  <!-- 去支付页面 -->
  <div class="container" v-if="SHOPPING_INFO">
    <!-- 头部 -->
    <CommonHeader :isLeftShow="false" title="在线支付" />

    <!-- 支付倒计时 -->
    <PaymentCountdown
      :name="SHOPPING_INFO.rst.name"
      :totalPrice="SHOPPING_INFO.total_price"
      @paymentTimeout="disabledBtn = true"
    />

    <!-- 子标题 -->
    <PaymentSubtitle />

    <!-- 支付方式 -->
    <PaymentAction />

    <!-- 确认支付按钮 -->
    <PaymentBtn
      :disabledBtn="disabledBtn"
      @handlePayAction="handlePayAction"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { OrderModel } from "models/order";
import CommonHeader from 'components/header/common';
import PaymentCountdown from 'components/payment/countdown';
import PaymentSubtitle from 'components/payment/subtitle';
import PaymentAction from 'components/payment/action';
import PaymentBtn from 'components/payment/btn';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'Payment',
  components: {
    CommonHeader,
    PaymentCountdown,
    PaymentSubtitle,
    PaymentAction,
    PaymentBtn
  },

  data () {
    return {
      disabledBtn: false
    };
  },

  mounted () {
    this.orderModel = new OrderModel();

    if (!this.SHOPPING_INFO) {
      this.$router.go(-1);
      return;
    }
  },

  computed: {
    ...mapState(['SHOPPING_INFO', 'SHOPPING_ADDRESS', 'SHOPPING_REMARK'])
  },

  methods: {
    handlePayAction () {
      const { SHOPPING_INFO, SHOPPING_ADDRESS, SHOPPING_REMARK } = this;
      const order = {
        shopping: SHOPPING_INFO,
        address: SHOPPING_ADDRESS,
        remark: SHOPPING_REMARK
      }
      const data = {};

      data.order = JSON.stringify(order);
      data.u_id = localStorage.getItem(LOCAL_TOKEN);

      this.addOrder(data);
    },

    addOrder (data) {
      this.orderModel
        .addOrder(data)
        .then(res => {
          if (res && res.code === 0) {
            this.$router.push('/order');
            this.$bus.$emit('hanldSetOrder', res.data);
            this.$bus.$emit('handleClearCartList');
          }
        })
    }
  }
};
</script>
