<template>
  <!-- 登录 LOGO -->
  <div class="logo-wrap">
    <img src="~images/logo.png" alt="饿了么" />
  </div>
</template>

<script>
export default {
  name: 'LoginLogo',
  props: {
    logoStyle: Object
  }
}
</script>

<style lang="stylus" scoped>
.logo-wrap {
  width: 130px;
  margin: 4rem auto 2rem;
}
</style>
