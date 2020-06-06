<template>
  <!-- 购物商品项 -->
  <li class="item">
    <em class="name">{{item.name}}</em>
    <span class="price">￥{{item.activity.fixed_price}}</span>
    <NumCounter :item="item" />
  </li>
</template>

<script>
import NumCounter from 'components/sub/numCounter';

export default {
  name: 'CartItem',
  props: {
    item: Object
  },

  components: { NumCounter }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.item {
  flex-row();
  justify-content: space-between;
  font-size: 1.6rem;
  line-height: 5rem;

  & + .item {
    border-top: 1px solid #eee;
  }

  .name {
    ellipsis();
    color: #000;
    width: 15rem;
  }

  .price {
    color: $defaultOrange;
  }
}
</style>