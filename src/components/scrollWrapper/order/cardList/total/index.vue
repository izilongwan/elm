<template>
  <!-- 商品合计数量/价格 -->
  <div class="total">
    <div class="cell">
      <p class="name">{{shopping.cartList[0].name}}</p>
      <span>等共{{shopping.cartList.length}}件商品</span>
    </div>
    <div class="price">合计：￥{{shopping.total_price}}</div>
  </div>
</template>

<script>
export default {
  name: 'OrderCardItemTotal',
  props: {
    shopping: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.total {
  flex-row();
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem 5rem;
  border-bottom: 1px solid #eee;

  .cell {
    flex-row();

    .name {
      ellipsis();
      width: 40%;
    }
  }

  .price {
    width: 10.5rem;
    font-weight: bold;
  }
}
</style>
