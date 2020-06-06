<template>
  <!-- 订单项 -->
  <div class="item">
    <div class="cell">
      <div class="img-wrap">
        <img :src="item.shopping.rst.image_path" alt="item" />
      </div>

      <div class="info">
        <router-link
          :to="{name: 'orderDetail', params: {id: item.id, detailInfo: item}}"
          class="main"
        >
          <div class="title">
            <h3>{{item.shopping.rst.name}}</h3>

            <i class="fa fa-angle-right"></i>
          </div>

          <p class="date">{{time}}</p>
        </router-link>

        <em class="tip">订单已完成</em>
      </div>
    </div>

    <!-- 商品合计数量/价格 -->
    <OrderCardItemTotal :shopping="item.shopping" />

    <!-- 删除订单/再来一单按钮 -->
    <OrderCardItemBtns
      :shoppingId="item.shopping.id"
      :orderId="item.order_id"
    />
  </div>
</template>

<script>
import tools from "utils/tools";

import OrderCardItemTotal from './total';
import OrderCardItemBtns from './btns';

export default {
  name: 'OrderCardItem',
  props: {
    item: Object
  },

  components: {
    OrderCardItemTotal,
    OrderCardItemBtns
  },

  computed: {
    time () {
      return tools.formatTime(this.item.date);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  padding: 1rem 2rem 0.5rem;
  margin-bottom: 1rem;
  background-color: #fff;

  .cell {
    flex-row();

    .img-wrap {
      width: 4rem;
      height: 4rem;
      box-shadow: 0 0 2px #eee;
    }

    .info {
      flex-row();
      justify-content: space-between;
      align-items: center;
      flex: 1;
      margin-left: 1rem;
      border-bottom: 1px solid #eee;
      overflow: hidden;

      .main {
        width: 70%;

        .title {
          flex-row();

          h3 {
            ellipsis();
            width: 85%;
            font-size: 1.8rem;
            font-weight: bold;
          }

          .fa {
            font-size: 2rem;
            color: #999;
          }
        }

        .date {
          margin: 0.8rem 0;
          color: #999;
        }
      }

      .tip {
        font-size: 1.6rem;
        color: #999;
      }
    }
  }
}
</style>
