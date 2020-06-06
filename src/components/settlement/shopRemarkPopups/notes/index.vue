<template>
  <!-- 信息备注弹窗 -->
  <mt-popup
    v-model="popupShow"
    popup-transition="popup-slide"
    position="right"
    class="popup"
  >
    <!-- 信息备注头部 -->
    <CommonHeader
      :style="{position: 'static'}"
      title="信息备注"
    />

    <!-- 头部真正的返回功能按钮 -->
    <span
      class="icon-back"
      @click="handleNotesPopup(false)"
    ></span>

    <!-- 备注主要内容 -->
    <SettlementShopRemarkNotesPopupMain :notes="notes" />

    <!-- 确定按钮 -->
    <div class="btn-wrap">
      <button class="btn" @click="handleNotes">确 定</button>
    </div>
  </mt-popup>
</template>

<script>
import CommonHeader from 'components/header/common';
import SettlementShopRemarkNotesPopupMain from './main';

export default {
  name: 'SettlementRemarkNotesPopup',
  components: {
    CommonHeader,
    SettlementShopRemarkNotesPopupMain
  },

  props: {
    notes: Object,
    list: Array
  },

  data () {
    return {
      popupShow: false
    }
  },

  mounted () {
    this.$bus.$on('handleNotesPopup', (show) =>
      this.handleNotesPopup(show)
    )
  },

  methods: {
    handleNotesPopup (show) {
      this.popupShow = show;
    },

    handleNotes () {
      const text =
        this.notes.text +
        ', ' +
        this.notes.selectedRadioTag +
        ', ' +
        this.notes.selectedCheckTags.join(', ');

      this.list[1].txt = text.replace(/^,|,$/, '');
      this.handleNotesPopup(false);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.popup {
  width: 100%;
  height: 100%;
  background-color: $containerBg;

  .icon-back {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 7rem;
    height: 4rem;
  }

  .btn-wrap {
    text-align: center;

    .btn {
      width: 90%;
      height: 4rem;
      background-color: $defaultGreen;
      color: #ffffff;
      font-size: 1.6rem;
    }
  }
}
</style>
