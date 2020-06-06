<template>
  <!-- 入口分类的每一项 -->
  <li class="item">
    <div class="img-wrap">
      <img :src="item.image" v-lazy="item.image" alt="category" />
    </div>
    <p class="name">{{item.name}}</p>
  </li>
</template>

<script>
export default {
  name: 'MyCategoryItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.item {
  width: 20%;

  .img-wrap {
    padding: 0 1rem;

    img[lazy=loading] {
      width: 5.5rem;
      height: 5.5rem;
      background-color: $preloadBg;
    }
  }

  .name {
    ellipsis();
    text-align: center;
    font-size: 1.2rem;
  }
}
</style>