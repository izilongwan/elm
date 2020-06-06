<template>
  <!-- 支付倒计时 -->
  <div class="cut-down">
    <div class="cell">
      <p class="title">支付倒计时</p>
      <span class="time">{{countdown}}</span>
    </div>
    <div class="info">
      <h3 class="name">{{name}}</h3>
      <em class="price">￥{{(totalPrice).toFixed(2)}}</em>
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'PaymentCountdown',
  props: {
    name: String,
    totalPrice: Number
  },

  data () {
    return {
      countdown: '00:15:00',
      t: null
    }
  },

  mounted () {
    this.timeCountdown();
  },

  methods: {
    timeCountdown () {
      let minutes = 14,
        seconds = 59;

      this.t = setInterval(() => {
        seconds--;

        if (minutes <= 0 && seconds <= 0) {
          clearTimeout(this.t);
          this.t = null;
          this.countdown = '订单已超时';
          this.$emit('paymentTimeout');
        } else {
          if (seconds <= 0) {
            seconds = 59;
            minutes--;
          }

          this.countdown = `00:${ tools.formatTimeAddZore(minutes) }:${ tools.formatTimeAddZore(seconds) }`;
        }
      }, 1000);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.cut-down {
  background-color: #fff;

  .cell {
    padding: 3rem 0;
    text-align: center;
    font-size: 1.6rem;
    color: #000;

    .title {
      margin: 1rem 0;
      color: #000;
    }

    .time {
      font-weight: bold;
      font-size: 3rem;
    }
  }

  .info {
    flex-row();
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-top: 1px solid #eee;
    font-size: 1.6rem;

    .name {
      ellipsis();
      max-width: 70%;
      font-weight: bold;
    }

    .price {
      font-weight: bold;
      color: $defaultOrange;
    }
  }
}
</style>
