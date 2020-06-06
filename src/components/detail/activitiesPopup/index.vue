<template>
  <!-- 活动弹窗 -->
  <mt-popup
    v-model="popupShow"
    position="bottom"
    popup-transition="popup-slide"
    class="popup"
  >
    <div class="title">
      <h3>优惠活动</h3>
      <i class="fa fa-times" @click="handleActivitiesPopShow(false)"></i>
    </div>
    <ul class="list"></ul>
    <li class="item" v-for="(item, idx) of activities" :key="idx">
      <em
        :style="`background-color: #${item.icon_color}`"
      >{{item.icon_name}}</em>
      <span>{{item.description}}</span>
    </li>
  </mt-popup>
</template>

<script>
export default {
  name: 'DetailActivitiesPopup',
  props: {
    activities: Array
  },

  data () {
    return {
      popupShow: false
    }
  },

  mounted () {
    this.$bus.$on('handleActivitiesPopShow', (show) => this.handleActivitiesPopShow(show));
  },

  methods: {
    handleActivitiesPopShow (show) {
      this.popupShow = show;
    }
  }
}
</script>

<style lang="stylus" scoped>
.popup {
  width: 100%;
  padding: 2rem 3rem 7rem;

  .title {
    margin: 0.5rem 0;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    .fa {
      position: absolute;
      top: 1rem;
      right: 2rem;
      font-size: 2.2rem;
      color: #999;
    }
  }

  .list {
    margin: 1rem 0;
  }

  .item {
    line-height: 3.5rem;

    em {
      padding: 0.2rem 0.4rem;
      color: #fff;
    }

    span {
      margin-left: 1rem;
      color: #000;
    }
  }
}
</style>