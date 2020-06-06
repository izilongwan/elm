<template>
  <!-- Home 入口分类 -->
  <div class="catefory-bd">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item, idx) of entries" :key="idx">
        <ul class="list">
          <MyCategoryItem
            v-for="(cItem, cIdx) of item"
            :key="cIdx"
            :item="cItem"
          />
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import MyCategoryItem from './sub';

export default {
  name: 'MyCategory',

  components: { MyCategoryItem },

  props: {
    entries: Array
  }
}
</script>
<style lang="stylus" scoped>
.catefory-bd {
  height: 16rem;
  background-color: #fff;

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
