<template>
  <!-- Index 头部 -->
  <header class="header">
    <em class="txt">饿了么</em>
  </header>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: $defaultBg;
  height: $headerHeight;
  padding-left: 2rem;
  line-height: $headerHeight;
  border: none;
  color: #fff;

  .txt {
    font-family: '幼圆';
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>