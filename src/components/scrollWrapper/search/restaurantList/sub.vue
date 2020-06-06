<template>
  <!-- 列表店铺项 -->
  <router-link
    tag="li"
    :to="`/detail/${item.id}`"
    class="item"
  >
    <div class="info">
      <div class="img-wrap">
        <img :src="item.image_path" :alt="item.image_path" />
      </div>

      <h3 class="name">{{item.name}}</h3>
    </div>

    <span class="score">{{item.rating}}</span>
  </router-link>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  justify-content: space-between;
  align-items: center;
  display: block;
  padding: 1rem 2rem;
  background-color: #fff;

  .info {
    flex-row();
    width: 80%;
    align-items: center;
    overflow: hidden;

    .img-wrap {
      width: 4rem;
      border: 1px solid #efefef;
    }

    .name {
      ellipsis();
      width: 100%;
      margin-left: 1.5rem;
      font-size: 1.6rem;
    }
  }

  & + .item {
    border-top: 1px solid #eee;
  }
}
</style>
