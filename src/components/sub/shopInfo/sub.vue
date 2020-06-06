<template>
  <!-- 订单卡牌 -->
  <li class="item">
    <!-- 图片 -->
    <div class="img-wrap">
      <img :src="item.image_path" alt="item.image_path" />
    </div>

    <!-- 详情 -->
    <div class="info">
      <p class="name">{{item.name}}</p>
      <span class="count">x {{item.count}}</span>
      <span class="price">￥{{item.activity.fixed_price}}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SettlementShopListItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items: center;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  color: #000;

  & + .item {
    border-top: 1px solid #eee;
  }

  .img-wrap {
    width: 4rem;
  }

  .info {
    flex-row();
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;

    .name {
      ellipsis();
      width: 50%;
    }

    .count {
    }

    .price {
    }
  }
}
</style>