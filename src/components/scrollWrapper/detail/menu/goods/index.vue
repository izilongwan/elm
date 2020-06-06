<template>
  <!-- 商品详情弹窗 -->
  <mt-popup
    v-model="popupShow"
    popup-transition="popup-slide"
    position="right"
    class="popup"
    v-if="item"
  >
    <div class="icon-back" @click="popupShow = false">
      <i class="fa fa-angle-down"></i>
    </div>

    <div class="img-wrap">
      <img :src="item.image_path" alt="item.image_path" />
    </div>

    <div class="info">
      <div class="name">{{item.name}}</div>

      <div class="price-rate">
        <span class="sale">月售{{item.month_sales}}</span>

        <span class="rate">好评率{{item.satisfy_rate}}%</span>
      </div>

      <p class="desc">{{item.description }}</p>

      <div class="cell">
        <em class="price">￥{{item.activity.fixed_price}}</em>

        <NumCounter :item="item" />
      </div>
    </div>
  </mt-popup>
</template>

<script>
import NumCounter from 'components/sub/numCounter';

export default {
  name: 'DetailGoods',
  components: { NumCounter },

  data () {
    return {
      popupShow: false,
      item: null
    }
  },

  mounted () {
    this.$bus.$on('handleGoodsDetail', (item) => {
      this.item = item;
      this.popupShow = true;
    });
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.popup {
  position: fixed;
  width: 100%;
  height: 100%;

  .icon-back {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 4rem;
    height: 4rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    text-align: center;
    line-height: 4rem;

    .fa {
      font-size: 2.5rem;
      color: #ddd;
    }
  }

  .info {
    padding: 1rem 1.5rem;

    .name {
      ellipsis();
      width: 100%;
      font-size: 1.8rem;
      color: #000;
    }

    .price-rate {
      ellipsis();
      width: 100%;
      margin: 0.7rem 0;
      color: #999;

      .rate {
        margin-left: 1rem;
      }
    }

    .desc {
      ellipsis-m(4);
      width: 100%;
      margin-bottom: 1rem;
      color: #666;
      line-height: 1.7rem;
    }

    .cell {
      flex-row();
      justify-content: space-between;
      align-items: center;
      margin-right: 2rem;

      .price {
        color: $defaultOrange;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
