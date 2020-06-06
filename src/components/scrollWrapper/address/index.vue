<template>
  <!-- 我的地址列表滚动区域 -->
  <div class="scroll-wrapper" ref="wrapper" v-if="address">
    <div class="scroll-content">
      <!-- 我的地址列表 -->
      <AddressCardList :address="address" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

import AddressCardList from './cardList';

export default {
  name: 'AddressScrollWrapper',
  props: {
    address: Array
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true });
  },

  components: { AddressCardList }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 5.8rem;
  overflow: hidden;
}
</style>