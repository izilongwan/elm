<template>
  <!-- 评论区 -->
  <section>
    <!-- 评论标签 -->
    <DetailCommentInfoTags :tags="commentDatas.tags" />

    <!-- 评论列表 -->
    <DetailCommentInfoList
      :comments="commentDatas.comments"
    />
  </section>
</template>

<script>
import DetailCommentInfoTags from "./tags";
import DetailCommentInfoList from "./list";

export default {
  name: 'DetailCommentInfo',
  props: {
    commentDatas: Object
  },

  components: {
    DetailCommentInfoTags,
    DetailCommentInfoList
  }
}
</script>
