<template>
  <!-- 主菜单 -->
  <menu class="menu" v-if="menu">
    <!-- 左侧菜单 -->
    <DetailOrderLeftMenu :menuIdx="menuIdx" :menu="menu" />

    <!-- 右侧商品区域 -->
    <DetailOrderRightScroll :menuIdx="menuIdx" :menu="menu" />

    <!-- 商品详情弹窗 -->
    <DetailGoodsPopup />
  </menu>
</template>

<script>
import DetailOrderLeftMenu from './left';
import DetailOrderRightScroll from './right';
import DetailGoodsPopup from './goods';

export default {
  name: 'DetailOrderMenu',
  components: {
    DetailOrderLeftMenu,
    DetailOrderRightScroll,
    DetailGoodsPopup
  },

  props: {
    menu: Array
  },

  data () {
    return {
      menuIdx: 0
    }
  },

  mounted () {
    this.$bus.$on('menuIdxChange', (idx, scroll = true) => {
      this.menuIdx = idx;
      scroll && this.$bus.$emit('menuListScrollTo', idx);
    });
  }
}
</script>

<style lang="stylus" scoped>
.menu {
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>