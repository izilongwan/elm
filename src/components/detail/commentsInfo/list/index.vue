<template>
  <!-- 用户评论 -->
  <div class="info-bd">
    <!-- 评论列表 -->
    <ul class="list">
      <DetailCommentInfoItem
        v-for="(item, idx) of comments"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import DetailCommentInfoItem from "./sub";

export default {
  name: 'DetailCommentInfoList',
  props: {
    comments: Array
  },

  components: { DetailCommentInfoItem }
}
</script>

<style lang="stylus" scoped>
.info-bd {
  margin-top: 2rem;

  .list {
    background-color: #fff;
    padding: 0 1.5rem;
  }
}
</style>