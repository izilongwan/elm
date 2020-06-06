<template>
  <div class="alphabet">
    <!-- 城市字母列表 -->
    <ul class="list" @click="clickAlphabet">
      <li
        class="item"
        :class="{current: curIdx == idx}"
        v-for="(item, idx) of list"
        :data-idx="idx"
        :key="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    keys: Array
  },

  data () {
    return {
      curIdx: 0
    }
  },

  mounted () {
    this.$bus.$on('changeAlphbet', (idx) => this.curIdx = idx < 0 ? 0 : idx);
  },

  methods: {
    clickAlphabet (e) {
      const tar = e.target,
            idx = tar.dataset.idx;

      if (this.curIdx !== idx) {
        this.curIdx = idx;
        this.$bus.$emit('scrollToTitle', idx);
      }
    }
  },

  computed: {
    list () {
      const keys = Array.from(this.keys);

      keys.unshift('#');

      return keys;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.alphabet {
  position: absolute;
  top: 17.5rem;
  right: 0;

  .list {
    .item {
      padding: 0.3rem 1rem;
      color: #666;
      text-align: center;

      &.current {
        color: $defaultBg;
      }
    }
  }
}
</style>