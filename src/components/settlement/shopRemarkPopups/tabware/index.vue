<template>
  <mt-popup
    v-model="popupShow"
    popup-transition="popup-slide"
    position="bottom"
    class="popup"
  >
    <span class="icon-close" @click="handleTabwarePopup(false)">
      <i class="fa fa-times"></i>
    </span>
    <h3 class="title">
      <em class="name">餐具份数</em>
    </h3>
    <ul class="list">
      <li
        class="item"
        :key="idx"
        :class="{active: tabware.curIdx === idx}"
        v-for="(item, idx) of tabware.list"
        @click="handleItems(item, idx)"
      >{{item}}</li>
    </ul>
  </mt-popup>
</template>

<script>
export default {
  name: 'SettlementRemarkTabwarePopup',

  props: {
    tabware: Object,
    list: Array
  },
  data () {
    return {
      popupShow: false
    }
  },

  mounted () {
    this.$bus.$on('handleTabwarePopup', (show) =>
      this.handleTabwarePopup(show)
    )
  },

  methods: {
    handleTabwarePopup (show) {
      this.popupShow = show;
    },

    handleItems (item, idx) {
      if (this.curIdx !== idx) {
        this.tabware.curIdx = idx;
        this.list[0].txt = item;
        this.handleTabwarePopup(false);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.popup {
  width: 100%;
  padding: 2rem;

  .icon-close {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;

    .fa {
      font-size: 2.5rem;
    }
  }

  .title {
    text-align: center;

    .name {
      position: relative;
      color: #000;
      font-size: 1.8rem;

      &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 2rem;
        height: 0.1rem;
        background-color: #333;
        transform: translateY(-50%);
      }

      &::before {
        left: -3rem;
      }

      &::after {
        right: -3rem;
      }
    }
  }

  .list {
    margin-top: 1rem;

    .item {
      padding: 1.2rem 0;
      font-size: 1.6rem;
      text-align: center;

      &.active {
        color: $defaultGreen;
      }
    }
  }
}
</style>