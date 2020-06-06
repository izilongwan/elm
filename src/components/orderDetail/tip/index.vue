<template>
  <div class="tip">
    <p class="one">订单已送达</p>
    <p class="two">感谢您对饿了么的信任，期待再次光临！</p>
  </div>
</template>

<script>
export default {
  name: 'OrderDetailTip'
}
</script>

<style lang="stylus" scoped>
.tip {
  margin: 1rem 1rem 0;
  background-color: #fff;
  padding: 0 1.5rem;

  .one {
    font-size: 2.5rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid #eee;
  }

  .two {
    padding: 1.5rem 0;
  }
}
</style>