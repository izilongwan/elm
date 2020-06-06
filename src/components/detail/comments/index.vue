<template>
  <!-- 评论区域 -->
  <section v-if="commentDatas">
    <!-- 商家评分 -->
    <DetailCommentsRate :rating="commentDatas.rating" />

    <!-- 评论区 -->
    <DetailCommentsInfo :commentDatas="commentDatas" />
  </section>
</template>

<script>
import DetailCommentsRate from '../commentsRate';
import DetailCommentsInfo from '../commentsInfo';

export default {
  name: 'DetailComments',
  components: {
    DetailCommentsRate,
    DetailCommentsInfo
  },

  props: {
    commentDatas: Object
  }
}
</script>
