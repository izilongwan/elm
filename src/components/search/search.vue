<template>
  <div class="search-bd">
    <div class="search-wrap">
      <i class="fa fa-search"></i>
      <input
        type="text"
        v-model.trim="keywords"
        placeholder="请输入商家、商品名称"
      />
    </div>
    <button class="btn">搜 索</button>
  </div>
</template>

<script>
export default {
  name: 'SearchSearch',

  data () {
    return {
      keywords: ''
    }
  },
  
  deactivated () {
    this.keywords = '';
  },

  watch: {
    keywords (val) {
      this.$emit('searchKeywordsChange', val);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.search-bd {
  flex-row();
  padding: 1rem 1.5rem;
  background-color: #fff;

  .search-wrap {
    flex: 1;
    background-color: #eeeeeea3;
    border-radius: 1.5rem;
    line-height: 3.1rem;

    .fa {
      margin: 0 1rem;
      color: #999;
      font-size: 1.6rem;
    }

    input {
      height: 3rem;
    }
  }

  .btn {
    width: 5rem;
    font-size: 1.6rem;
  }
}
</style>