<template>
  <!-- City 页面 -->
  <div class="container">
    <!-- City 头部城市检索 -->
    <CommonSearchHeader
      placeholder="请输入城市名称"
      @searchKeywordsChange="searchKeywordsChange"
    />

    <template v-if="searchRes.length <= 0">
      <!-- City 定位城市 -->
      <CityGeo :address="geoCity" />

      <!-- City 城市滚动区域 -->
      <CityScrollWrapper :cityInfo="cityInfo" :keys="keys" />

      <!-- City 字母表 -->
      <CityAlphabet :keys="keys" />
    </template>

    <!-- 城市搜索的结果 -->
    <CitySearchRes v-else :searchRes="searchRes" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { CityModel } from 'models/city';
import cityInfo from 'data/cities';

import CommonSearchHeader from 'components/header/commonSearch';
import CityGeo from 'components/sub/geo';
import CityAlphabet from 'components/city/alphabet';
import CityScrollWrapper from 'components/scrollWrapper/city';
import CitySearchRes from 'components/scrollWrapper/city/searchRes';

export default {
  name: 'City',
  components: {
    CommonSearchHeader,
    CityGeo,
    CityScrollWrapper,
    CityAlphabet,
    CitySearchRes
  },

  data () {
    return {
      cityInfo,
      keys: [],
      allCities: [],
      searchRes: []
    }
  },

  mounted () {
    this.formatKeys(this.cityInfo);
  },

  methods: {
    formatKeys (data) {
      const keys = Object.keys(data);

      keys.pop();
      keys.sort();
      this.keys = keys;

      this.formateCities(keys);
    },

    formateCities (data) {
      this.keys.forEach(key => {
        this.cityInfo[key].forEach(val => this.allCities.push(val));
      })
    },

    searchKeywordsChange (keywords) {
      if (keywords) {
        return this.searchRes = this.allCities.filter(val =>
          val.name.indexOf(keywords) !== -1
        );
      }

      this.searchRes = [];
    }
  },

  computed: {
    ...mapState(['LOCATION']),

    geoCity () {
      if (this.LOCATION.addressComponent) {
        return this.LOCATION.addressComponent.city || this.LOCATION.addressComponent.province
      }
      return '';
    },
  }
}
</script>