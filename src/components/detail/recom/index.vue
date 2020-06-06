<template>
  <!-- 商家推荐 -->
  <div class="recom" v-if="recom">
    <h3 class="title">{{recom.name}}</h3>
    <div class="scroll-list">
      <!-- 推荐列表 -->
      <ul class="list">
        <DetailOrderRecomItem
          v-for="(item, idx) of recom.items"
          :key="idx"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DetailOrderRecomItem from './sub';

export default {
  name: 'DetailOrderRecom',
  components: { DetailOrderRecomItem },

  props: {
    recom: Object
  }
}
</script>

<style lang="stylus" scoped>
.recom {
  padding: 1rem;
  background-color: #fff;

  .title {
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 4rem;
  }

  .scroll-list {
    height: 20rem;
    overflow: hidden;
  }

  .list {
    height: 22rem;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>