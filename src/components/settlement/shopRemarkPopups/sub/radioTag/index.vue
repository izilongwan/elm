<template>
  <!-- 单选标签 -->
  <div class="radio-tag">
    <ul class="list">
      <li
        class="item"
        :class="{active: notes.curIdx === idx}"
        :key="idx"
        v-for="(item, idx) of notes.radioTags"
        @click="handleItem(item, idx)"
      >
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SettlementShopRemarkNotesPopupRadioTag',
  props: {
    notes: Object
  },

  methods: {
    handleItem (item, idx) {
      if (this.curIdx !== idx) {
        const notes = this.notes;

        notes.curIdx = idx;
        notes.selectedRadioTag = item;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.radio-tag {
  margin: 1rem 0;

  .list {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;

    .item {
      display: inline-block;
      padding: 0.8rem 0;

      span {
        padding: 0 1rem;
        border-left: 1px solid #eee;
        box-sizing: border-box;
      }

      &.active {
        background-color: $defaultBg;
        color: #fff;
      }

      &:first-child {
        span {
          border-left: none;
        }
      }
    }
  }
}
</style>