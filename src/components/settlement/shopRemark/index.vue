<template>
  <!-- 订单备注信息 -->
  <div class="shop-remark">
    <!-- 订单备注列表 -->
    <ul class="list">
      <SettlementShopRemarkItem
        v-for="(item, idx) of list"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import SettlementShopRemarkItem from './sub';

export default {
  name: 'SettlementShopRemark',
  components: { SettlementShopRemarkItem },

  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.shop-remark {
  width: 95%;
  margin: 1rem auto;
  padding: 0 2rem;
  background-color: #fff;
}
</style>