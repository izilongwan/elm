<template>
  <!-- 星星评分面板 -->
  <em class="star-rating-bd">
    <i
      class="fa"
      v-for="(item, idx) of list"
      :key="idx"
      :class="item"
    ></i>
    <span v-if="isTextShow" class="rating">{{rating}}</span>
  </em>
</template>

<script>
const MAX_LENGTH = 5,
  STAR_ON = 'fa-star',
  STAR_HALF = 'fa-star-half-o',
  STAR_OFF = 'fa-star-o';

export default {
  name: 'StarRating',
  props: {
    rating: Number,
    isTextShow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    list () {
      const arr = [],
        score = Math.floor(this.rating * 2) / 2;

      for (let i = 0; i < Math.floor(score); i++) {
        arr.push(STAR_ON);
      }

      if (score % 1 !== 0) {
        arr.push(STAR_HALF);
      }

      while (arr.length < MAX_LENGTH) {
        arr.push(STAR_OFF);
      }

      return arr;
    }
  }
}
</script>

<style lang="stylus" scoped>
.star-rating-bd {
  .fa {
    color: #FFC107;
  }

  .rating {
    margin-left: 0.5rem;
    font-size: 1.3rem;
  }
}
</style>