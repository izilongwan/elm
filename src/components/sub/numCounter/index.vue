<template>
  <!-- 计数器 -->
  <div class="num-counter">
    <span
      class="count-btn"
      v-show="item.count > 0"
      @click.stop="item.count--"
    >
      <i class="fa fa-minus-circle"></i>
    </span>
    <em v-show="item.count > 0" class="count">{{item.count}}</em>
    <span class="count-btn" @click.stop="item.count++">
      <i class="fa fa-plus-circle"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NumCounter',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.num-counter {
  .count-btn {
    color: $defaultBg;
  }

  .fa {
    font-size: 2rem;
  }

  .count {
    padding: 0 0.8rem;
    vertical-align: 0.15rem;
  }
}
</style>