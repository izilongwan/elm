<template>
  <mt-header class="common-header" :title="title">
    <div @click="$router.go(-1)" slot="left" v-if="isLeftShow">
      <mt-button icon="back">返回</mt-button>
    </div>
    <mt-button v-if="isRightShow" icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    title: String,
    isRightShow: {
      type: Boolean,
      default: false
    },
    isLeftShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.common-header {
  position: sticky;
  z-index: 1;
  top: 0;
  height: $headerHeight;

  >>> .mint-header-title {
    font-size: 1.6rem;
  }
}
</style>