<template>
  <!-- 送达时间 -->
  <div class="delivery">
    <div class="cell">
      <div class="first">
        <em>送达时间</em>

        <span
          class="mode"
          v-if="rst.delivery_mode"
        >{{rst.delivery_mode.text}}</span>
      </div>

      <div class="two">
        <span>尽快送达({{deliveryTime}}送达)</span>

        <i class="fa fa-angle-right"></i>
      </div>
    </div>

    <div class="cell">
      <em class="first pay">支付方式</em>

      <span class="two mode">在线支付</span>
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'SettlementDelivery',
  props: {
    rst: Object
  },

  computed: {
    deliveryTime () {
      const d = new Date(),
        m = d.getMinutes() + this.rst.order_lead_time;

      d.setMinutes(m);

      return `${ tools.formatTimeAddZore(d.getHours()) }:${ tools.formatTimeAddZore(d.getMinutes()) }`;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.delivery {
  position: relative;
  width: 95%;
  margin: 1rem auto;
  padding: 0 2rem;
  background-color: #fff;

  .cell {
    flex-row();
    justify-content: space-between;
    align-items: center;
    align-items: center;
    padding: 2rem 0;
    font-size: 1.6rem;
    font-weight: bold;

    & + .cell {
      border-top: 1px solid #eee;
    }

    .first {
      flex-column();
      align-items: center;

      em {
        font-size: 1.8rem;
        font-weight: bold;
      }

      .mode {
        width: 5.8rem;
        padding: 0.2rem 0;
        margin-top: 0.2rem;
        background-color: $defaultBg;
        color: #fff;
        text-align: center;
        font-size: 1.3rem;
        font-weight: normal;
      }
    }

    .two {
      color: $defaultBg;

      .fa {
        margin-left: 1rem;
      }
    }

    .pay {
      font-size: 1.8rem;
    }
  }
}
</style>
