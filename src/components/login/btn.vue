<template>
  <!-- 登录按钮 -->
  <div class="login-btn">
    <button class="btn" @click="$emit('clickLoginBtn')" :disabled="disabled">登 录</button>
  </div>
</template>

<script>
export default {
  name: 'LoginBtn',
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.login-btn {
  margin: 0 3.6rem;

  .btn {
    width: 100%;
    height: 3.6rem;
    background-color: $defaultGreen;
    border-radius: 5px;
    color: #fff;
    word-spacing: 1rem;
    transition: background-color .5s;

    &:disabled {
      background-color: #ccc;
      color: #999;
    }
  }
}
</style>