<template>
  <!-- 订单列表 -->
  <ul class="list">
    <OrderCardItem
      v-for="(item, idx) of orders"
      :key="idx"
      :item="item"
    />
  </ul>
</template>

<script>
import OrderCardItem from './sub';

export default {
  name: 'OrderCardList',
  props: {
    orders: Array
  },

  components: { OrderCardItem }
}
</script>
