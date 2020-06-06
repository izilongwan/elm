<template>
  <!-- 热门城市 -->
  <div class="hot-cities">
    <h2 class="title">热门城市</h2>
    <ul class="list">
      <HotCityItem
        v-for="item of hotCities"
        :key="item.id"
        :item="item"
      ></HotCityItem>
    </ul>
  </div>
</template>

<script>
import HotCityItem from './sub';

export default {
  name: 'HotCities',
  props: {
    hotCities: Array
  },

  components: { HotCityItem }
}
</script>

<style lang="stylus" scoped>
.hot-cities {
  .title,
  .list {
    padding: 1rem 2rem;
  }
}
</style>