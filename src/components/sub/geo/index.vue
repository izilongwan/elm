<template>
  <!-- 当前位置 -->
  <div class="geo">
    <h3>当前定位</h3>
    <div class="location">
      <i class="fa fa-location-arrow"></i>
      <p class="address" @click="$router.push('/home')">
        <span v-if="address">{{address}}</span>
        <mt-spinner
          v-else
          style="display: flex; justify-content: center;"
          type="triple-bounce"
          :size="20"
        ></mt-spinner>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationGeo',
  props: {
    address: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.geo {
  background-color: #fff;
  padding: 0.5rem 2rem 1rem;

  h3 {
    color: #000;
  }

  .location {
    flex-row();
    align-items: center;

    .fa {
      padding-right: 1rem;
      font-size: 1.8rem;
      color: #38f;
    }

    .address {
      ellipsis();
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 3.5rem;
    }
  }
}
</style>