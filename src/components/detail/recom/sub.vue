<template>
  <!-- 推荐商品 -->
  <li class="item">
    <div class="img-wrap">
      <img :src="item.image_path" alt />
    </div>
    <div class="info">
      <p class="name">{{item.name}}</p>
      <p
        class="sales"
      >月售{{item.month_sales}}单 好评率{{item.satisfy_rate}}%</p>
      <p class="cell">
        <em class="price">￥{{item.activity.fixed_price}}</em>
        <NumCounter :item="item" />
      </p>
    </div>
  </li>
</template>

<script>
import NumCounter from 'components/sub/numCounter';

export default {
  name: 'DetailRecomItem',
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
  display: inline-block;
  padding: 0 1rem;

  .img-wrap {
    width: 13rem;
  }

  .info {
    width: 13rem;
    margin-top: 1rem;

    .name {
      ellipsis();
      width: 100%;
      color: #000;
    }

    .sales {
      ellipsis();
      margin: 0.7rem 0 1rem;
      color: #999;
      font-size: 1.2rem;
    }

    .cell {
      flex-row();
      justify-content: space-between;

      .price {
        font-weight: bold;
        font-size: 1.6rem;
        color: $defaultOrange;
      }
    }
  }
}
</style>