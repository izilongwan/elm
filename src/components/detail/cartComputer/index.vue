<template>
  <!-- 底部购物结算 -->
  <div
    class="cart-computer"
    :class="{ 'is-empty': isEmpty }"
    v-if="res"
  >
    <div class="info">
      <div
        class="icon-wrap"
        @click="$bus.$emit('handleCartPopup', true)"
      >
        <i class="fa fa-cart-plus"></i>
        <span
          v-if="totalCount"
          class="badge"
        >{{ totalCount }}</span>
      </div>
      <div class="tip">
        <em v-if="isEmpty">未选购商品</em>
        <em class="tt-price" v-else>￥{{ totalPrice }}</em>
        <p
          class="deliver-fee"
        >另需配送费{{ res.rst.float_delivery_fee }}元</p>
      </div>
    </div>
    <!-- 右侧按钮 -->
    <div class="btn-wrap">
      <button
        class="btn"
        v-if="isEmpty"
      >￥{{ res.rst.float_minimum_order_amount }}起送</button>

      <!-- 结算按钮 -->
      <button
        class="btn settlement"
        v-else
        @click="handleSettlement"
      >去结算</button>
    </div>

    <!-- 购物结算弹窗 -->
    <CartPopup
      :isEmpty="isEmpty"
      :cartList="cartList"
      :res="res"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import CartPopup from '../cartPopup';

export default {
  name: 'CartComputer',
  props: {
    res: Object
  },

  components: { CartPopup },

  data () {
    return {
      totalCount: 0,
      totalPrice: 0,
      cartList: []
    };
  },

  computed: {
    isEmpty () {
      let empty = true,
        count = 0,
        price = 0,
        list = [];

      this.res.menu.forEach((val) =>
        val.foods.forEach((item) => {
          if (item.count) {
            empty = false;
            count += item.count;
            price += item.count * item.activity.fixed_price;
            list.push(item);
          }
        })
      );

      this.res.recommend.forEach((val) =>
        val.items.forEach((item) => {
          if (item.count) {
            empty = false;
            count += item.count;
            price += item.count * item.activity.fixed_price;
            list.push(item);
          }
        })
      );

      this.totalCount = count;
      this.totalPrice = price.toFixed(2);
      this.cartList = list;

      return empty;
    }
  },

  methods: {
    ...mapMutations(['SET_SHOPPING_INFO']),

    handleSettlement () {
      const total_price = parseInt(this.totalPrice) + this.res.rst.float_delivery_fee;
      const { id } = this.$route.params;
      const { cartList, res } = this;
      const data = {
        cartList,
        rst: res.rst,
        total_price,
        id
      }

      this.SET_SHOPPING_INFO(data);
      this.$router.push('/settlement');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.cart-computer {
  flex-row();
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  &.is-empty .info {
    .icon-wrap {
      background-color: rgba(0, 0, 0, 0.7);

      .fa {
        color: #999;
      }
    }

    .tip .deliver-fee {
      color: #999;
    }
  }

  .info {
    flex-row();
    flex: 1;
    padding: 1rem;

    .icon-wrap {
      position: relative;
      margin: -2.5rem 1rem 0 2rem;
      width: 5rem;
      height: 5rem;
      background-color: $defaultBg;
      border: 5px solid #424242;
      box-shadow: 0 0 2px #999;
      border-radius: 50%;
      line-height: 4.9rem;

      .fa {
        color: #fff;
        margin-left: 0.5rem;
        font-size: 2.6rem;
      }

      .badge {
        position: absolute;
        top: -0.8rem;
        right: -0.4rem;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: #ff4444;
        font-size: 1.2rem;
        color: #ffffff;
        text-align: center;
        line-height: 1.8rem;
      }
    }

    .tip {
      color: #999;
      font-size: 1.3rem;

      .tt-price {
        color: #fff;
        font-size: 1.4rem;
      }

      .deliver-fee {
        color: #ddd;
        margin-top: 0.5rem;
      }
    }
  }

  .btn-wrap {
    height: 5.14rem;

    .btn {
      width: 12rem;
      height: 100%;
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;

      &.settlement {
        background-color: $defaultGreen;
      }
    }
  }
}
</style>
