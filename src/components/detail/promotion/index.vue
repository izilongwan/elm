<template>
  <p class="promotion" v-if="promotion">公告：{{promotion}}</p>
</template>

<script>
export default {
  name: 'DetailPromotion',
  props: {
    promotion: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.promotion {
  ellipsis();
  padding: 1.5rem 2rem;
  background-color: #fff;
  color: #999;
}
</style>