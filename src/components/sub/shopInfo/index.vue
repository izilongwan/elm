<template>
  <!-- 订单 -->
  <div class="shop-info">
    <!-- 名称 -->
    <h3 class="name">{{shopInfo.rst.name}}</h3>
    <!-- 订单列表 -->
    <ul class="list">
      <SettlementShopListItem
        v-for="(item, idx) of shopInfo.cartList"
        :key="idx"
        :item="item"
      />

      <li class="cell delivery-fee">
        <span>配送费</span>
        <span>￥{{shopInfo.rst.float_delivery_fee}}</span>
      </li>
      <!-- 结算金额 -->
      <li class="cell total">
        <span>
          合计：￥
          <em class="price">{{(shopInfo.total_price).toFixed(2)}}</em>
          元
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import SettlementShopListItem from './sub';

export default {
  name: 'ShopInfo',
  props: {
    shopInfo: Object
  },

  components: { SettlementShopListItem }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.shop-info {
  width: 95%;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: #fff;

  .name {
    ellipsis();
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 0;
  }

  .list {
    .cell {
      border-top: 1px solid #eee;
      font-size: 1.6rem;
      padding: 2rem 0;
    }

    .delivery-fee {
      flex-row();
      justify-content: space-between;
    }

    .total {
      text-align: right;

      span {
        color: #000000;

        .price {
          font-size: 2.5rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>