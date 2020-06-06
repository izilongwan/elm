<template>
  <!-- 城市搜索滚动区域 -->
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scoll-content">
      <div class="search-res">
        <ul class="list" @click="clickCities">
          <li
            class="item"
            v-for="item of searchRes"
            :key="item.id"
            :data-item="JSON.stringify(item)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';

export default {
  name: 'CitySearchRes',
  props: {
    searchRes: Array
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
  },

  methods: {
    ...mapMutations(['SET_ADDRESS', 'SET_LOCATION']),

    clickCities (e) {
      const tar = e.target,
            item = tar.dataset.item;

      if (item) {
        const location = JSON.parse(item),
              city = location.name,
              lnglat = [location.longitude, location.latitude];

        this.geoCoder(city, lnglat);
      }
    },

    geoCoder (city, lnglat) {
      const _self = this;

      AMap.plugin('AMap.Geocoder', function () {
        const geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city
        });

        geocoder.getAddress(lnglat, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            // console.log(result);
            const res = result.regeocode;

            // 提交定位 Vuex
            _self.SET_LOCATION({
              addressComponent: res.addressComponent,
              formattedAddress: res.formattedAddress
            });
            _self.SET_ADDRESS(res.formattedAddress);
            _self.$router.push('/home');
          }
        });
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  max-height: 50rem;
  overflow: hidden;

  .search-res {
    padding: 1rem 0;
    background-color: #fff;

    .list {
      .item {
        padding: 1.2rem 2rem;
        font-size: 1.6rem;

        & + .item {
          border-top: 1px solid #eee;
        }
      }
    }
  }
}
</style>