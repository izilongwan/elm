<template>
  <!-- 订单滚动区域 -->
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <section>
        <!-- 标题 -->
        <OrderTitle />

        <!-- 订单列表 -->
        <OrderCardList :orders="orders" />
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import OrderCardList from './cardList';
import OrderTitle from './title';

export default {
  name: 'OrderScrollWrapper',

  props: {
    orders: Array
  },

  components: {
    OrderCardList,
    OrderTitle
  },

  mounted () {
    this.initBScroll();
  },

  methods: {
    initBScroll () {
      this.$nextTick(() =>
        this.scroll = new BScroll(this.$refs.wrapper, { click: true })
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  position: absolute;
  top: 4.4rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>