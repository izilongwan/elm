<template>
  <!-- 左侧菜单滚动区域 -->
  <div class="scroll-wrapper" ref="wrapper" v-if="menu">
    <div class="scroll-content">
      <ul class="list">
        <DetailOrderLeftMenuItem
          ref="menus"
          :key="idx"
          :item="item"
          :idx="idx"
          :menuIdx="menuIdx"
          v-for="(item, idx) of menu"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

import DetailOrderLeftMenuItem from './sub';

const DELAY = 500;

export default {
  name: 'DetailOrderLeftMenu',
  props: {
    menu: Array,
    menuIdx: Number
  },

  data () {
    return {
      menus: [],
      middleMenuLen: 0
    };
  },

  components: { DetailOrderLeftMenuItem },

  mounted () {
    this.menus = this.$refs.menus.map((val) => val.$el);
    this.middleMenuLen = Math.floor((this.menus.length - 1) / 2);
    this.$nextTick(
      () =>
        (this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 1
        }))
    );
  },

  watch: {
    menuIdx (idx) {
      const el = this.menus[idx];

      if (idx >= this.middleMenuLen) {
        this.scroll.scrollToElement(el, DELAY);
      } else {
        this.scroll.scrollTo(0, 0, DELAY);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  width: 10rem;
  height: 30rem;
  background-color: #ffcccc21;
  overflow: hidden;
}
</style>
