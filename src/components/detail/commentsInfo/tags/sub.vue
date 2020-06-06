<template>
  <li class="item" :class="{unsatisfied: item.unsatisfied}">
    <span class="name">{{item.name}}</span>
    <span v-show="item.count > 0" class="count">{{item.count}}</span>
  </li>
</template>

<script>
export default {
  name: 'DetailCommentInfoLTagsItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
.item {
  padding: 0.7rem 1rem;
  margin: 0 1rem 1rem 0;
  background-color: #ccf2ff29;
  border-radius: 5px;

  .name {
    color: #000;
  }

  .count {
    margin-left: 0.5rem;
    color: #999;
  }

  &.unsatisfied {
    background-color: #eee;
  }
}
</style>