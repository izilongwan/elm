<template>
  <mt-popup
    v-model="popupShow"
    popup-transition="popup-slide"
    position="bottom"
    class="popup"
  >
    <p class="tip">该店铺暂不支持开发票</p>
  </mt-popup>
</template>

<script>
export default {
  name: 'SettlementRemarkBillPopup',
  data () {
    return {
      popupShow: false,
    }
  },

  mounted () {
    this.$bus.$on('handleBillPopup', (show) =>
      this.handleBillPopup(show)
    )
  },

  methods: {
    handleBillPopup (show) {
      this.popupShow = show;
    },
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.popup {
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  .tip {
    font-size: 1.8rem;
    text-align: center;
    line-height: 2.2rem;
  }
}
</style>