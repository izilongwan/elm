<template>
  <!-- 确认支付按钮 -->
  <div class="btn-wrap">
    <button class="btn" :disabled="disabledBtn" @click="$emit('handlePayAction')">确认支付</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentBtn',
  props: {
    disabledBtn: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.btn-wrap {
  margin-top: 2rem;
  text-align: center;

  .btn {
    width: 90%;
    height: 4rem;
    color: #fff;
    background-color: $defaultGreen;
    font-size: 1.8rem;

    &[disabled] {
      background-color: #999;
    }
  }
}
</style>