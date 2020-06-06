<template>
  <!-- 搜索定位弹窗 -->
  <mt-popup
    v-model="popupShow"
    position="right"
    popup-transition="popup-slide"
    class="popup"
  >
    <!-- 搜索输入头部 -->
    <CommonSearchHeader
      placeholder="请输入小区/学校/写字楼"
      @searchKeywordsChange="searchKeywordsChange"
    />

    <!-- 头部真正的返回功能按钮 -->
    <span class="icon-back" @click="popupShow = false"></span>

    <!-- Location 搜索结果 -->
    <LocationScrollWrapper
      class="top-6"
      :searchRes="searchRes"
      :clickAreaItem="clickAreaItem"
    />
  </mt-popup>
</template>

<script>
import tools from 'utils/tools';

import CommonSearchHeader from 'components/header/commonSearch';
import LocationScrollWrapper from 'components/scrollWrapper/location';

export default {
  name: 'AddressPositionPopup',

  props: {
    city: String
  },

  data () {
    return {
      popupShow: false,
      searchRes: [],
      searchVal: ''
    }
  },

  components: {
    CommonSearchHeader,
    LocationScrollWrapper
  },

  mounted () {
    this.$bus.$on('handlePositionPopup', (show) =>
      this.popupShow = show
    );
  },

  watch: {
    popupShow (show) {
      if (!show) {
        this.$bus.$emit('restorePositionPopupSearchkeywords', '');
      }
    }
  },

  methods: {
    searchKeywordsChange (keywords) {
      if (keywords) {
        const city = this.city;
        const callback = (result) => (
          this.searchRes = result.tips
        )

        // 搜索结果
        return tools.AMap.searchResult({ city, keywords }, callback);
      }

      this.searchRes = [];
    },

    clickAreaItem (data) {
      const address = data.district + data.address + data.name;

      this.$emit('addressAddPopupLocation', address);
      this.popupShow = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.popup {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $containerBg;

  .icon-back {
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    height: 5rem;
  }

  .top-6 {
    top: 6rem;
    max-height: 50rem;
  }
}
</style>
