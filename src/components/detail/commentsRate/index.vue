<template>
  <div class="comments-rate">
    <div class="total-rate">
      <p class="all">{{rating.overall_score.toFixed(1)}}</p>
      <div class="cell">
        <p class="name">商家评分</p>
        <StarRating :rating="Number(rating.shop_score.toFixed(1))" />
      </div>
    </div>
    <ul class="list">
      <li class="item">
        <p>味道</p>
        <em>{{rating.taste_score.toFixed(1)}}</em>
      </li>
      <li class="item">
        <p>包装</p>
        <em>{{rating.package_score.toFixed(1)}}</em>
      </li>
      <li class="item deliver">
        <p>配送</p>
        <em>{{rating.rider_score.toFixed(1)}}</em>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from 'components/sub/starRating';

export default {
  name: 'DetailCommentsRate',
  props: {
    rating: Object
  },

  components: { StarRating }
}
</script>
<style lang             = "stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.comments-rate {
  flex-row();
  padding: 3rem 2rem;
  background-color: #fff;

  .total-rate {
    flex-row();
    align-items: center;

    .all {
      font-size: 3.5rem;
      color: $defaultOrange;
    }

    .cell {
      margin-left: 1.5rem;

      .name {
        margin-bottom: 0.3rem;
        font-size: 1.6rem;
      }
    }
  }

  .list {
    flex-row();
    flex: 1;
    align-items: center;

    .item {
      width: 33.3%;
      text-align: center;

      p {
        margin-bottom: 0.8rem;
      }

      &.deliver {
        border-left: 1px solid #ddd;
      }
    }
  }
}
</style>
