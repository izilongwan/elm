<template>
  <!-- 商家活动 -->
  <div class="activities" v-if="activities">
    <p class="txt">
      <em
        class="tag"
        :style="`background-color: #${activities[0].icon_color}`"
      >{{activities[0].icon_name}}</em>
      <span>{{activities[0].description}}</span>
    </p>
    <em
      class="count"
      @click="$bus.$emit('handleActivitiesPopShow', true)"
    >
      <span>{{activities.length}}个优惠</span>
      <i class="fa fa-caret-down"></i>
    </em>

    <!-- 优惠活动弹窗 -->
    <ActivitiesPopup :activities="activities" />
  </div>
</template>

<script>
import ActivitiesPopup from '../activitiesPopup';

export default {
  name: 'DetailActivities',
  props: {
    activities: Array
  },

  components: { ActivitiesPopup }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.activities {
  flex-row();
  justify-content: space-between;
  padding: 0 3rem 0 2rem;
  line-height: 3rem;
  background-color: #fff;

  .txt {
    .tag {
      padding: 0.2rem 0.4rem;
      color: #fff;
    }

    span {
      margin-left: 1rem;
      color: #000;
    }
  }

  .count {
    color: #999;

    .fa {
      padding: 0 0.5rem;
    }
  }
}
</style>
