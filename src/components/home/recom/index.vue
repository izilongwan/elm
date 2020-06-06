<template>
  <!-- 推荐面板 -->
  <div class="recom-bd">
    <!-- 推荐标题 -->
    <RecomTitle />

    <!-- 推荐导航 -->
    <FilterNav :recomDatas="recomDatas" />

    <!-- 商家列表 -->
    <RecomShopList
      :shopList="shopList"
      :allLoaded="allLoaded"
      :bottomPullText="bottomPullText"
    />
  </div>
</template>

<script>
import RecomTitle from './title';
import FilterNav from 'components/sub/nav';
import RecomShopList from 'components/sub/shopList';

export default {
  name: 'HomeRecom',

  components: {
    RecomTitle,
    FilterNav,
    RecomShopList
  },

  props: {
    recomDatas: Object,
    shopList: Array,
    allLoaded: Boolean,
    bottomPullText: String
  }
}
</script>