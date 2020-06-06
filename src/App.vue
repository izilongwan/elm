<template>
  <div id="app" class="app">
    <!-- 过渡组件 -->
    <transition :name="transitionName">
      <!-- 缓存组件 -->
      <keep-alive>
        <!-- 视图 -->
        <router-view class="view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import tools from 'utils/tools';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'App',

  data () {
    return {
      transitionName: ''
    };
  },

  created () {
    this.getLocation();
  },

  methods: {
    ...mapMutations(['SET_LOCATION', 'SET_ADDRESS']),

    getLocation () {
      const _self = this;

      // 获取精准定位
      tools.AMap.getLocation({
        success (data) {
          // 提交定位 Vuex
          _self.SET_LOCATION(data);
          _self.SET_ADDRESS(data.formattedAddress);
        },
        error () {
          _self.getLngLatLocation();
        }
      })
    },

    getLngLatLocation () {
      const _self = this;

      // 获取IP定位
      tools.AMap.getLngLatLocation((res) => {
        // 提交定位 Vuex

        _self.SET_LOCATION({
          addressComponent: res.addressComponent,
          formattedAddress: res.formattedAddress
        });
        _self.SET_ADDRESS(res.formattedAddress);
      })
    }
  },

  watch: {
    $route (to, from, next) {
      this.transitionName =
        to.meta.index > from.meta.index ? 'slide-left' : 'slide-right';
    }
  }
};
</script>

<style lang="stylus" scoped>
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.5s, transform 0.5s;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translateX(10rem);
}

.slide-right-enter, .slide-left-leave-active {
  opacity: 0;
  transform: translateX(-10rem);
}
</style>
