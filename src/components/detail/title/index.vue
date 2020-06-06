<template>
  <!-- 店铺标题 -->
  <div class="title" v-if="rst">
    <!-- 标题 -->
    <h3>{{rst.name}}</h3>
    <i
      class="fa fa-caret-right"
      @click="$bus.$emit('handleTitlePopup', true)"
    ></i>

    <!-- 标题弹窗 -->
    <TitlePopup :rst="rst" />
  </div>
</template>

<script>
import TitlePopup from '../titlePopup';

export default {
  name: 'DetailTitle',

  components: { TitlePopup },

  props: {
    rst: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  flex-row();
  align-items: center;
  padding: 3rem 2rem 1rem;
  background-color: #fff;

  h3 {
    ellipsis();
    padding-right: 2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .fa {
    padding: 0 1rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
}
</style>