<template>
  <!-- 轮播图 -->
  <div class="swiper-bd">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, idx) of swipers" :key="idx">
        <img :src="item" v-lazy="item" alt="swiper" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'MySwiper',
  props: {
    swipers: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.swiper-bd {
  height: 10rem;
  background-color: $preloadBg;

  img {
    min-height: 10rem;

    &[lazy=loading] {
      background-color: $preloadBg;
    }
  }
}
</style>