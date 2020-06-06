<template>
  <!-- 通用搜索头部 -->
  <header class="header">
    <div class="input-wrap">
      <i class="fa fa-search"></i>
      <input
        type="text"
        :placeholder="placeholder"
        v-model.trim="keywords"
      />
    </div>
    <button class="cancel-btn" @click="$router.go(-1)">取 消</button>
  </header>
</template>

<script>
export default {
  name: 'commonSearchHeader',

  props: {
    placeholder: String
  },

  data () {
    return {
      keywords: ''
    }
  },

  deactivated () {
    this.keywords = '';
  },

  mounted () {
    this.$bus.$on('restorePositionPopupSearchkeywords', (val) =>
      this.keywords = val
    );
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
@import '~styles/variables.styl';

.header {
  position: relative;
  flex-row();
  background-color: #fff;
  padding: 0.5rem 1rem 0.5rem 2rem;

  .input-wrap {
    flex: 1;
    background-color: #eee;
    border-radius: 10px;
    line-height: 4rem;

    .fa {
      padding: 0 1rem;
    }

    input {
      height: 4rem;
    }
  }

  .cancel-btn {
    width: 7rem;
    color: $defaultBg;
    font-weight: bold;
    font-size: 1.6rem;
  }
}
</style>