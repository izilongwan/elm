<template>
  <div class="no-data-tip">
    <div class="img-wrap">
      <img src="~images/no_search.png" alt="/" />
    </div>
    <div class="tip">
      <p>附近没有搜索到结果</p>
      <p>换个关键词试试吧 ~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.no-data-tip {
  flex-row();
  align-items: center;
  background-color: #fff;
  padding: 3rem;

  .img-wrap {
    width: 13rem;
  }

  .tip {
    font-size: 1.8rem;
    color: #999;
    line-height: 2.5rem;
  }
}
</style>