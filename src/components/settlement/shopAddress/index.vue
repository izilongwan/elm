<template>
  <!-- 收货地址 -->
  <router-link to="address" class="shop-address">
    <p class="deliver">
      <span>订单配送至</span>

      <em
        class="tag"
        v-if="SHOPPING_ADDRESS && SHOPPING_ADDRESS.tag"
      >{{SHOPPING_ADDRESS.tag}}</em>
    </p>

    <template v-if="SHOPPING_ADDRESS">
      <!-- 配送地址 -->
      <p class="address-wrap">
        <em class="address">{{SHOPPING_ADDRESS.address}}</em>

        <span class="icon-right">
          <i class="fa fa-angle-right"></i>
        </span>
      </p>

      <p class="cell">
        <span class="name">{{SHOPPING_ADDRESS.name}}</span>

        <span class="sex">({{SHOPPING_ADDRESS.sex}})</span>

        <span class="phone">{{SHOPPING_ADDRESS.phone}}</span>
      </p>
    </template>

    <p class="no-address-wrap" v-else>
      <em class="tip">请选择收货地址</em>

      <span class="icon-right">
        <i class="fa fa-angle-right"></i>
      </span>
    </p>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SettlementShoppingAddress',

  computed: {
    ...mapState(['SHOPPING_ADDRESS'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.shop-address {
  position: relative;
  display: block;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.6rem;

  .deliver {
    color: #eee;

    .tag {
      display: inline-block;
      width: 3.5rem;
      margin-left: 2rem;
      border: 1px solid;
      border-radius: 3px;
      text-align: center;
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
  }

  .cell {
    color: #eee;

    .phone {
      margin-left: 1rem;
    }
  }

  .address-wrap, .no-address-wrap {
    flex-row();
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;

    .address {
      ellipsis();
      width: 90%;
      font-size: 2rem;
      font-weight: bold;
      line-height: 4.5rem;
    }

    .tip {
      font-size: 2rem;
      line-height: 4.5rem;
    }

    .icon-right {
      .fa {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
