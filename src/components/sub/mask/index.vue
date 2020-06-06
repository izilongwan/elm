<template>
  <!-- 遮罩层面板 -->
  <aside
    class="mask-bd"
    v-show="field"
    @click.self="$emit('handleMaskField', '')"
  >
    <!-- 推荐分类排序 -->
    <RecomSort v-show="field === 'sort'" :sorts="sorts" />

    <!-- 推荐过滤 -->
    <RecomFilter v-show="field === 'filter'" :filters="filters" />
  </aside>
</template>

<script>
import RecomSort from './sort';
import RecomFilter from './filter';

export default {
  name: 'RecomMask',
  components: {
    RecomSort,
    RecomFilter
  },

  props: {
    field: String,
    sorts: Array,
    filters: Array
  }
}
</script>

<style lang="stylus" scoped>
.mask-bd {
  position: fixed;
  top: 9.2rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>