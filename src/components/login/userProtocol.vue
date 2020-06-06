<template>
  <!-- 用户服务协议 -->
  <div class="user-protocol">
    新用户登录即自动注册，表示已同意
    <em class="protocol">《用户服务协议》</em>
    和
    <em class="protocol">《隐私权政策》</em>
  </div>
</template>

<script>
export default {
  name: 'LoginUserProtocol'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.user-protocol {
  margin: 1rem 3.6rem 1.5rem;
  line-height: 1.8rem;

  .protocol {
    color: $defaultBg;
  }
}
</style>