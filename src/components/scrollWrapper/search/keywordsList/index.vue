<template>
  <!-- 关键词列表 -->
  <section>
    <ul class="list">
      <li class="item" v-for="(item, idx) of list" :key="idx">
        <i class="fa fa-search"></i>
        <h3 class="name">{{item}}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SearchKeywordsList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items center;
  background-color: #fff;
  padding: 1.8rem 1rem;
  font-size: 1.6rem;
  color: #999;
  border-top: 1px solid #eee;

  .fa {
    font-size: 1.8rem;
  }

  .name {
    margin-left: 1rem;
  }
}
</style>