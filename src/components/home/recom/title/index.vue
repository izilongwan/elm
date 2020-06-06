<template>
  <!-- 推荐标题 -->
  <h4 class="title">
    <em>推荐商家</em>
  </h4>
</template>

<script>
export default {
  name: 'RecomTitle'
}
</script>

<style lang="stylus" scoped>
.title {
  height: 5rem;
  background-color: #fff;
  color: #333;
  font-size: 1.8rem;
  text-align: center;
  line-height: 5rem;

  em {
    position: relative;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 0.1rem;
      background-color: #333;
      transform: translateY(-50%);
    }

    &::before {
      left: -4rem;
    }

    &::after {
      right: -4rem;
    }
  }
}
</style>
