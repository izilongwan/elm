<template>
  <li class="item" :data-item="JSON.stringify(item)">{{item.name}}</li>
</template>

<script>
export default {
  name: 'HotCityItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
.item {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #eee;
  border-radius: 5px;
  margin: 0 2rem 1rem 0;
}
</style>