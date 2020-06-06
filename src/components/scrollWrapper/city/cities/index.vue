<template>
  <!-- 所有城市 -->
  <div class="all-cities">
    <template v-for="(item, idx) of keys">
      <h3 class="title" ref="titles" :key="idx">{{item}}</h3>
      <ul class="list" :key="item">
        <CityItem
          v-for="cItem of cityInfo[item]"
          :key="cItem.id"
          :item="cItem"
        />
      </ul>
    </template>
  </div>
</template>

<script>
import CityItem from './sub';

export default {
  name: 'AllCities',
  props: {
    cityInfo: Object,
    keys: Array
  },

  components: { CityItem },

  mounted () {
    setTimeout(() => {
      this.$bus.$emit('getCityTitles', this.$refs.titles);
    }, 500);
  }
}
</script>

<style lang="stylus" scoped>
.title {
  padding: 1rem 2rem;
}
</style>