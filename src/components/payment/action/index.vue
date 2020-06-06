<template>
  <!-- 支付方式 -->
  <div class="action">
    <ul class="list">
      <li class="item" :class="{ active: curIdx === 0 }">
        <div class="info">
          <div class="img-wrap">
            <img src="~images/wechat.jpg" alt="item" />
          </div>
          <span class="txt">微信支付</span>
        </div>
        <span class="check">
          <i class="fa fa-check-circle"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaymentAction',
  data () {
    return {
      curIdx: 0
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.action {
  background-color: #fff;

  .item {
    flex-row();
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .info {
      flex-row();
      align-items: center;

      .img-wrap {
        width: 4rem;
      }

      .txt {
        margin-left: 1rem;
        font-size: 1.6rem;
        color: #000;
      }
    }

    .check {
      vh-center();
      width: 4rem;

      .fa {
        font-size: 2.5rem;
      }
    }

    &.active {
      .fa {
        color: $defaultGreen;
      }
    }
  }
}
</style>
