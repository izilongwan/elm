<template>
  <!-- 商家标题弹窗 -->
  <mt-popup
    v-model="popupShow"
    popup-transition="popup-fade"
    class="popup"
  >
    <div class="title">
      <em class="brand" v-if="rst.is_premium">品牌</em>
      <h3 class="name">{{rst.name}}</h3>
    </div>
    <section>
      <ul class="list">
        <li class="item">
          <em class="top">{{rst.rating}}</em>
          <span class="bottom">评分</span>
        </li>
        <li class="item">
          <em class="top">{{rst.recent_order_num}}</em>
          <span class="bottom">月售</span>
        </li>
        <li class="item" v-if="rst.delivery_mode">
          <em class="top">{{rst.delivery_mode.text}}</em>
          <span class="bottom">约{{rst.float_minimum_order_amount}}分钟</span>
        </li>
        <li class="item">
          <em class="top">￥{{rst.float_delivery_fee}}元</em>
          <span class="bottom">配送费</span>
        </li>
        <li class="item">
          <em class="top">{{(rst.distance / 1000).toFixed(2)}}km</em>
          <span class="bottom">距离</span>
        </li>
      </ul>
    </section>
    <div class="promition">
      <em>公 告</em>
    </div>
    <div class="promotion-info">
      <p class="tip">{{rst.promotion_info}}</p>
    </div>
    <i class="fa fa-times-circle" @click="handleTitlePopup(false)"></i>
  </mt-popup>
</template>

<script>
export default {
  name: 'DetailTitleModal',
  props: {
    rst: Object
  },

  data () {
    return {
      popupShow: false
    }
  },

  activated () {
    this.popupShow = false;
  },

  mounted () {
    this.$bus.$on('handleTitlePopup', (show) => this.handleTitlePopup(show));
  },

  methods: {
    handleTitlePopup (show) {
      this.popupShow = show;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.popup {
  width: 30rem;
  padding: 1.5rem 1rem;
  background-color: #fff;
  border-radius: 5px;

  .title {
    flex-row();
    padding: 0 1rem;
    margin-bottom: 2rem;

    .brand {
      width: 5.5rem;
      height: 1.8rem;
      margin-top: 0.3rem;
      padding: 0.2rem 0.5rem;
      background-color: #FFEB3B;
      text-align: center;
      line-height: 1.8rem;
    }

    .name {
      display: inline-block;
      font-size: 2.2rem;
      color: #000;
      text-align: center;
      line-height: 2.8rem;
    }
  }

  .list {
    flex-row();

    .item {
      flex-column();
      vh-center();
      width: 25%;

      .top {
        font-weight: bold;
      }

      .bottom {
        margin-top: 1rem;
        color: #999;
        font-size: 1.2rem;
      }
    }
  }

  .promition {
    margin: 2rem 0 1rem;
    text-align: center;

    em {
      position: relative;
      color: #000;
      font-size: 1.6rem;

      &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 2.2rem;
        height: 0.07rem;
      }

      &::before {
        left: -3rem;
        background: linear-gradient(-90deg, #000, #555, #999, #eee);
      }

      &::after {
        right: -3rem;
        background: linear-gradient(90deg, #000, #555, #999, #eee);
      }
    }
  }

  .promotion-info {
    margin: 0 0 0.5rem 1rem;
  }

  .fa {
    position: absolute;
    left: 50%;
    bottom: -4.5rem;
    transform: translateX(-50%);
    color: #eee;
    font-size: 3rem;
  }
}
</style>