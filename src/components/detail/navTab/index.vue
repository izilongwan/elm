<template>
  <!-- 用户导航 -->
  <nav class="nav-tab">
    <ul class="list">
      <li
        class="item"
        :class="{active: item.field == field}"
        :key="item.field"
        v-for="item of navTab"
        @click="clickNavTab(item.field)"
      >{{item.title}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DetailNavTab',
  data () {
    return {
      navTab: [
        { field: 'order', title: '点餐' },
        { field: 'comment', title: '评论' },
        { field: 'seller', title: '商家' }
      ]
    }
  },

  props: {
    field: String
  },

  methods: {
    clickNavTab (field) {
      if (this.field !== field) {
        this.$emit('navTabFieldChange', field);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.nav-tab {
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .list {
    height: 5rem;

    .item {
      position: relative;
      float: left;
      width: 33.3%;
      font-size: 1.6rem;
      text-align: center;
      line-height: 5rem;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -1px;
        width: 0;
        border-bottom: 2px solid transparent;
        transform: translateX(-50%);
      }

      &.active {
        font-weight: bold;

        &::after {
          width: 3.5rem;
          border-color: $defaultBg;
          transition: width 0.5s, color 0.5s;
        }
      }
    }
  }
}
</style>