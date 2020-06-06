<template>
  <!-- 列表项 -->
  <li class="item">
    <router-link
      :to="{name: 'detail', params: {id: item.id}}"
      class="item-lk"
    >
      <!-- 左侧图片 -->
      <div class="img-wrap">
        <img
          :src="item.image_path"
          v-lazy="item.image_path"
          alt="img"
        />
      </div>

      <!-- 右侧简介 -->
      <div class="info">
        <div class="title">
          <em v-if="item.is_premium" class="brand">品牌</em>
          <h3 class="name">{{item.name}}</h3>
        </div>

        <div class="cell">
          <div class="sales">
            <StarRating
              :rating="item.rating"
              :isTextShow="true"
            />

            <span class="sale">月售{{item.recent_order_num}}单</span>
          </div>

          <em
            class="peisong"
            v-if="item.delivery_mode"
          >{{item.delivery_mode.text}}</em>
        </div>

        <div class="deliver">
          <div class="left">
            <span
              classc="price"
            >￥{{item.float_minimum_order_amount}}元起</span>
            |
            <span
              class="fee"
            >{{item.piecewise_agent_fee.tips}}元</span>
          </div>

          <div class="right">
            <em
              class="distance"
            >{{Math.floor(item.distance / 1000).toFixed(1)}}km</em>
            |
            <span
              class="minutes"
            >{{item.order_lead_time}}分钟</span>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import StarRating from 'components/sub/starRating';

export default {
  name: 'ShopItem',
  props: {
    item: Object
  },

  components: { StarRating }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  background-color: #fff;

  & + .item {
    border-top: 1px solid #eee;
  }

  .item-lk {
    flex-row();
    padding: 1.5rem 1rem;
    box-sizing: border-box;

    .img-wrap {
      width: 7rem;

      img {
        box-shadow: 0 0 1px #efefef;

        &[lazy=loading] {
          min-height: 7rem;
        }
      }
    }

    .info {
      flex: 1;
      margin-left: 1.5rem;
      overflow: hidden;

      .title {
        flex-row();
        align-items: center;
        width: 100%;
        margin: 0 2rem 1rem 0;

        .brand {
          width: 4rem;
          height: 1.8rem;
          background-color: #FFEB3B;
          text-align: center;
          line-height: 1.8rem;
          color: #000;
        }

        .name {
          ellipsis();
          width: 100%;
          margin-left: 0.5rem;
          color: #000;
          font-size: 1.6rem;
        }
      }

      .cell {
        flex-row();
        justify-content: space-between;
        align-items: center;
        margin: 1.3rem 0;
        color: #555;

        .sale {
          margin-left: 1rem;
          font-size: 1.3rem;
        }

        .peisong {
          padding: 0.2rem 0.4rem;
          background-color: #38f;
          color: #fff;
          font-size: 1.2rem;
        }
      }

      .deliver {
        flex-row();
        justify-content: space-between;
        font-size: 1.3rem;

        .left {
          color: #666;
        }

        .right {
          color: #999;
        }
      }
    }
  }
}
</style>
