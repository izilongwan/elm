<template>
  <!-- Location 定位页面 -->
  <div class="container">
    <!-- Location 头部 -->
    <CommonHeader title="请选择收货地址" />

    <!-- Location 定位搜索 -->
    <LocationSearch
      :city="GEO_CITY"
      @locationSearchResult="(res) => searchRes = res"
    />

    <!-- Location 定位位置 -->
    <LocationGeo :address="GEO_ADDRESS" />

    <!-- Location 搜索结果 -->
    <LocationScrollWrapper
      :searchRes="searchRes"
      :clickAreaItem="clickAreaItem"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import tools from 'utils/tools';

import CommonHeader from "components/header/common";
import LocationSearch from 'components/location/search';
import LocationGeo from 'components/sub/geo';
import LocationScrollWrapper from 'components/scrollWrapper/location';

export default {
  name: 'Location',
  components: {
    CommonHeader,
    LocationSearch,
    LocationGeo,
    LocationScrollWrapper
  },

  data () {
    return {
      searchRes: []
    }
  },

  computed: {
    ...mapGetters(['GEO_CITY', 'GEO_ADDRESS'])
  },

  methods: {
    ...mapMutations(['SET_ADDRESS', 'SET_LOCATION']),

    clickAreaItem (data) {
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
      tools.AMap.geoCoder(data, callback);
    }
  }
}
</script>