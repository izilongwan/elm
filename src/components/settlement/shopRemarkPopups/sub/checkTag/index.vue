<template>
  <!-- 多选标签 -->
  <div class="check-tag">
    <ul class="list">
      <li
        class="item"
        :class="{active: item.check}"
        :key="idx"
        v-for="(item, idx) of notes.checkTags"
        @click="handleItem(item)"
      >{{item.txt}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SettlementShopRemarkNotesPopupCheckTag',
  props: {
    notes: Object
  },

  methods: {
    handleItem (item) {
      item.check = !item.check;

      const notes = this.notes,
        _arr = notes.selectedCheckTags;

      const idx = notes.checkTags.findIndex(val =>
        val.txt === item
      )

      item.check ? _arr.push(item.txt) : _arr.splice(idx, 1);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.check-tag {
  .item {
    display: inline-block;
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    margin: 0 1rem 1rem 0;
    border-radius: 3px;

    &.active {
      background-color: $defaultBg;
      color: #fff;
    }
  }
}
</style>