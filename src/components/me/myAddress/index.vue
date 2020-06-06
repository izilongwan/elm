<template>
  <router-link to="address" class="my-address">
    <i class="fa fa-map-marker"></i>
    <em class="address">我的地址</em>
  </router-link>
</template>

<script>
export default {
  name: 'IndexMeMyAddress'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.my-address {
  display: block;
  margin: 1rem 0;
  background-color: #fff;
  padding: 2rem;
  font-size: 1.6rem;

  .fa {
    color: $defaultBg;
  }

  .address {
    margin-left: 2rem;
    color: #000;
  }
}
</style>