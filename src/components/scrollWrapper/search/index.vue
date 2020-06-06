<template>
  <!-- 搜索区域 -->
  <div class="scroll-wrapper">
    <div class="scroll-content">
      <template v-if="shopList.length > 0">
        <!-- 导航过滤 -->
        <FilterNav
          style="top: 0;"
          :recomDatas="recomDatas"
        />

        <!-- 搜索列表 -->
        <SearchShopList :shopList="shopList" />
      </template>

      <template
        v-else-if="restaurants.length > 0 || words.length > 0"
      >
        <!-- 搜索店铺列表 -->
        <SearchRestaurantList
          @click.native="searchList"
          :list="restaurants"
        />

        <!-- 搜索关键词列表 -->
        <SearchKeywordsList
          @click.native="searchList"
          :list="words"
        />
      </template>

      <template
        v-else-if="noDataTipShow && restaurants.length <= 0 && words.length <= 0"
      >
        <!-- 无搜索结果 -->
        <SearchNoDataTip />
      </template>
    </div>
  </div>
</template>

<script>
import { SearchModel } from 'models/search';
import tools from 'utils/tools';

import FilterNav from 'components/sub/nav';
import SearchShopList from 'components/sub/shopList';
import SearchRestaurantList from './restaurantList';
import SearchKeywordsList from './keywordsList';
import SearchNoDataTip from 'components/sub/noDataTip';

export default {
  name: 'SearchScrollWrapper',
  components: {
    FilterNav,
    SearchShopList,
    SearchRestaurantList,
    SearchKeywordsList,
    SearchNoDataTip
  },

  props: {
    keywords: String
  },

  data () {
    return {
      restaurants: [],
      words: [],
      noDataTipShow: false,
      recomDatas: {},
      shopList: [],
      page: 1,
      num: 7,
      data: {},
      isShopListshow: false,
      allLoaded: false,
      bottomPullText: '上拉加载更多'
    }
  },

  mounted () {
    this.searchModel = new SearchModel();
    this.busOn();
  },

  watch: {
    keywords: {
      handler: tools._throttle(function (keys) {
        if (keys.length > 0) {
          return this.getKeywordsSearch(keys);
        }

        this.noDataTipShow = false;
        this.shopList = [];
        this.restaurants = [];
      })
    }
  },

  deactivated () {
    this.restaurants = [];
    this.words = [];
    this.shopList = [];
    this.noDataTipShow = false;
  },

  methods: {
    busOn () {
      this.$bus.$on('loadTopMore', () => this.loadTopMore());
      this.$bus.$on('loadBottomMore', () => this.loadBottomMore());
      this.$bus.$on('changeSortCode', (item, idx) => this.changeSortCode(item, idx));
    },

    getFilter () {
      this.searchModel
        .getFilter()
        .then(res => {
          res && (this.recomDatas = res);
        })
        .catch(error => console.log(error));
    },

    getShopList (loadMore = false) {
      const data = {
        page: this.page,
        num: this.num,
        data: this.data
      }

      return this.searchModel
        .getShopList(data)
        .then(res => {
          if (res) {
            !loadMore && (this.shopList = res);
            this.isShopListshow = true;
            return res;
          }
        })
        .catch(error => console.log(error));
    },

    getKeywordsSearch (keywords) {
      this.searchModel
        .getKeywordsSearch(keywords)
        .then(res => {
          this.noDataTipShow = false;
          if (res) {
            this.restaurants = res.restaurants;
            this.words = res.words;

            if (this.restaurants.length <= 0 && this.words.length <= 0) {
              this.noDataTipShow = true;
            }
          }
          // console.log(keywords, res);
        })
        .catch(error => console.log(error))
    },

    searchList () {
      // this.getFilter();
      this.getShopList();
    },

    loadTopMore () {
      this.allLoaded = false;
      this.bottomPullText = '上拉加载更多';
      this.page = 1;

      this.getShopList()
        .then(() => this.$bus.$emit('loadTopLoaded'))
        .catch(() => {
          this.$bus.$emit('loadTopLoaded');
          this.bottomPullText = '刷新失败';
        });
    },

    loadBottomMore () {
      if (this.allLoaded) {
        return;
      }

      this.page++;

      this.getShopList(true)
        .then(res => {
          const len = res.length;

          if (len < this.num) {
            this.allLoaded = true;
            this.bottomPullText = '- 宝宝加载完毕了 -';
          }
          this.shopList = this.shopList.concat(res);
          this.$bus.$emit('loadBottomLoaded');
        })
        .catch(() => {
          this.$bus.$emit('loadTopLoaded');
          this.bottomPullText = '加载失败';
        });
    },

    changeSortCode (item, idx) {
      let code = null;

      switch (idx) {
        case 0:
          code = item.code;
          this.recomDatas.navTab[idx].name = item.name;
          this.recomDatas.navTab[idx].code = code;
          break;
        case 1:
        case 2:
          code = item.condition;
          break;
        case 3:
          code = item;
          break
        default:
          break;
      }

      this.data = { condition: code };
      this.getShopList();
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
  position: absolute;
  top: 9.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
