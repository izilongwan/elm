<template>
  <!-- 店铺详情 -->
  <div
    class="container scroll"
    ref="container"
    v-if="orderDatas"
  >
    <div class="scroll-wrap scroll">
      <!-- 店铺头部信息 -->
      <DetailHeader :rst="orderDatas.rst" />

      <!-- 店铺标题 -->
      <DetailTitle :rst="orderDatas.rst" />

      <!-- 商家基本信息 -->
      <DetailBaseTip :rst="orderDatas.rst" />

      <!-- 商家优惠活动 -->
      <DetailActivities
        :activities="orderDatas.rst.activities"
      />

      <!-- 商家公告 -->
      <DetailPromotion
        :promotion="orderDatas.rst.promotion_info"
      />

      <!-- 导航 -->
      <DetailNavTab
        :field="navTabField"
        @navTabFieldChange="(field) => (navTabField = field)"
      />

      <!-- 导航内容 点餐/评论/商家 -->
      <component
        ref="mainComponent"
        :is="componentId"
        :orderDatas="orderDatas"
        :commentDatas="commentDatas"
        :sellerDatas="sellerDatas"
      ></component>
    </div>
  </div>
</template>

<script>
import { DetailModel } from 'models/detail';
import detailDatas from 'data/detail';

import DetailHeader from 'components/header/detail';
import DetailTitle from 'components/detail/title';
import DetailBaseTip from 'components/detail/baseTip';
import DetailActivities from 'components/detail/activities';
import DetailPromotion from 'components/detail/promotion';
import DetailNavTab from 'components/detail/navTab';
import DetailOrder from 'components/detail/order';
import DetailComments from 'components/detail/comments';
import DetailSeller from 'components/detail/seller';
import { gainsboro } from 'color-name';

export default {
  name: 'Detail',

  props: {
    id: String
  },

  components: {
    DetailHeader,
    DetailTitle,
    DetailBaseTip,
    DetailActivities,
    DetailPromotion,
    DetailNavTab
  },

  data () {
    return {
      sellerDatas: detailDatas.seller,
      orderDatas: null,
      commentDatas: null,
      navTabField: 'order',
      t: null
    };
  },

  mounted () {
    this.formatGoods(detailDatas);
    this.detailModel = new DetailModel();
  },

  deactivated () {
    this.navTabField = 'order';
  },

  computed: {
    componentId () {
      this.pageScrollToTop();

      switch (this.navTabField) {
        case 'order':
          return DetailOrder;
          break;
        case 'comment':
          !this.commentDatas && this.getDetailComments();
          return DetailComments;
          break;
        case 'seller':
          // !this.sellerDatas && this.getDetailSeller();
          return DetailSeller;
          break;
        default:
          break;
      }
    }
  },

  methods: {
    getDetailShop () {
      this.detailModel
        .getDetailShop()
        .then((res) => {
          res && (this.orderDatas = res);
        })
        .catch((error) => console.log(error));
    },

    getDetailComments () {
      this.detailModel
        .getDetailComments()
        .then(res => {
          if (res && res.code === 0) {
            this.commentDatas = res.data;
          }
        })
    },

    getDetailSeller () {
      this.detailModel
        .getDetailSeller()
        .then(res => {
          res && (this.sellerDatas = res);
        })
    },

    formatGoods (data) {
      data.menu.forEach((val) =>
        val.foods.forEach((item) =>
          item.count = 0
        )
      );

      data.recommend.forEach((val) =>
        val.items.forEach((item) =>
          item.count = 0
        )
      );

      this.orderDatas = detailDatas;
    },

    pageScrollToTop () {
      const container = this.$refs.container;

      this.t = null;

      if (container) {
        this.t = setInterval(() => {
          container.scrollTop > 0
            ? container.scrollBy(0, -50)
            : clearInterval(this.t);
        }, 1000 / 60);
      }
    }
  }
};
</script>
