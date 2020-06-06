<template>
  <!-- 搜索页面 -->
  <div class="container">
    <!-- 搜索 头部 -->
    <CommonHeader title="搜 索" />

    <!-- 搜索框 -->
    <SearchSearch @searchKeywordsChange="(keys) => keywords = keys" />

    <!-- 搜索列表 -->
    <SearchScrollWrapper :keywords="keywords" />
  </div>
</template>

<script>
import CommonHeader from 'components/header/common';
import SearchSearch from 'components/search/search';
import SearchScrollWrapper from 'components/scrollWrapper/search';

export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchSearch,
    SearchScrollWrapper
  },

  data () {
    return {
      keywords: ''
    }
  }
}
</script>