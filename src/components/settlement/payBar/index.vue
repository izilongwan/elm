<template>
  <div class="pay-bar">
    <span class="pay">￥{{totalPrice}}</span>

    <button class="btn" @click="handlePayAction">去支付</button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { mapMutations } from 'vuex';

export default {
  name: 'SettlementPayBar',

  props: {
    totalPrice: Number,
    shoppingAddress: Object,
    list: Array
  },

  methods: {
    ...mapMutations(['SET_SHOPPING_REMARK']),

    handlePayAction () {
      if (!this.shoppingAddress) {
        Toast({
          message: '请选择收货地址',
          position: 'top'
        })
        return;
      }

      const remark = `${ this.list[0].txt }餐具，${ this.list[1].txt }`;
      const { $router, $bus } = this;

      this.SET_SHOPPING_REMARK(remark);
      $router.push('payment');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.pay-bar {
  flex-row();
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  font-size: 1.8rem;
  height: 5.14rem;

  .pay {
    margin-left: 1rem;
    color: #fff;
  }

  .btn {
    width: 12rem;
    height: 100%;
    background-color: $defaultGreen;
    color: #fff;
  }
}
</style>
