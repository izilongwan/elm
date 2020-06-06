<template>
  <!-- 订单备注弹窗s -->
  <section>
    <!-- 餐具备注弹窗 -->
    <SettlementRemarkTabwarePopup
      :tabware="remarkDatas.popup.tabware"
      :list="remarkDatas.list"
    />

    <!-- 订单备注弹窗 -->
    <SettlementRemarkNotesPopup
      :notes="remarkDatas.popup.notes"
      :list="remarkDatas.list"
    />

    <!-- 订单发票弹窗 -->
    <SettlementRemarkBillPopup />
  </section>
</template>

<script>
import SettlementRemarkTabwarePopup from './tabware';
import SettlementRemarkNotesPopup from './notes';
import SettlementRemarkBillPopup from './bill';

export default {
  name: 'SettlementRemarkPopups',
  components: {
    SettlementRemarkTabwarePopup,
    SettlementRemarkNotesPopup,
    SettlementRemarkBillPopup
  },

  props: {
    remarkDatas: Object
  }
}
</script>