<template>
  <!-- 用户点餐 -->
  <section style="margin-top: 2rem">
    <!-- 商家推荐 -->
    <DetailOrderRecom
      v-for="(item, idx) of orderDatas.recommend"
      :key="idx"
      :recom="item"
    />

    <!-- 主菜单 -->
    <DetailOrderMenu :menu="orderDatas.menu" />

    <!-- 底部购物结算 -->
    <DetailCartComputer :res="orderDatas" />
  </section>
</template>

<script>
import DetailOrderRecom from '../recom';
import DetailOrderMenu from 'components/scrollWrapper/detail/menu';
import DetailCartComputer from '../cartComputer';

export default {
  name: 'detailOrder',
  components: {
    DetailOrderRecom,
    DetailOrderMenu,
    DetailCartComputer
  },

  props: {
    orderDatas: Object
  }
};
</script>
