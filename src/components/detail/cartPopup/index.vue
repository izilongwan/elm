<template>
  <!-- 购物商品弹窗 -->
  <mt-popup
    v-model="popupShow"
    position="bottom"
    popup-transition="popup-slide"
    style="width: 100%;"
    class="popup"
  >
    <div class="title">
      <h3 class="name">
        已选商品
        <span>({{ cartList.length }})</span>
      </h3>
      <span @click="clearCartList">
        <span>清空</span>
        <i class="fa fa-trash"></i>
      </span>
    </div>

    <!-- 商品滚动列表 -->
    <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-content">
        <ul class="list">
          <CartItem
            v-for="(item, idx) of cartList"
            :key="idx"
            :item="item"
          />
        </ul>
      </div>
    </div>
  </mt-popup>
</template>

<script>
import BScroll from 'better-scroll';

import CartItem from './sub';

export default {
  name: 'CartPopup',
  props: {
    res: Object,
    cartList: Array,
    isEmpty: Boolean
  },

  components: { CartItem },

  data () {
    return {
      popupShow: false
    };
  },

  mounted () {
    this.busEvent();

    this.$nextTick(
      () => (this.scroll = new BScroll(this.$refs.wrapper, { click: true }))
    );
  },

  watch: {
    'cartList.length' (len) {
      if (len <= 0) {
        this.popupShow = false;
      }
    }
  },

  methods: {
    busEvent () {
      const { $bus, isEmpty } = this;

      $bus.$on(
        'handleCartPopup',
        (show) => !isEmpty && (this.popupShow = show)
      );

      $bus.$on('handleClearCartList', () => this.clearCartList());
    },

    clearCartList () {
      const { menu, recommend } = this.res;

      menu.forEach((val) =>
        val.foods.forEach((item) => (item.count = 0))
      );

      recommend.forEach((val) =>
        val.items.forEach((item) => (item.count = 0))
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.popup {
  background-color: #fff;

  .title {
    flex-row();
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #F5F5F5;
    font-size: 1.6rem;
    line-height: 3rem;

    .fa {
      color: #999;
      margin-left: 0.5rem;
    }
  }

  .scroll-wrapper {
    max-height: 25rem;
    overflow: hidden;

    .list {
      background-color: #fff;
      padding: 0 2rem;
    }
  }
}
</style>
