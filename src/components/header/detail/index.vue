<template>
  <!-- 店铺头部 -->
  <header class="header" v-if="rst">
    <div class="back-icon" @click="$router.go(-1)">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="cover-img">
      <img :src="rst.scheme" alt="背景图" />
    </div>
    <div class="img-wrap">
      <img :src="rst.image_path" alt="商家图片" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'DetailHeader',

  props: {
    rst: Object
  }
}
</script>

<style lang="stylus" scoped>
.header {
  position: relative;

  .back-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;

    .fa {
      font-size: 2.5rem;
      color: #fff;
    }
  }

  .cover-img {
    max-height: 12.5rem;
  }

  .img-wrap {
    position: absolute;
    top: 7rem;
    left: 50%;
    width: 7rem;
    transform: translateX(-50%);
  }
}
</style>