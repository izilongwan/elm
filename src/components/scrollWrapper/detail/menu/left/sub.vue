<template>
  <!-- 左侧菜单项 -->
  <li
    class="item"
    :class="{ active: menuIdx === idx }"
    @click="clickMenuItem(idx)"
  >
    <div class="img-wrap" v-if="item.icon_url">
      <img :src="item.icon_url" :alt="item.icon_url" />
    </div>
    <em class="name">{{ item.name }}</em>
  </li>
</template>

<script>
export default {
  name: 'DetailOrderLeftMenuItem',
  props: {
    item: Object,
    idx: Number,
    menuIdx: Number
  },

  methods: {
    clickMenuItem (idx) {
      if (this.menuIdx !== idx) {
        this.$bus.$emit('menuIdxChange', idx);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items: center;
  padding: 1.2rem 1rem;
  background-color: transparent;
  transition: background-color 0.3s;

  &.active {
    position: relative;
    background-color: #fff;
    color: #000;

    &::before {
      position: absolute;
      content: '';
      top: 30%;
      left: 0;
      width: 0.5rem;
      height: 40%;
      background-color: #ff5722d4;
    }
  }

  .img-wrap {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  .name {
    line-height: 1.8rem;
  }
}
</style>
