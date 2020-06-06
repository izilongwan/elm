<template>
  <div class="order">
    <h3 class="title">订单信息</h3>
    <div class="cell">支付方式：在线支付</div>
    <div class="cell">订单编号：{{id}}</div>
    <div class="cell">
      下单时间：
      <span class="light">{{time}}</span>
    </div>
    <div class="cell">
      订单备注：
      <span class="light">{{remark}}</span>
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'OrderOrderInfo',
  props: {
    remark: String,
    id: String,
    date: Number
  },

  computed: {
    time () {
      return tools.formatTime(this.date);
    }
  }
}
</script>

<style lang="stylus" scoped>
.order {
  margin: 1rem;
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
      line-height: 2rem;
    }
  }
}
</style>
