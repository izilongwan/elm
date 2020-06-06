<template>
  <!-- 分类排序面板 -->
  <div class="sort-bd">
    <!-- 列表 -->
    <ul class="list">
      <li
        class="item"
        :class="{active: idx === curIdx}"
        :key="idx"
        @click="clickSort(item, idx)"
        v-for="(item, idx) of sorts"
      >
        <em>{{item.name}}</em>
        <i class="fa fa-check"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecomSort',
  props: {
    sorts: Array
  },

  data () {
    return {
      curIdx: 0
    }
  },

  methods: {
    clickSort (item, idx) {
      if (idx !== this.curIdx) {
        this.curIdx = idx;
        this.$bus.$emit('changeSortCode', item, 0);
        this.$bus.$emit('handleMaskField', '');
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.list {
  margin-top: 1rem;
  background-color: #fff;

  .item {
    flex-row();
    justify-content: space-between;
    padding: 1.5rem 3rem 1.5rem 2rem;
    font-size: 1.6rem;

    .fa {
      display: none;
    }

    &.active {
      font-weight: bold;
      color: $defaultBg;

      .fa {
        display: inline;
        font-size: 1.8rem;
      }
    }
  }
}
</style>