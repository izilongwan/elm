<template>
  <div class="address">
    <h3 class="title">配送信息</h3>
    <div class="cell">
      送达时间：
      <span class="light">{{time}}</span>
    </div>
    <div class="cell info">
      <p class="tip">送货地址：</p>
      <div class="main">
        <p class="name">{{address.name}} {{address.sex}}</p>
        <p class="phone">{{address.phone}}</p>
        <p class="desc">{{address.address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'OrderDetailAddressInfo',
  props: {
    address: Object,
    date: Number,
    orderLeadTime: Number
  },

  computed: {
    time () {
      return tools.formatTime(this.date + this.orderLeadTime * 60 * 1000);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.address {
  margin: 1rem 1rem 0;
  padding: 0 1rem;
  background-color: #fff;
  font-size: 1.4rem;

  .title {
    padding: 1.5rem 0;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .cell {
    padding: 1.5rem 0;
    border-top: 1px solid #eee;

    .light {
      color: #999;
    }
  }

  .info {
    flex-row();

    .tip {
      width: 15rem;
    }

    .main {
      line-height: 2.2rem;
    }
  }
}
</style>
