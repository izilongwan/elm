<template>
  <!-- 假搜索框 -->
  <div class="false-bd" :class="{fixed: isFixed}">
    <router-link to="search" class="false-search-wrap">
      <div class="false-search">
        <i class="fa fa-search"></i>
        <em class="txt">输入商家、商家名称</em>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderFalseSearch',

  data () {
    return {
      isFixed: false
    }
  },

  mounted () {
    this.$bus.$on('falseSearchFixed', (show) => this.isFixed = show);
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.false-bd {
  position: sticky;
  top: 4.3rem;
  z-index: 1;
  background-color: $defaultBg;
  padding: 0.8rem 1.5rem;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .false-search-wrap {
    display: block;
    height: 3rem;
    background-color: #fff;
    border-radius: 2rem;
    text-align: center;
    line-height: 3.1rem;

    .false-search {
      color: #999;

      .txt {
        padding: 0 0.5rem;
      }
    }
  }
}
</style>
