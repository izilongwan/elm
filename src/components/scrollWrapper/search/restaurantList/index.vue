<template>
  <!-- 搜索列表 -->
  <section>
    <ul class="list">
      <SearchItem v-for="(item, idx) of list" :key="idx" :item="item" />
    </ul>
  </section>
</template>

<script>
import SearchItem from './sub';

export default {
  name: 'SearchList',
  components: { SearchItem },

  props: {
    list: Array
  }
}
</script>

<style>

</style>