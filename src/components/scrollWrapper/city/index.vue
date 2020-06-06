<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scoll-content" @click="clickCities">
      <!-- 城市滚动区域 -->
      <template>
        <HotCity :hotCities="cityInfo.hotCities" />
        <AllCities :cityInfo="cityInfo" :keys="keys" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import tools from 'utils/tools';
import BScroll from 'better-scroll';

import HotCity from './hot';
import AllCities from './cities';

export default {
  name: 'CityScrollWrapper',

  props: {
    cityInfo: Object,
    keys: Array
  },

  components: {
    HotCity,
    AllCities
  },

  data () {
    return {
      titles: {}
    };
  },

  mounted () {
    this.initBScroll();
    this.busOn();
  },

  deactivated () {
    this.scroll.scrollTo(0, 0);
  },

  methods: {
    ...mapMutations(['SET_ADDRESS', 'SET_LOCATION']),

    busOn () {
      this.$bus.$on('getCityTitles', (res) => this.formateTitles(res));
      this.$bus.$on('scrollToTitle', (idx) => this.scrollToTitle(idx));
    },

    initBScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 2
      });

      this.scroll.on('scroll', this.handlerScroll);
    },

    formateTitles (res) {
      const titles = {};

      titles[0] = {
        top: 0
      };

      res.forEach((val, idx) => {
        const top = val.offsetTop;

        titles[idx + 1] = {
          top,
          el: val
        };
      });

      this.titles = titles;
    },

    scrollToTitle (idx) {
      const el = this.titles[idx].el;

      el ? this.scroll.scrollToElement(el, 500)
        : this.scroll.scrollTo(0, 0, 500);
    },

    handlerScroll: tools._throttle(function (pos) {
      const top = -pos.y;

      for (const [idx, val] of Object.entries(this.titles)) {
        if (top <= val.top) {
          return this.$bus.$emit('changeAlphbet', idx - 1);
        }
      }

    }, 500),

    clickCities (e) {
      const tar = e.target,
        item = tar.dataset.item;

      if (item) {
        const location = JSON.parse(item),
          city = location.name,
          lnglat = [location.longitude, location.latitude];

        const callback = (res) => {
          // 提交定位 Vuex
          this.SET_LOCATION({
            addressComponent: res.addressComponent,
            formattedAddress: res.formattedAddress
          });
          this.SET_ADDRESS(res.formattedAddress);
          this.$router.push('/home');
        }

        // 转换地理位置
        tools.AMap.geoCoder({ city, lnglat }, callback);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  position: absolute;
  top: 16rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .scoll-content {
    background-color: #fff;
  }
}
</style>
