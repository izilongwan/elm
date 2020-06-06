<template>
  <div class="search-bd">
    <!-- 定位页面的搜索 -->
    <router-link to="city" class="city-wrap">
      <em class="city">{{city}}</em>
      <i class="fa fa-angle-down"></i>
    </router-link>
    <div class="input-wrap">
      <i class="fa fa-search"></i>
      <input
        type="text"
        v-model.trim="searchKw"
        placeholder="学校/写字楼/小区"
      />
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'LocationSearch',

  data () {
    return {
      searchKw: ''
    }
  },

  props: {
    city: String
  },

  deactivated () {
    this.searchKw = '';
  },

  watch: {
    searchKw (keywords) {
      const city = this.city;
      const callback = (result) => (
        this.$emit('locationSearchResult', result.tips)
      )

      // 搜索结果
      tools.AMap.searchResult({ city, keywords }, callback);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.search-bd {
  flex-row();
  background-color: #fff;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  line-height: 4rem;

  .city-wrap {
    ellipsis();
    width: 10rem;
    background-color: #eee;
    border-radius: 10px 0 0 10px;
    box-sizing: border-box;
    padding: 0 1rem;
    text-align: center;

    .fa {
      padding-left: 1rem;
    }
  }

  .input-wrap {
    flex: 1;
    background-color: #eee;
    border-radius: 0 10px 10px 0;

    .fa {
      color: #999;
      padding: 0 0.5rem;
    }
  }
}
</style>