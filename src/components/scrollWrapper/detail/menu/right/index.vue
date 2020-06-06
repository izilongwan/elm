<template>
  <!-- 右侧商品滚动区域 -->
  <div class="scroll-wrapper" ref="wrapper" v-if="menu">
    <div class="scroll-content">
      <section>
        <!-- 商品列表 -->
        <DetailOrderRightList
          v-for="(item, idx) of menu"
          :key="idx"
          :item="item"
          ref="menuList"
        />
      </section>
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';
import BScroll from 'better-scroll';

import DetailOrderRightList from './sub';

const DELAY = 300;

export default {
  name: 'DetailOrderRightScroll',
  props: {
    menu: Array,
    menuIdx: Number
  },

  data () {
    return {
      menuList: [],
      t: null
    };
  },

  components: { DetailOrderRightList },

  mounted () {
    this.menuList = this.$refs.menuList.map((val) => val.$el);
    this.initBScroll();
    this.$bus.$on('menuListScrollTo', (idx) => this.scrollTo(idx));
  },

  deactivated () {
    this.scroll.scrollTo(0, 0);
  },

  methods: {
    initBScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 3
        });
        this.scroll.on('scroll', this.scrollEvent);
      });
    },

    scrollEvent: tools._throttle(function (pos) {
      const y = -pos.y;

      this.menuList.some((val, idx) => {
        if (y < val.offsetTop) {
          const curIdx = idx - 1 <= 0 ? 0 : idx - 1;

          this.$bus.$emit('menuIdxChange', curIdx, false);
          return true;
        }
      });
    }, DELAY),

    scrollTo (idx) {
      const el = this.menuList[idx];

      this.noHaveScrollEvent();
      this.scroll.scrollToElement(el, DELAY);
    },

    noHaveScrollEvent () {
      this.scroll.off('scroll', this.scrollEvent);
      this.t && clearInterval(this.t);
      this.t = null;
      this.t = setTimeout(() => {
        this.scroll.on('scroll', this.scrollEvent);
      }, DELAY + 50);
    }
  }
};
</script>

<style lang = "stylus" scoped>
@import '~styles/mixins.styl';

.scroll-wrapper {
  flex: 1;
  height: 40rem;
  background-color: #fff;
  overflow-y: hidden;
}
</style>
