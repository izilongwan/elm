<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <ul
        class="list"
        v-show="searchRes && searchRes.length > 0"
      >
        <SearchItem
          v-for="(item, idx) of searchRes"
          :key="idx"
          :item="item"
          :clickAreaItem="clickAreaItem"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import SearchItem from './sub';

export default {
  name: 'LocationScrollWrapper',
  components: { SearchItem },
  props: {
    searchRes: Array,
    clickAreaItem: Function
  },

  mounted () {
    this.$nextTick(() => new BScroll(this.$refs.wrapper, { click: true }));
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  position: absolute;
  top: 20rem;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
