<template>
  <div class="base-tip" v-if="rst">
    <p class="tip">
      <em>评分{{rst.rating}}</em>
      <em>月售{{rst.recent_order_num}}单</em>
      <em
        v-if="rst.delivery_mode"
      >蜂鸟专送约{{rst.float_minimum_order_amount}}分钟</em>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseTip',
  props: {
    rst: Object,
    activaties: Array
  }
}
</script>

<style lang="stylus" scoped>

.base-tip {
  background-color: #fff;
  padding: 0.5rem 2rem;

  .tip {
    text-align: center;

    em {
      margin-right: 0.8rem;
    }
  }
}
</style>