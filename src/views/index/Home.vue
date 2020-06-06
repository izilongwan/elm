<template>
  <div class="child-container scroll">
    <!-- Home 头部 -->
    <HomeHeader />

    <!-- Home 地理位置 -->
    <HomeAddress :address="GEO_ADDRESS" />

    <!-- Home 假搜索 -->
    <HomeFalseSearch />

    <!-- 轮播图 -->
    <HomeSwiper :swipers="swipers" />

    <!-- 入口分类 -->
    <HomeCategory :entries="entries" />

    <!-- 分类导航 -->
    <HomeRecom
      :recomDatas="recomDatas"
      :shopList="shopList"
      :allLoaded="allLoaded"
      :bottomPullText="bottomPullText"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { HomeModel } from 'models/home';
import { Toast } from 'mint-ui';
import HomeHeader from 'components/header/index';
import HomeAddress from 'components/home/address';
import HomeFalseSearch from 'components/home/falseSearch';
import HomeSwiper from 'components/sub/swiper';
import HomeCategory from 'components/home/category';
import HomeRecom from 'components/home/recom';
import axios from 'axios';

export default {
  name: 'IndexHome',
  components: {
    HomeHeader,
    HomeAddress,
    HomeFalseSearch,
    HomeSwiper,
    HomeCategory,
    HomeRecom
  },

  computed: {
    ...mapGetters(['GEO_ADDRESS'])
  },

  data () {
    return {
      swipers: [],
      entries: [],
      recomDatas: {},
      shopList: [],
      allShopList: [],
      page: 1,
      num: 5,
      data: {},
      count: 0,
      maxCount: 10,
      allLoaded: false,
      bottomPullText: '上拉加载更多'
    };
  },

  mounted () {
    this.homeModel = new HomeModel();
    this.busEvent();
    this.getDatas();
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('loadTopMore', () => this.loadTopMore());
      $bus.$on('loadBottomMore', () => this.loadBottomMore());
      $bus.$on('changeSortCode', (item, idx) => this.changeSortCode(item, idx));
    },

    getDatas () {
      const { getShop, getShopList } = this;
      const promises = [getShop(), getShopList()];

      axios
        .all(promises)
        .then(
          ([
            {
              data: { swipeImgs, entries, filter }
            },
            { data: list }
          ]) => {
            this.swipers = swipeImgs;
            this.entries = entries;
            this.recomDatas = filter;
            !this.loadMore && (this.shopList = list);
          }
        )
        .catch((err) => {
          console.log('err', err);
          Toast({
            message: '网络发生错误',
            iconClass: 'mintui mintui-error'
          });
        });
    },

    getShop () {
      return this.homeModel.getShop();
    },

    getShopList () {
      const { page, num } = this;

      const data = { page, num };

      return this.homeModel.getShopList(data).then((res) => res);
    },

    loadTopMore () {
      this.allLoaded = false;
      this.bottomPullText = '上拉加载更多';
      this.page = 1;

      const { $bus } = this;

      this.getShopList()
        .then(() => $bus.$emit('loadTopLoaded'))
        .catch(() => {
          $bus.$emit('loadTopLoaded');
          this.bottomPullText = '刷新失败';
        });
    },

    loadBottomMore (e) {
      if (this.allLoaded) {
        return;
      }

      this.page = this.page >= 3 ? 0 : this.page;
      this.page++;
      this.count++;

      this.getShopList()
        .then(({ data }) => {
          const len = data.length;

          if (this.count > this.maxCount) {
            this.allLoaded = true;
            this.bottomPullText = '- 宝宝加载完毕了 -';
          }

          this.shopList.push(...data);
          this.allShopList = [...this.shopList];
          this.formatData();
          this.$bus.$emit('loadBottomLoaded');
        })
        .catch(() => {
          this.$bus.$emit('loadTopLoaded');
          this.bottomPullText = '加载失败';
        });
    },

    changeSortCode (item, idx) {
      let type = null;

      switch (idx) {
        case 0:
          type = item.code;
          this.recomDatas.navTab[idx].name = item.name;
          this.recomDatas.navTab[idx].code = type;
          break;
        case 1:
        case 2:
          type = item.condition;
          break;
        case 3:
          type = item;
          break;
        default:
          break;
      }
      this.type = type;

      this.formatData();
    },

    formatData () {
      const { shopList, type } = this;

      switch (type) {
        case 'distance':
        case 'order_lead_time':
        case 'float_minimum_order_amount':
        case 'float_delivery_fee':
          shopList.sort((a, b) => a.restaurant[type] - b.restaurant[type]);
          break;
        case 'is_premium':
          this.shopList = shopList.filter(({ restaurant: { is_premium } }) => is_premium);
          break;
        case 'rating':
        case 'recent_order_num':
          shopList.sort((a, b) => b.restaurant[type] - a.restaurant[type]);
          break;
        default:
          this.shopList = [...this.allShopList];
          break;
      }
    }
  }
};
</script>
