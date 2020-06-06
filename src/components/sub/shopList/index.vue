<template>
  <!-- 上拉加载/下拉刷新 -->
  <mt-loadmore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    :bottomPullText="bottomPullText"
    bottomDropText="释放加载更多"
    :auto-fill="false"
    ref="loadmore"
    style="padding-bottom: 5rem"
    v-if="shopList.length > 0"
  >
    <!-- 展示面板 -->
    <section class="shop-list-bd">
      <!-- 列表 -->
      <ul class="list">
        <ShopItem
          v-for="(item, idx) of shopList"
          :key="idx"
          :item="item.restaurant"
        />
      </ul>
    </section>
  </mt-loadmore>
</template>

<script>
import ShopItem from './sub';

export default {
  name: 'ShopList',
  components: { ShopItem },

  props: {
    shopList: Array,
    allLoaded: Boolean,
    bottomPullText: String
  },

  mounted () {
    this.busEvent();
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('loadTopLoaded', () => this.$refs.loadmore.onTopLoaded());
      $bus.$on('loadBottomLoaded', () => this.$refs.loadmore.onBottomLoaded());
    },

    loadTop () {
      this.$bus.$emit('loadTopMore');
    },

    loadBottom () {
      this.$bus.$emit('loadBottomMore');
    }
  }
}
</script>
