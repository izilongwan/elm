<template>
  <!-- 结算页面 -->
  <div class="container scroll" v-if="SHOPPING_INFO">
    <!-- 头部 -->
    <CommentHeader :isLeftShow="true" title="确认订单" />

    <div class="scroll-wrap scroll">
      <!-- 收货地址 -->
      <SettlementShopAddress />

      <!-- 送达时间 -->
      <SettlementDelivery :rst="SHOPPING_INFO.rst" />

      <!-- 订单信息 -->
      <SettlementShopInfo :shopInfo="SHOPPING_INFO" />

      <!-- 订单备注信息 -->
      <SettlementShopRemark :list="remarkDatas.list" />

      <!-- 订单备注弹窗s -->
      <SettlementRemarkPopups :remarkDatas="remarkDatas" />

      <!-- 去支付按钮 -->
      <SettlementPayBar
        :totalPrice="SHOPPING_INFO.total_price"
        :shoppingAddress="SHOPPING_ADDRESS"
        :list="remarkDatas.list"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import tools from 'utils/tools';
import remarkDatas from 'data/remark';

import CommentHeader from 'components/header/common';
import SettlementShopAddress from 'components/settlement/shopAddress';
import SettlementDelivery from 'components/settlement/delivery';
import SettlementShopInfo from 'components/sub/shopInfo';
import SettlementShopRemark from 'components/settlement/shopRemark';
import SettlementRemarkPopups from 'components/settlement/shopRemarkPopups';
import SettlementPayBar from 'components/settlement/payBar';

export default {
  name: 'Settlement',
  components: {
    CommentHeader,
    SettlementShopAddress,
    SettlementDelivery,
    SettlementShopInfo,
    SettlementShopRemark,
    SettlementRemarkPopups,
    SettlementPayBar
  },

  data () {
    return {
      t: null,
      remarkDatas,
      prev_remarkDatas: {}
    }
  },

  mounted () {
    this.prev_remarkDatas = tools.deepClone(this.remarkDatas);

    if (!this.SHOPPING_INFO) {
      this.$router.go(-1);
      return;
    }
  },

  computed: {
    ...mapState(['SHOPPING_INFO', 'SHOPPING_ADDRESS'])
  },

  deactivated () {
    this.restoreDatas();
  },

  methods: {
    restoreDatas () {
      clearTimeout(this.t);
      this.t = null;

      this.t = setTimeout(() =>
        this.remarkDatas = tools.deepClone(this.prev_remarkDatas)
        , 100
      );
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.container {
  padding-bottom: 5rem;
  background: linear-gradient(180deg, $defaultBg, $defaultBg, $containerBg, $containerBg, $containerBg);
  overflow-y: scroll;
}
</style>
