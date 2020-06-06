<template>
  <!-- 商品列表 -->
  <ul class="list">
    <li class="item">
      <h3 class="title">
        <em class="name">{{ item.name }}</em>
        <span>{{ item.description }}</span>
      </h3>
      <ul class="c-list">
        <li
          class="c-item"
          :key="cIdx"
          v-for="(cItem, cIdx) of item.foods"
          @click.stop="$bus.$emit('handleGoodsDetail', cItem)"
        >
          <div class="img-wrap">
            <img :src="cItem.image_path" :alt="cItem.image_path" />
          </div>
          <div class="info">
            <h3 class="name">{{ cItem.name }}</h3>
            <p class="desc">{{ cItem.description }}</p>
            <p
              class="sales"
            >月售{{ cItem.month_sales }}单 好评率{{ cItem.satisfy_rate }}%</p>
            <div class="cell">
              <em class="price">￥{{ cItem.activity.fixed_price }}</em>
              <NumCounter :item="cItem" />
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import NumCounter from 'components/sub/numCounter';

export default {
  name: 'DetailOrderRightList',
  props: {
    item: Object
  },

  components: { NumCounter }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.item {
  .title {
    padding: 1rem;

    .name {
      color: #000;
    }

    span {
      margin-left: 1rem;
      color: #999;
      font-size: 1.3rem;
    }
  }

  .c-item {
    flex-row();
    margin-bottom: 2rem;

    .img-wrap {
      width: 8rem;
      margin: 0 1rem;
    }

    .info {
      flex: 1;
      margin-right: 1.2rem;
      overflow: hidden;

      .name {
        font-size: 1.6rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }

      .desc {
        ellipsis();
        color: #999;
        font-size: 1.3rem;
      }

      .sales {
        ellipsis();
        color: #999;
        font-size: 1.3rem;
        margin: 0.7rem 0 1rem;
      }

      .cell {
        flex-row();
        justify-content: space-between;
        align-c-s: center;

        .price {
          font-size: 1.6rem;
          font-weight: bold;
          color: $defaultOrange;
        }
      }
    }
  }
}
</style>
