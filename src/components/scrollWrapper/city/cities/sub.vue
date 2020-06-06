<template>
  <li class="item" :data-item="JSON.stringify(item)">{{item.name}}</li>
</template>

<script>
export default {
  name: 'CityItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
.item {
  padding: 1.5rem 2rem;

  & + .item {
    border-top: 1px solid #eee;
  }
}
</style>