<template>
  <!-- Home 定位地址 -->
  <router-link to="location" class="geo">
    <i class="fa fa-map-marker"></i>
    <em class="address">
      <template v-if="address">
        {{address}}
      </template>
      <template v-else>
        <mt-spinner style="display: flex; justify-content: center;" type="triple-bounce" :size="20"></mt-spinner>
      </template>
    </em>
    <i class="fa fa-sort-desc"></i>
  </router-link>
</template>

<script>
export default {
  name: 'HomeHeaderAddress',
  props: {
    address: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.geo {
  display: flex;
  align-items: center;
  height: 3rem;
  padding-left: 2rem;
  background-color: $defaultBg;
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;

  .fa {
    padding: 0 0.5rem;
  }

  .address {
    ellipsis();
    display: inline-block;
    max-width: 60%;
    min-width: 20%;
  }
}
</style>