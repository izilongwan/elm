<template>
  <!-- 评论标签 -->
  <div class="tags-bd">
    <!-- 评论列表 -->
    <ul class="list">
      <DetailCommentInfoLTagsItem
        v-for="(item, idx) of tags"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import DetailCommentInfoLTagsItem from "./sub";

export default {
  name: 'DetailCommentInfoTags',
  props: {
    tags: Array
  },

  components: { DetailCommentInfoLTagsItem }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.tags-bd {
  padding: 1rem;
  background-color: #fff;

  .list {
    flex-row();
    flex-wrap: wrap;
  }
}
</style>