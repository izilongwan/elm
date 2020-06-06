<template>
  <li class="item" @click="clickAreaItem(item)">
    <p class="name">{{item.name}}</p>
    <p class="address">{{item.district}}{{item.address}}</p>
  </li>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    item: Object,
    clickAreaItem: Function
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  padding: 1rem 2rem;
  background-color: #fff;
  font-size: 1.6rem;

  & + .item {
    border-top: 1px solid #eee;
  }

  .name {
    ellipsis();
    font-weight: bold;
    line-height: 3rem;
  }

  .address {
    ellipsis();
    color: #999;
  }
}
</style>