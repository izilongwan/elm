<template>
  <!-- 信息备注主要内容 -->
  <main class="main">
    <div class="textarea-wrap">
      <textarea
        v-model="notes.text"
        placeholder="请额外备注对店家、骑手小哥的信息"
        maxlength="100"
        rows="7"
      ></textarea>
    </div>

    <!-- 单选Tag -->
    <SettlementShopRemarkNotesPopupRadioTag :notes="notes" />

    <!-- 多选Tag -->
    <SettlementShopRemarkNotesPopupCheckTag :notes="notes" />
  </main>
</template>

<script>
import SettlementShopRemarkNotesPopupRadioTag from '../../sub/radioTag';
import SettlementShopRemarkNotesPopupCheckTag from '../../sub/checkTag';

export default {
  name: 'SettlementShopRemarkNotesPopupMain',
  components: {
    SettlementShopRemarkNotesPopupRadioTag,
    SettlementShopRemarkNotesPopupCheckTag
  },

  props: {
    notes: Object
  }
}
</script>

<style lang="stylus" scoped>
.main {
  margin: 1rem 0 2rem;
  padding: 2rem;
  background-color: #fff;

  .textarea-wrap {
    padding: 0.5rem;
    background-color: #efefef;
    border: 1px solid #ccc;
    border-radius: 3px;

    textarea {
      width: 100%;
      line-height: 1.7rem;
      text-indent: 1em;
    }
  }

  .select-area {
  }
}
</style>